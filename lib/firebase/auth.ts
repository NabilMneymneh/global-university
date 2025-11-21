import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { initializeApp, getApp, deleteApp } from "firebase/app";
import { auth } from "./config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";

// Helper to check if auth is available
function getAuthInstance() {
  if (!auth) {
    throw new Error("Firebase Auth is not initialized. Make sure you're running this in the browser.");
  }
  return auth;
}

function getDbInstance() {
  if (!db) {
    throw new Error("Firebase Firestore is not initialized. Make sure you're running this in the browser.");
  }
  return db;
}

export type UserRole = "admin" | "editor" | "viewer";

export interface UserData {
  uid: string;
  email: string;
  role: UserRole;
  displayName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function signIn(email: string, password: string) {
  try {
    const authInstance = getAuthInstance();
    const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
    return userCredential.user;
  } catch (error: any) {
    const errorMessage = error?.message || "Failed to sign in";
    throw new Error(errorMessage);
  }
}

export async function signUp(email: string, password: string, role: UserRole = "viewer") {
  try {
    const authInstance = getAuthInstance();
    const dbInstance = getDbInstance();
    const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
    const user = userCredential.user;

    // Create user document in Firestore
    const userData: Omit<UserData, "uid"> = {
      email: user.email!,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await setDoc(doc(dbInstance, "users", user.uid), userData);

    return user;
  } catch (error: any) {
    const errorMessage = error?.message || "Failed to create user";
    throw new Error(errorMessage);
  }
}

export async function createUserWithoutSignIn(email: string, password: string, role: UserRole = "viewer") {
  let secondaryApp;
  try {
    // Get config from the default app
    const config = getApp().options;
    // Create a unique name for the secondary app to avoid conflicts
    const appName = `secondary-app-${Date.now()}`;
    secondaryApp = initializeApp(config, appName);
    const secondaryAuth = getAuth(secondaryApp);

    const userCredential = await createUserWithEmailAndPassword(secondaryAuth, email, password);
    const user = userCredential.user;

    // Create user document in Firestore (using the PRIMARY app's db)
    const dbInstance = getDbInstance();
    const userData: Omit<UserData, "uid"> = {
      email: user.email!,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await setDoc(doc(dbInstance, "users", user.uid), userData);

    // Sign out from secondary app just in case
    await signOut(secondaryAuth);

    return user;
  } catch (error: any) {
    const errorMessage = error?.message || "Failed to create user";
    throw new Error(errorMessage);
  } finally {
    if (secondaryApp) {
      await deleteApp(secondaryApp);
    }
  }
}

export async function logOut() {
  try {
    const authInstance = getAuthInstance();
    await signOut(authInstance);
  } catch (error: any) {
    const errorMessage = error?.message || "Failed to sign out";
    throw new Error(errorMessage);
  }
}

export async function getUserData(uid: string): Promise<UserData | null> {
  try {
    const dbInstance = getDbInstance();
    const userDoc = await getDoc(doc(dbInstance, "users", uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      return {
        uid,
        email: data.email || "",
        role: data.role || "viewer",
        displayName: data.displayName,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as UserData;
    }
    return null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    try {
      const authInstance = getAuthInstance();

      // Check current user immediately if available
      const currentUser = authInstance.currentUser;
      if (currentUser) {
        resolve(currentUser);
        return;
      }

      // Set a timeout to prevent hanging
      const timeout = setTimeout(() => {
        unsubscribe();
        resolve(null); // Return null instead of rejecting for timeout
      }, 3000);

      const unsubscribe = onAuthStateChanged(
        authInstance,
        (user) => {
          clearTimeout(timeout);
          unsubscribe();
          resolve(user);
        },
        (error) => {
          clearTimeout(timeout);
          unsubscribe();
          console.error("Auth state error:", error);
          resolve(null); // Return null instead of rejecting
        }
      );
    } catch (error: any) {
      console.error("Error getting current user:", error);
      resolve(null); // Return null instead of rejecting
    }
  });
}

