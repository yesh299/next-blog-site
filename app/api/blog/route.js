import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "api working" });
}

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get("image");
  const imageByteDate = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteDate);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImage: `${formData.get("authorImage")}`,
  };

  await BlogModel.create(blogData);
  console.log("blog saved");

  return NextResponse.json({ success: true, msg: "blog added" });
}
