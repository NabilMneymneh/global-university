import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./config";
import { UserData, UserRole } from "./auth";

function getDbInstance() {
  if (!db) {
    throw new Error("Firebase Firestore is not initialized. Make sure you're running this in the browser.");
  }
  return db;
}

export async function getAllUsers(): Promise<UserData[]> {
  try {
    const dbInstance = getDbInstance();
    const querySnapshot = await getDocs(collection(dbInstance, "users"));
    const users: UserData[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      users.push({
        uid: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as UserData);
    });

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function updateUserRole(uid: string, role: UserRole): Promise<void> {
  try {
    const dbInstance = getDbInstance();
    const userRef = doc(dbInstance, "users", uid);
    await updateDoc(userRef, {
      role,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error("Error updating user role:", error);
    throw error;
  }
}

export async function deleteUser(uid: string): Promise<void> {
  try {
    const dbInstance = getDbInstance();
    await deleteDoc(doc(dbInstance, "users", uid));
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

