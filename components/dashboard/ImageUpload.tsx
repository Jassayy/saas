"use client";

import { useCallback, useEffect, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { IconPhoto, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  className?: string;
}

export default function ImageUpload({
  file,
  onFileChange,
  className,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      // free memory when component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [file]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        alert("File type not supported. Please upload an image.");
        return;
      }
      onFileChange(acceptedFiles[0] || null);
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
      "image/webp": [],
    },
    multiple: false,
  });

  const removeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onFileChange(null);
  };

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors duration-200 ease-in-out",
        "border-neutral-300 dark:border-neutral-600 hover:border-primary dark:hover:border-primary",
        isDragActive && "border-primary bg-primary/10",
        className
      )}
    >
      <input {...getInputProps()} />
      {preview && file ? (
        <div className="relative group">
          <Image
            src={preview}
            alt="Post preview"
            width={200}
            height={200}
            className="rounded-md mx-auto max-h-48 w-auto object-contain"
          />
          <button
            onClick={removeImage}
            className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Remove image"
          >
            <IconX size={16} />
          </button>
          <p className="text-sm text-muted-foreground mt-2 truncate">
            {file.name}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
          <IconPhoto
            size={40}
            className="text-neutral-400 dark:text-neutral-500"
          />
          <p className="font-medium">
            {isDragActive
              ? "Drop the image here..."
              : "Drag & drop an image, or click to select"}
          </p>
          <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
    </div>
  );
}
