"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  User as FirebaseUser,
  signInWithPopup,
  signInWithRedirect,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase/client";
import { completeRedirectSignIn } from "@/lib/firebase/authRedirect";

export type SubscriptionType = "free" | "weekly" | "monthly";

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  freeCredits: number;
  subscriptionType: SubscriptionType;
  subscriptionExpiry: number | null;
  createdAt: number;
}

interface AuthContextType {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<boolean>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signInWithGoogle: async () => false,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const POST_LOGIN_REDIRECT_KEY = "paramvani_post_login_redirect";

function buildNewProfile(firebaseUser: FirebaseUser): UserProfile {
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email || "",
    name: firebaseUser.displayName || "User",
    freeCredits: 5,
    subscriptionType: "free",
    subscriptionExpiry: null,
    createdAt: Date.now(),
  };
}

async function loadUserProfile(
  firebaseUser: FirebaseUser,
  docRef: ReturnType<typeof doc>
): Promise<UserProfile> {
  await firebaseUser.getIdToken(true);

  let snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    const newProfile = buildNewProfile(firebaseUser);
    await setDoc(docRef, newProfile);
    snapshot = await getDoc(docRef);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("show-toast", {
          detail: "🎉 Congrats! You got 5 free credits!",
        })
      );
    }
  }

  if (!snapshot.exists()) {
    throw new FirebaseError("not-found", "User profile could not be created");
  }

  return snapshot.data() as UserProfile;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const signInInFlightRef = useRef(false);

  useEffect(() => {
    let unsubscribeDoc: (() => void) | null = null;
    let unsubscribeAuth: (() => void) | null = null;
    let cancelled = false;

    void (async () => {
      setLoading(true);

      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (error) {
        console.error("Failed to set auth persistence:", error);
      }

      try {
        const result = await completeRedirectSignIn();
        if (result?.user && typeof window !== "undefined") {
          const redirect = sessionStorage.getItem(POST_LOGIN_REDIRECT_KEY);
          if (redirect) {
            sessionStorage.removeItem(POST_LOGIN_REDIRECT_KEY);
            router.replace(redirect);
          }
        }
      } catch (error) {
        console.error("Google redirect sign-in failed:", error);
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("show-toast", {
              detail: "Sign-in failed. Please try again.",
            })
          );
        }
      }

      if (cancelled) return;

      unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
        if (unsubscribeDoc) {
          unsubscribeDoc();
          unsubscribeDoc = null;
        }

        setUser(firebaseUser);

        if (!firebaseUser) {
          setProfile(null);
          setLoading(false);
          return;
        }

        setLoading(true);

        void (async () => {
          try {
            const docRef = doc(db, "users", firebaseUser.uid);
            const userProfile = await loadUserProfile(firebaseUser, docRef);

            if (cancelled) return;

            setProfile(userProfile);
            setLoading(false);

            unsubscribeDoc = onSnapshot(
              docRef,
              (docSnap) => {
                if (docSnap.exists()) {
                  setProfile(docSnap.data() as UserProfile);
                }
              },
              (error) => {
                console.error("Firestore profile listener error:", error);
              }
            );
          } catch (error) {
            console.error("Failed to load user profile:", error);

            if (
              error instanceof FirebaseError &&
              error.code === "permission-denied"
            ) {
              try {
                await firebaseUser.getIdToken(true);
                const docRef = doc(db, "users", firebaseUser.uid);
                const userProfile = await loadUserProfile(
                  firebaseUser,
                  docRef
                );

                if (cancelled) return;

                setProfile(userProfile);
                setLoading(false);

                unsubscribeDoc = onSnapshot(
                  docRef,
                  (docSnap) => {
                    if (docSnap.exists()) {
                      setProfile(docSnap.data() as UserProfile);
                    }
                  },
                  (error) => {
                    console.error("Firestore profile listener error:", error);
                  }
                );
                return;
              } catch (retryError) {
                console.error("Profile load retry failed:", retryError);
              }
            }

            if (!cancelled) {
              setProfile(null);
              setLoading(false);
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("show-toast", {
                    detail:
                      "Could not load your profile. Try clearing site data and signing in again.",
                  })
                );
              }
            }
          }
        })();
      });
    })();

    return () => {
      cancelled = true;
      unsubscribeDoc?.();
      unsubscribeAuth?.();
    };
  }, [router]);

  useEffect(() => {
    if (!user || loading) return;

    const redirect = sessionStorage.getItem(POST_LOGIN_REDIRECT_KEY);
    if (redirect) {
      sessionStorage.removeItem(POST_LOGIN_REDIRECT_KEY);
      router.replace(redirect);
    }
  }, [user, loading, router]);

  const signInWithGoogle = async (): Promise<boolean> => {
    if (signInInFlightRef.current) {
      // A sign-in attempt is already running (e.g. double-click) — ignore
      // this call instead of racing a second popup/redirect against it.
      return false;
    }

    signInInFlightRef.current = true;

    try {
      await setPersistence(auth, browserLocalPersistence);

      const result = await signInWithPopup(auth, googleProvider);
      return !!result.user;
    } catch (error) {
      if (error instanceof FirebaseError) {
        // These just mean the popup was dismissed/superseded, not that
        // popups are actually blocked — never fall back to redirect here,
        // or you get both a popup AND a full-page redirect at once.
        if (
          error.code === "auth/popup-closed-by-user" ||
          error.code === "auth/cancelled-popup-request"
        ) {
          return false;
        }

        if (error.code === "auth/popup-blocked") {
          if (typeof window !== "undefined") {
            sessionStorage.setItem(POST_LOGIN_REDIRECT_KEY, "/choose");
          }
          await signInWithRedirect(auth, googleProvider);
          return false;
        }
      }

      console.error("Error signing in with Google", error);
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("show-toast", {
            detail: "Sign-in failed. Please try again.",
          })
        );
      }
      return false;
    } finally {
      signInInFlightRef.current = false;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, profile, loading, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
