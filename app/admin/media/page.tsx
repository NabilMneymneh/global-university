"use client";

import { useState } from "react";
import { uploadFile } from "@/lib/firebase/storage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MediaPage() {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const path = `media/${Date.now()}_${file.name}`;
      const url = await uploadFile(file, path);
      setUploadedFiles([...uploadedFiles, url]);
    } catch (error: any) {
      alert(error.message);
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
          {uploading && <p className="mt-2 text-sm text-muted-foreground">Uploading...</p>}
        </CardContent>
      </Card>

      {uploadedFiles.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {uploadedFiles.map((url, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <img src={url} alt={`Uploaded ${index + 1}`} className="w-full h-auto rounded" />
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(url)}
                    >
                      Copy URL
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

