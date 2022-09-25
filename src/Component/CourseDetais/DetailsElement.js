import React from "react";

import poster from "../../Img/detailsImage.jpg";

import CourseSideBar from "./CourseSideBar";
import CourseTab from "./CourseTab";

function DetailsElement() {
  return (
    <>
      <div className="container mx-auto mt-5 text-center sm:text-left sm:mt-20 mb-20">
        <div className="grid sm:grid-cols-3 sm:gap-5">
          <div className=" sm:col-span-2">
            <h2 className=" text-black sm:text-xl font-semibold font-slab mb-10">
              WordPress for Beginners – Master WordPress
            </h2>
            <img className=" w-full p-2 sm:p-0 " src={poster} alt="..." />
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
