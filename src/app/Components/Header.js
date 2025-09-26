import Image from "next/image";
import ImageUploader from "./ImportImage";
export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center space-y-8">
      {/* Header section */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Smocking Help</h1>
        <h2 className="text-lg text-gray-600 max-w-xl">
          Add an image of your thread, pattern, and fabric choice. We can show
          you what it might look like when it’s done.
        </h2>
      </div>

      {/* Upload card */}
      <div className="w-full max-w-lg bg-gray-300 rounded-xl shadow-md p-6">
        <p className="mb-4 font-medium text-gray-700">Import Images</p>
        <div className="flex flex-row justify-center gap-6">
          <ImageUploader imageName="Fabric" />
          <ImageUploader imageName="Thread" />
          {/* <ImageUploader imageName="Pattern" /> */}
        </div>
      </div>
    </div>
  );
}
