import React from "react";
import logo from "../../Img/VCourse.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Menu() {
  return (
    <>
      <div className="bg-white py-2.5 shadow-menu_box">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className=" w-1/3">
              <img src={logo} alt="Vcourse" />
            </div>
            <div className=" flex items-center justify-between w-2/3">
              <div className="">
                <Link
                  className="ml-7 font-normal text-black text-sm "
                  to="/home"
                >
                  Home
                </Link>
                <Link
                  className="ml-7 font-normal text-black text-sm "
                  to="/courses"
                >
                  Courses
                </Link>
                <Link
                  className="ml-7 font-normal text-black text-sm "
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="ml-7 font-normal text-black text-sm "
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="ml-7 font-normal text-black text-sm "
                  to="/contact"
                >
                  Contact
                </Link>
                <Link
                  className="ml-7 font-normal text-black text-sm "
                  to="/home"
                ></Link>
                <Link
                  className="ml-10  font-normal text-sm text-white bg-khaki py-2.5 px-3.5 rounded-md"
                  to="/become-instructor"
                >
                  Become Instructor
                </Link>
              </div>

              <div className=" flex items-center">
                <Link
                  className=" text-base text-white p-2.5 bg-khaki rounded-full ml-4"
                  to="/profile"
                >
                  <Icon icon="ant-design:user-outlined" />
                </Link>
                <Link
                  className=" text-base text-white p-2.5 bg-khaki rounded-full ml-4"
                  to="/cart"
                >
                  <Icon icon="akar-icons:shopping-bag" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
