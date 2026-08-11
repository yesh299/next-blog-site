"use client";

import React from "react";

const page = () => {
  return (
    <div className="flex- pt-5 px-5 sm:pt-12 sm:pl-16" >
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide " >
        <table className="w-full text-sm text-gray-500" >
          <thead className="text-sm bg-gray-700 text-left uppercase bg-gray-50" >
            <tr>
              <th>
                
              </th>
            </tr>

          </thead>

        </table>
      </div>
      
    </div>
  );
};

export default page;
