"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  User as FirebaseUser, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged 
} from "firebase/auth";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase/client";

export type SubscriptionType = "free" | "weekly" | "monthly";

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  freeCredits: number;
  subscriptionType: SubscriptionType;
  subscriptionExpiry: number | null; // timestamp in ms
  createdAt: number;
}

interface AuthContextType {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (!firebaseUser) {
        setProfile(null);
        setLoading(false);
        return;
      }

      // Listen to Firestore document for real-time balance updates
      const docRef = doc(db, "users", firebaseUser.uid);
      
      const unsubscribeDoc = onSnapshot(docRef, async (docSnap) => {
        if (!docSnap.exists()) {
          // First time login - create document
          const newProfile: UserProfile = {
            uid: firebaseUser.uid,
            email: firebaseUser.email || "",
            name: firebaseUser.displayName || "User",
            freeCredits: 5,
            subscriptionType: "free",
            subscriptionExpiry: null,
            createdAt: Date.now(),
          };
          
          await setDoc(docRef, newProfile);
          setProfile(newProfile);
          
          // Show congrats toast (assuming window is available)
          if (typeof window !== "undefined") {
            // Trigger a custom event that a global toast component can listen to
            window.dispatchEvent(new CustomEvent('show-toast', { 
              detail: "🎉 Congrats! You got 5 free credits!" 
            }));
          }
        } else {
          setProfile(docSnap.data() as UserProfile);
        }
        setLoading(false);
      });

      return () => unsubscribeDoc();
    });

    return () => unsubscribeAuth();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
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
    <AuthContext.Provider value={{ user, profile, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
