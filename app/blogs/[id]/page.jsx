"use client";

import { blog_data, assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import axios from "axios";

const page = ({ params }) => {
  const { id } = use(params);
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} alt="" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImage}
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
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />

        <h1 className="my-8 text-[26px] font-semibold text-blue-700">
          Introduction:
        </h1>

        <p>{data.description}</p>

        <h3 className="my-5 text-[18px] font-semibold">
          step 1: self-Reflection and goal Setting
        </h3>

        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve.Start by reflection on your
          values, aspirations, and long-term goals.
        </p>

        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve.Start by reflection on your
          values, aspirations, and long-term goals.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          step 2: self-Reflection and goal Setting
        </h3>

        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve.Start by reflection on your
          values, aspirations, and long-term goals.
        </p>

        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve.Start by reflection on your
          values, aspirations, and long-term goals.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          step 3: self-Reflection and goal Setting
        </h3>

        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve.Start by reflection on your
          values, aspirations, and long-term goals.
        </p>

        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve.Start by reflection on your
          values, aspirations, and long-term goals.
        </p>

        <h3 className="my-5 text-[18px] font-semibold text-green-500">
          Conclusion
        </h3>

        <p className="my-3">
          Managing your lifestyle is a continuous process that requires
          self-awareness, discipline, and adaptability. By implementing the
          strategies outlined in this blog, you can create a balanced and
          fulfilling life that aligns with your values and goals. Remember,
          small consistent changes can lead to significant improvements over
          time.
        </p>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share the article in social media
          </p>

          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : null;
};

export default page;
