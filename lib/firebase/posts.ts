import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";
import { db } from "./config";

export type PostType = "news" | "event" | "blog";

export interface Post {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  type: PostType;
  featuredImage?: string;
  authorId: string;
  authorName?: string;
  categoryId?: string;
  tags?: string[];
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export async function getPosts(
  type?: PostType,
  limitCount?: number
): Promise<Post[]> {
  try {
    let q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    
    if (type) {
      q = query(q, where("type", "==", type));
    }
    
    if (limitCount) {
      q = query(q, limit(limitCount));
    }

    const querySnapshot = await getDocs(q);
    const posts: Post[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      posts.push({
        id: doc.id,
        ...data,
        publishedAt: data.publishedAt?.toDate(),
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as Post);
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPost(id: string): Promise<Post | null> {
  try {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        publishedAt: data.publishedAt?.toDate(),
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as Post;
    }
    return null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function createPost(post: Omit<Post, "id" | "createdAt" | "updatedAt">): Promise<string> {
  try {
    const postData = {
      ...post,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      publishedAt: post.published ? Timestamp.now() : null,
    };

    const docRef = await addDoc(collection(db, "posts"), postData);
    return docRef.id;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

export async function updatePost(id: string, post: Partial<Post>): Promise<void> {
  try {
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      ...post,
      updatedAt: Timestamp.now(),
      publishedAt: post.published ? Timestamp.now() : null,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
}

export async function deletePost(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "posts", id));
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}

