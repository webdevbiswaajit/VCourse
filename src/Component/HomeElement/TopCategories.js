import React from "react";
import { Icon } from "@iconify/react";

function TopCategories() {
  return (
    <>
      <div className="container mx-auto  sm:py-20">
        <h2 className="text-center text-2xl sm:text-5xl mt-7 font-medium text-black">
          Top Categories
        </h2>
        <div className=" grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 sm:mt-16 px-4">
          <div className="bg-khaki flex flex-col items-center py-10 ">
            <div className=" bg-white rounded-full p-6">
              <Icon className=" text-4xl" icon="bx:code-alt" />
            </div>
            <p className=" text-2xl font-medium mt-3 text-black">Development</p>
          </div>
          <div className="bg-khaki flex flex-col items-center py-10 ">
            <div className=" bg-white rounded-full p-6">
              <Icon className=" text-4xl" icon="lucide:pen-tool" />
            </div>
            <p className=" text-2xl font-medium mt-3 text-black">Design</p>
          </div>
          <div className="bg-khaki flex flex-col items-center py-10 ">
            <div className=" bg-white rounded-full p-6">
              <Icon className=" text-4xl" icon="akar-icons:music" />
            </div>
            <p className=" text-2xl font-medium mt-3 text-black">Music</p>
          </div>
          <div className="bg-khaki flex flex-col items-center py-10 ">
            <div className=" bg-white rounded-full p-6">
              <Icon className=" text-4xl" icon="bi:bounding-box-circles" />
            </div>
            <p className=" text-2xl font-medium mt-3 text-black">Marketing</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCategories;
