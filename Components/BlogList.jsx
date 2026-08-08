import { blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

const BlogList = () => {
  const [Menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            Menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            Menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            Menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            Menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx24">
        {blog_data
          .filter((item) => (Menu === "All" ? true : item.category === Menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
