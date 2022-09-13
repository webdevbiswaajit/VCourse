import React from "react";
import "../../App.css";
import logo from "../../Img/VCourse.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Menu() {
  return (
    <>
      <div className="bg-white shadow-menu_box relative py-2.5 sm:py-0">
        {/* Desktop menu */}
        <div className="container mx-auto">
          <div className="flex items-center px-4 sm:px-0">
            <div className="w-2/4 sm:1/6 flex justify-start items-center">
              <div className="sm:hidden mr-4">
                <Icon icon="charm:menu-hamburger" className="text-black" />
              </div>
              <img src={logo} alt="Vcourse" className="w-24 sm:w-48" />
            </div>

            <div className="hidden  sm:block  w-3/4 sm:w-3/6 ">
              <div className="tryangle sm:flex items-center justify-between">
                <Link
                  className=" font-normal text-black text-sm  hover:bg-khaki  py-8 px-4"
                  to="/home"
                >
                  Home
                </Link>
                <Link
                  className=" font-normal text-black text-sm  hover:bg-khaki  py-8 px-4"
                  to="/courses"
                >
                  Courses
                </Link>
                <Link
                  className="font-normal text-black text-sm   hover:bg-khaki  py-8 px-4"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="font-normal text-black text-sm   hover:bg-khaki  py-8 px-4"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="font-normal text-black text-sm   hover:bg-khaki  py-8 px-4"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Icons */}
            <div className="w-2/4 sm:w-2/6 flex items-center justify-end sm:justify-between">
              <div className="hidden sm:block">
                <Link
                  className=" ml-10 font-normal text-sm text-white bg-khaki py-2.5 px-3.5 rounded-md"
                  to="/become-instructor"
                >
                  Become Instructor
                </Link>
              </div>

              <div className="flex items-center justify-end">
                <Link
                  className=" text-base text-white p-2.5 bg-khaki rounded-full mr-4"
                  to="/profile"
                >
                  <Icon icon="ant-design:user-outlined" />
                </Link>
                <Link
                  className=" text-base text-white p-2.5 bg-khaki rounded-full"
                  to="/cart"
                >
                  <Icon icon="akar-icons:shopping-bag" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="mobilemenu hidden bg-white w-full absolute flex-col px-4 top-full">
          <Link className=" font-normal text-black text-sm py-4" to="/home">
            Home
          </Link>
          <hr className="text-khaki" />
          <Link className=" font-normal text-black text-sm py-4" to="/courses">
            Courses
          </Link>
          <hr className="text-khaki" />
          <Link
            className="font-normal text-black text-sm py-4 border-b-1"
            to="/about"
          >
            About
          </Link>
          <hr className="text-khaki" />
          <Link
            className="font-normal text-black text-sm py-4 border-b-1"
            to="/blog"
          >
            Blog
          </Link>
          <hr className="text-khaki" />
          <Link
            className="font-normal text-black text-sm py-4 border-b-1"
            to="/contact"
          >
            Contact
          </Link>
          <hr className="text-khaki" />

          <Link
            className="mx-4 font-normal text-sm text-white bg-khaki my-4 py-2.5 px-3.5 rounded-md text-center"
            to="/become-instructor"
          >
            Become Instructor
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
