"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

// state to hold the uploaded image file
const page = () => {
  const [image, setImage] = useState(null);

  // state to hold the form data for the new product/blog
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    Author: "yesh thakur ",
    authorImg: "/author_img.png",
  });

  // function to handle input changes and update the data state
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onsubmitHandler = async (event) => {
    // function to handle form submission
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title); //field name and title from data state
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.Author);
    formData.append("authorImage", data.authorImg);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        Author: "yesh thakur ",
        authorImg: "/author_img.png",
      });
    } else {
      toast.error("Error");
    }
  };

  // JSX code for the form to add a new product/blog
  return (
    <>
      <form onSubmit={onsubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
          />
        </label>
        <input // input field for image upload
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog title</p>
        <input // input field for blog title
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-5 border"
          placeholder="Type here"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea // textarea field for blog description
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-5 border"
          placeholder="Write content here"
          rows={5}
          required
        />
        <p className="text-xl mt-4">Blog category</p>
        <select // select dropdown for blog category
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
};

export default page;
