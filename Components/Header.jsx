import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const formDate = new FormData();
    formDate.append("email", email);
    const response = await axios.post("/api/email", formDate);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");

    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          height={50}
          alt="Logo"
          className="w-[130px] sm:w-[280px] md:w-[100px] lg:w-[150px]"
        />

        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_0px_black]">
          Get Started
          <Image src={assets.arrow} width={20} height={20} alt="Arrow" />
        </button>
      </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl text-black font-medium">
          Latest Blog
        </h1>

        <p className="mt-10 max-w-[740px] mx-auto text-xs text-blue-500 sm:text-base">
          Discover Inspiring Stories, Share Your Ideas, and Connect with a
          Community of Passionate Writers. Explore trending articles, learn
          something new every day, and let your voice reach the world. Unlock
          endless opportunities to express your creativity, gain valuable
          insights, and engage with content that truly inspires. Whether you are
          an aspiring writer or an enthusiastic reader, BlogApp is the perfect
          place to explore fresh perspectives, build meaningful connections, and
          make every story count
        </p>

        <form
          onSubmit={onsubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_0px_black]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none w-full"
          />

          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-green-300 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
