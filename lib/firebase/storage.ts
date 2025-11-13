import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./config";

function getStorageInstance() {
  if (!storage) {
    throw new Error("Firebase Storage is not initialized. Make sure you're running this in the browser.");
  }
  return storage;
}

export async function uploadFile(file: File, path: string): Promise<string> {
  try {
    const storageInstance = getStorageInstance();
    const storageRef = ref(storageInstance, path);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export async function deleteFile(path: string): Promise<void> {
  try {
    const storageInstance = getStorageInstance();
    const storageRef = ref(storageInstance, path);
    await deleteObject(storageRef);
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
}

