import React from "react";
import { Link } from "react-router-dom";
import ins1 from "../../Img/ins2.jpg";

function CourseSideBar() {
  return (
    <>
      <div className=" mt-16 ">
        <div className=" py-9 px-11 border border-border_black">
          <p className=" font-bold text-black text-2xl sm:text-right font-rly ">
            ৳ 5,000
          </p>
          <div className=" bg-khaki text-center py-2 mt-10">
            <Link to="/sign-in">
              <p className=" bg-transparent text-white font-slab text-xl font-bold">
                Join &amp; Enroll
              </p>
            </Link>
          </div>
        </div>
        <div className=" py-9 px-11 border border-border_black mt-5">
          <p className=" font-bold  text-khaki text-2xl font-rly">
            Material Includes
          </p>
          <ul>
            <li className=" list-disc text-black text-sm text-left  ml-4 mt-4 font-rly font-semibold">
              7.5 hours on-demand video
            </li>
            <li className=" list-disc text-black text-sm text-left ml-4 mt-4 font-rly font-semibold">
              10 articles
            </li>
            <li className=" list-disc text-black text-sm  text-left ml-4 mt-4 font-rly font-semibold">
              31 downloadable resources
            </li>
            <li className=" list-disc text-black text-sm text-left ml-4 mt-4 font-rly font-semibold">
              Full lifetime access
            </li>
            <li className=" list-disc text-black text-sm text-left  ml-4 mt-4 font-rly font-semibold">
              Access on mobile and TV
            </li>
            <li className=" list-disc text-black text-sm  text-left ml-4 mt-4 font-rly font-semibold">
              Certificate of Completion
            </li>
          </ul>
        </div>
        <div className=" py-9 px-11 border border-border_black">
          <p className=" font-semibold text-black text-sm font-rly">
            A Course by,
          </p>
          <div className=" mt-3 flex items-center">
            <img
              className=" w-10 h-10  rounded-full mr-4"
              src={ins1}
              alt="..."
            />
            <div className="">
              <p className=" text-black font-rly font-semibold text-base">
                Jarif Huda Angon
              </p>
              <small className=" text-black font-rly  font-medium text-sm">
                CEO &amp; Instructor
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseSideBar;
