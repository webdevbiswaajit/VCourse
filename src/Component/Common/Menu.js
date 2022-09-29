import React from "react";
import "../../App.css";
import logo from "../../Img/VCourse.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Menu() {
  return (
    <>
      <div className="menu_bar">
        <div className="container mx-auto main_menu ">
          <div className="logo_area ml-2 py-3 flex items-center justify-between">
            <div className=" text-3xl text-black font-bold">
              <Icon icon="gg:menu-right-alt" />
            </div>
            <img className="" src={logo} alt="....." />
          </div>
          <div className="total_menu">
            <div className="">
              <ul className="menu_item">
                <li className="  text-sm text-black font-slab px-7  hover:bg-khaki">
                  <Link to="/home">Home</Link>
                </li>
                <li className="  text-sm text-black font-slab  px-7   hover:bg-khaki">
                  <Link to="/courses">Courses</Link>
                </li>
                <li className="  text-sm text-black font-slab  px-7   hover:bg-khaki">
                  <Link to="/about">About</Link>
                </li>
                <li className="  text-sm text-black font-slab  px-7   hover:bg-khaki">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="  text-sm text-black font-slab  px-7   hover:bg-khaki">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="  ml-4 text-sm text-black font-slab bg-khaki px-4 py-2.5 rounded-md text-center">
                  <Link className=" text-white" to="/become-instructor">
                    Become Instructor
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav_icon p-4">
              <Link
                className=" bg-khaki p-2.5 rounded-full text-white font-bold mr-4"
                to="/sign-in"
              >
                <Icon icon="ant-design:user-outlined" />
              </Link>
              <Link
                className=" bg-khaki p-2.5 rounded-full text-white font-bold"
                to="/cart"
              >
                <Icon icon="akar-icons:shopping-bag" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
