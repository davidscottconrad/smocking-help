"use client";

import { useRef, useState } from "react";

export default function ImageUploader({ imageName }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      // Show preview in browser
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);

      // Send to backend
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        console.log("Server response:", data); // 👈 check browser console
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2>Your {imageName}</h2>
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Upload Image
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {preview && (
        <div>
          <p className="mb-2">Preview:</p>
          <img
            src={preview}
            alt="Uploaded preview"
            className="max-w-xs rounded shadow"
          />
        </div>
      )}
    </div>
  );
}
