"use client";

import { blog_data, assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import axios from "axios";

const BlogPage = ({ params }) => {
  const { id } = use(params);
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    axios.get("/api/blog", { params: { id } }).then((response) => {
      if (!cancelled) {
        setData(response.data.blog);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const authorImage =
    typeof data?.authorImage === "string" && data.authorImage.trim()
      ? data.authorImage.trim()
      : assets.profile_icon;
  const blogImage =
    typeof data?.image === "string" && data.image.trim()
      ? data.image.trim()
      : blog_data[0]?.image;

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              height={50}
              alt=""
              className="w-[130px] sm:w-auto h-auto"
            />
          </Link>

          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} width={20} height={20} alt="" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>

          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={authorImage}
            width={60}
            height={60}
            alt=""
          />

          <p className="mt-1 pb-2 text-lg text-green-500 max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-black"
          src={blogImage}
          width={1280}
          height={720}
          alt=""
        />

        <p>{data.description} </p>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share the article in social media
          </p>

          <div className="flex">
            <Image src={assets.facebook_icon} width={50} height={50} alt="" />
            <Image src={assets.twitter_icon} width={50} height={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} height={50} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : null;
};

export default BlogPage;
