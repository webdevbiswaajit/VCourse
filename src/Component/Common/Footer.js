import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Icon } from "@iconify/react";
import logo from "../../Img/VCourse.png";
import visa from "../../Img/visa .jpg";
import bkash from "../../Img/bkash.png";
import play from "../../Img/google.png";
import store from "../../Img/apple.png";

function Footer() {
  return (
    <>
      <div className=" bg-light_white border-b border-black">
        <div className="container mx-auto  py-16">
          <div className="grid lg:grid-cols-4 sm:grid-cols-4 md:grid-cols-2 gap-2">
            <div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:items-start mb-10 sm:mb-0">
              <img className="" src={logo} alt="" />
              <div className="mt-10 flex justify-between sm:justify-start">
                <div className="w-8 h-8 mx-1 border flex justify-center items-center hover:bg-black transition-all text-black  hover:text-white">
                  <Icon className=" text-5 " icon="uil:facebook-f" />
                </div>
                <div className="w-8 h-8 mx-1 border flex justify-center items-center hover:bg-black transition-all text-black  hover:text-white">
                  <Icon
                    className=" text-5 "
                    icon="fa6-brands:square-instagram"
                  />
                </div>
                <div className="w-8 h-8 mx-1 border flex justify-center items-center hover:bg-black transition-all text-black  hover:text-white">
                  <Icon className=" text-5 " icon="ion:logo-youtube" />
                </div>
                <div className="w-8 h-8 mx-1 border flex justify-center items-center hover:bg-black transition-all text-black  hover:text-white">
                  <Icon className=" text-5 " icon="cib:linkedin-in" />
                </div>
              </div>
              <div className="mt-16 flex justify-center sm:justify-start w-full ">
                <img className="w-24 mr-4" src={visa} alt="" />
                <img className="w-24 mx-4" src={bkash} alt="" />
              </div>
            </div>

            <div className="text-center sm:text-left">
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

            <div className="text-center sm:text-left">
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
                <Link
                  className=" font-medium text-black font-rly text-base mb-3 hover:text-khaki transition-all"
                  to="/faq"
                >
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 text-center sm:text-left p-8 sm:p-0">
              <h2 className=" font-semibold text-black text-lg mb-6">
                Contact
              </h2>
              <div className=" flex mb-3 justify-between sm:justify-start">
                <p className=" mr-8  font-semibold text-black font-rly text-base">
                  Phone:
                </p>
                <p className="font-semibold text-black font-rly text-base">
                  +8801711-666603
                </p>
              </div>
              <div className=" flex mb-3 justify-between sm:justify-start">
                <p className=" mr-8  font-semibold text-black font-rly text-base">
                  Email:
                </p>
                <p className="font-semibold text-black font-rly text-base">
                  contact@vcourse.net
                </p>
              </div>
              <div className=" flex mb-3 justify-between sm:justify-start">
                <p className=" mr-8  font-semibold text-black font-rly text-base">
                  Address:
                </p>
                <p className="font-semibold text-black font-rly text-base text-right sm:text-left">
                  Home 315, Phase 2, Road 3, <br /> Sonadanga, Khulna - 9100,
                  <br />
                  Bangladesh
                </p>
              </div>
              <h2 className="text-black text-base font-bold font-rly mt-8">
                Download Our Mobile App
              </h2>
              <div className=" flex items-center justify-center sm:justify-start mt-2.5 ">
                <img className=" w-32 mr-4" src={play} alt="" />
                <img className=" w-32" src={store} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-light_white py-3 px-4 sm:px-0">
        <div className="container mx-auto">
          <div className=" flex flex-col sm:flex-row justify-between items-center">
            <p className=" font-rly font-medium text-black text-base">
              © 2022 - Vcourse. All rights reserved
            </p>
            <p className="font-rly font-medium text-black text-base">
              A Sister Concern of
              <ExternalLink href="https://thevirtualbd.com/">
                <span className=" text-khaki"> The Virtual BD</span>
              </ExternalLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
