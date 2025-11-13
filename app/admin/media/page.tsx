"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { uploadFile } from "@/lib/firebase/storage";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase/config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingSpinner, LoadingSkeleton } from "@/components/ui/loading-spinner";
import { toast } from "@/components/ui/toast";

export default function MediaPage() {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ url: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMediaFiles();
  }, []);

  async function fetchMediaFiles() {
    try {
      if (!storage) {
        throw new Error("Firebase Storage is not initialized");
      }
      const mediaRef = ref(storage, "media");
      const result = await listAll(mediaRef);
      const urls = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return { url, name: item.name };
        })
      );
      setUploadedFiles(urls);
    } catch (error: any) {
      console.error("Error fetching media files:", error);
      toast("Failed to load media files", "error");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast("Please upload an image file", "warning");
      return;
    }

    setUploading(true);
    try {
      const path = `media/${Date.now()}_${file.name}`;
      const url = await uploadFile(file, path);
      toast("File uploaded successfully!", "success");
      setUploadedFiles([...uploadedFiles, { url, name: file.name }]);
      // Reset input
      e.target.value = "";
    } catch (error: any) {
      toast(error.message || "Failed to upload file", "error");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Media Library</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Upload File</CardTitle>
          <CardDescription>Upload images and other media files</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="file"
            onChange={handleUpload}
            disabled={uploading}
            accept="image/*"
          />
          {uploading && (
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <LoadingSpinner size="sm" />
              Uploading...
            </div>
          )}
        </CardContent>
      </Card>

      {loading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <LoadingSkeleton className="w-full aspect-video mb-2" />
                <LoadingSkeleton className="h-8 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : uploadedFiles.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Media Files ({uploadedFiles.length})</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {uploadedFiles.map((file, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="relative w-full aspect-video mb-2 bg-muted rounded">
                    <Image
                      src={file.url}
                      alt={file.name}
                      fill
                      className="object-contain rounded"
                      unoptimized
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 truncate" title={file.name}>
                    {file.name}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      navigator.clipboard.writeText(file.url);
                      toast("URL copied to clipboard", "success");
                    }}
                  >
                    Copy URL
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No media files yet. Upload your first file!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

