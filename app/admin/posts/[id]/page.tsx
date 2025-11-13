"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getPost, createPost, updatePost, Post, PostType } from "@/lib/firebase/posts";
import { getCurrentUser } from "@/lib/firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner, LoadingSkeleton } from "@/components/ui/loading-spinner";
import { toast } from "@/components/ui/toast";

export default function EditPostPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;
  const isNew = postId === "new";

  const [post, setPost] = useState<Partial<Post>>({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    type: "blog",
    published: false,
  });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  async function fetchPost() {
    try {
      const fetchedPost = await getPost(postId);
      if (fetchedPost) {
        setPost(fetchedPost);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!isNew) {
      fetchPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, isNew]);

  async function handleSave() {
    setSaving(true);
    try {
      const user = await getCurrentUser();
      if (!user) {
        toast("You must be logged in to save posts", "error");
        return;
      }

      if (!post.title || !post.content) {
        toast("Please fill in all required fields", "warning");
        return;
      }

      const postData = {
        ...post,
        authorId: user.uid,
        slug: post.slug || post.title?.toLowerCase().replace(/\s+/g, "-") || "",
        createdAt: post.createdAt || new Date(),
        updatedAt: new Date(),
      };

      if (isNew) {
        await createPost(postData as Omit<Post, "id" | "createdAt" | "updatedAt">);
      } else {
        await updatePost(postId, postData);
      }

      toast(isNew ? "Post created successfully!" : "Post updated successfully!", "success");
      router.push("/admin/posts");
    } catch (error: any) {
      toast(error.message || "Failed to save post", "error");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <LoadingSkeleton className="h-8 w-48" />
        </div>
        <Card>
          <CardHeader>
            <LoadingSkeleton className="h-6 w-32 mb-2" />
            <LoadingSkeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <LoadingSkeleton className="h-4 w-24 mb-2" />
                <LoadingSkeleton className="h-10 w-full" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{isNew ? "Create New Post" : "Edit Post"}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Saving...
              </>
            ) : (
              "Save Post"
            )}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
          <CardDescription>Fill in the post information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <Input
              value={post.slug}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              placeholder="post-slug"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              value={post.type}
              onChange={(e) => setPost({ ...post, type: e.target.value as PostType })}
              className="w-full rounded-md border border-border px-3 py-2"
            >
              <option value="news">News</option>
              <option value="event">Event</option>
              <option value="blog">Blog</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Excerpt</label>
            <Textarea
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              placeholder="Brief description"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <Textarea
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              placeholder="Post content"
              rows={10}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="published"
              checked={post.published}
              onChange={(e) => setPost({ ...post, published: e.target.checked })}
              className="h-4 w-4"
            />
            <label htmlFor="published" className="text-sm font-medium">
              Publish immediately
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

