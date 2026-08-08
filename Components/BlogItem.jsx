import Image from "next/image";
import React from "react";
import { assets, blog_data } from "@/Assets/assets";
import Link from "next/link";

const BlogItem = ({ title, description, image, category,id }) => {
  if (!blog_data?.length) return null;

  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_0px_black]">
      <Link href={`/blogs/${id}`} >
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="border-b border-black"
      />
      </Link>

      <p className="mr-5 ml-5 mt-5 px-3  inline-block bg-black text-white text-md">
        {category}
      </p>

      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <Link href={`/blogs/${id}`} className="inline-flex item-center py-2 font-semibold text-center">
          Read More
          <Image src={assets.arrow} className="ml-2" alt="" width={25} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
