import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
const fs = require("fs");

//API Endpoints to get All blogs
export async function GET(request) {
  try {
    await ConnectDB();
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json({ blog });
    }

    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Failed to load blogs:", error);
    return NextResponse.json(
      {
        blogs: [],
        error: "Unable to load blogs. Check the database configuration.",
      },
      { status: 500 },
    );
  }
}

// API Endpoints For Uploading Blogs
export async function POST(request) {
  await ConnectDB();
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get("image");
  const imageByteDate = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteDate);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  // API to get the data
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

// Creating API Endpoint to delete blog
export async function DELETE(request) {
  await ConnectDB();
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
