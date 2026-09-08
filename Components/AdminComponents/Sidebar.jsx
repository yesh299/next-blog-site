import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-20 sm:w-80 min-h-full self-stretch flex flex-col bg-slate-100 border-r border-black shrink-0">

      {/* Logo Header */}
      <div className="h-[54px] shrink-0 flex items-center px-2 sm:pl-14 border-b border-black">
        <Image
          src={assets.logo}
          width={120}
          height={40}
          alt="Logo"
          className="w-[65px] sm:w-[120px]"
        />
      </div>

      {/* Navigation */}
      <div className="flex-1 py-8 sm:py-12">
        <div className="w-full sm:w-[80%] sm:ml-auto px-2 sm:px-0">

          {/* Add Blog */}
          <Link
            href="/admin/addProduct"
            className="flex items-center justify-center sm:justify-start border border-black gap-3 font-medium px-2 sm:px-3 py-2 bg-white shadow-[-5px_-5px_0px_black]"
          >
            <Image src={assets.add_icon} alt="" width={28} height={28} />
            <p className="hidden sm:block">Add blogs</p>
          </Link>

          {/* Blog List */}
          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center justify-center sm:justify-start border border-black gap-3 font-medium px-2 sm:px-3 py-2 bg-white shadow-[-5px_-5px_0px_black]"
          >
            <Image src={assets.blog_icon} alt="" width={28} height={28} />
            <p className="hidden sm:block">Blog List</p>
          </Link>

          {/* Subscription */}
          <Link
            href="/admin/subscription"
            className="mt-5 flex items-center justify-center sm:justify-start border border-black gap-3 font-medium px-2 sm:px-3 py-2 bg-white shadow-[-5px_-5px_0px_black]"
          >
            <Image src={assets.email_icon} alt="" width={28} height={28} />
            <p className="hidden sm:block">Subscription</p>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Sidebar;