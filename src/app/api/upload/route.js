import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file"); // "file" must match frontend append

  if (!file) {
    return NextResponse.json({ error: "No file received" }, { status: 400 });
  }

  // 👇 Optional: log info in the server terminal
  console.log("File uploaded:", file.name, file.type, file.size);

  // ✅ Send file info back to the frontend
  return NextResponse.json({
    success: true,
    filename: file.name,
    type: file.type,
    size: file.size,
  });
}
