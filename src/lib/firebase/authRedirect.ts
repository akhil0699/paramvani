import { getRedirectResult, UserCredential } from "firebase/auth";
import { auth } from "./client";

let redirectPromise: Promise<UserCredential | null> | null = null;

/**
 * Firebase redirect sign-in must be consumed exactly once per page load.
 * React Strict Mode mounts twice in dev; without this singleton the second
 * mount calls getRedirectResult() after the first already consumed it.
 */
export function completeRedirectSignIn(): Promise<UserCredential | null> {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }

  if (!redirectPromise) {
    redirectPromise = getRedirectResult(auth);
  }

  return redirectPromise;
}
