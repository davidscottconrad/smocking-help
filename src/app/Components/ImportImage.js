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

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
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
