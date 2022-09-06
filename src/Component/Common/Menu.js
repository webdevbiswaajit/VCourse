import React from "react";
import logo from "../../Img/VCourse.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import userOutlined from "@iconify/icons-ant-design/user-outlined";

function Menu() {
  return (
    <>
      <div className="">
        <div className="container mx-auto grid grid-cols-3 gap-5">
          <div className="flex justify-start items-center">
            <img src={logo} alt="VCourse" />
          </div>

          <div className=" flex justify-between items-center">
            <Link to="/home"> Home</Link>
            <Link to="/courses"> Courses</Link>
            <Link to="/about"> About</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="/become-instructor"
              className="bg-khaki px-4 py-2.5 rounded-md text-white"
            >
              Become Instructor
            </Link>
            <div className="flex">
              <Icon icon="ant-design:user-outlined" />
              <Icon icon="akar-icons:shopping-bag" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
