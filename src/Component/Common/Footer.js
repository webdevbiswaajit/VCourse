import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../Img/VCourse.png";
import visa from "../../Img/visa .jpg";
import bkash from "../../Img/bkash.png";

function Footer() {
  return (
    <>
      <div className=" bg-light_white py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-14">
            <div className=" ">
              <img className=" w-full" src={logo} alt="" />
              <div className="mt-10 grid grid-cols-7">
                <div className=" w-8 h-8 border flex justify-center items-center hover:bg-black transition-all text-black  hover:text-white">
                  <Icon className=" text-5 " icon="uil:facebook-f" />
                </div>
                <div className=" w-8 h-8 border flex justify-center items-center hover:bg-black transition-all text-black  hover:text-white">
                  <Icon
                    className=" text-5 "
                    icon="fa6-brands:square-instagram"
                  />
                </div>
                <div className=" w-8 h-8 border flex justify-center items-center hover:bg-black transition-all text-black  hover:text-white">
                  <Icon className=" text-5 " icon="ion:logo-youtube" />
                </div>
                <div className=" w-8 h-8 border flex justify-center items-center hover:bg-black transition-all text-black  hover:text-white">
                  <Icon className=" text-5 " icon="cib:linkedin-in" />
                </div>
              </div>
              <div className=" mt-16 flex">
                <img className=" w-24 h-10" src={visa} alt="" />
                <img className="w-24 h-10" src={bkash} alt="" />
              </div>
            </div>

            <div className="">
              <h2 className=" font-semibold text-black text-lg mb-6">
                Company
              </h2>
              <div className=" flex flex-col">
                <Link
                  className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
                <Link
                  className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                  to="/faq"
                >
                  FAQ’s
                </Link>
              </div>
            </div>

            <div className="">
              <h2 className=" font-semibold text-black text-lg mb-6">Others</h2>
              <div className=" flex flex-col">
                <Link
                  className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                  to="/become-a-instructor"
                >
                  Become a Instructor
                </Link>
                <Link
                  className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                  to="/become-an-affiliate "
                >
                  Become an Affiliate
                </Link>
                <Link
                  className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                  to="/blog"
                >
                  Blog
                </Link>
              </div>
              <Link
                className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                to="/faq"
              >
                FAQ’s
              </Link>
              <Link
                className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                to="/faq"
              >
                Sitemap
              </Link>
            </div>
            <div className="">
              <h2 className=" font-semibold text-black text-lg mb-6">
                Contact
              </h2>
              <div className=" flex mb-3">
                <p className=" mr-8  font-semibold text-black font-rly text-base">
                  Phone:
                </p>
                <p className="font-semibold text-black font-rly text-base">
                  +8801711-666603
                </p>
              </div>
              <div className=" flex mb-3">
                <p className=" mr-8  font-semibold text-black font-rly text-base">
                  Email:
                </p>
                <p className="font-semibold text-black font-rly text-base">
                  contact@vcourse.net
                </p>
              </div>
              <div className=" flex mb-3">
                <p className=" mr-8  font-semibold text-black font-rly text-base">
                  Address:
                </p>
                <p className="font-semibold text-black font-rly text-base">
                  Home 315, Phase 2, Road 3, <br /> Sonadanga, Khulna - 9100,
                  <br />
                  Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
