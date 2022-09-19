import React from "react";

import poster from "../../Img/detailsImage.jpg";

import CourseSideBar from "./CourseSideBar";
import CourseTab from "./CourseTab";

function DetailsElement() {
  return (
    <>
      <div className="container mx-auto mt-20 mb-20">
        <div className="grid grid-cols-3 gap-5">
          <div className=" col-span-2">
            <h2 className=" text-black text-xl font-semibold font-slab mb-10">
              WordPress for Beginners – Master WordPress
            </h2>
            <img className=" w-full" src={poster} alt="..." />
            <div className="">
              <CourseTab />
            </div>
          </div>
          <CourseSideBar />
        </div>
      </div>
    </>
  );
}

export default DetailsElement;
