import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

function SingForm() {
  return (
    <>
      <div className="py-10 sm:py-24  md:py-14 lg:mt-24 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div className=""></div>
            <div className="px-4 col-span-4  lg:col-span-2 md:col-span-2 lg:px-0">
              <h2 className=" text-3xl font-semibold text-black text-center font-slab">
                Sign In
              </h2>
              <div className="">
                <form action="">
                  <div className=" mt-4">
                    <p className=" text-black font-normal text-lg font-rly">
                      Username/Email
                      <span className="text-red  text-3xl pt-10">*</span>
                    </p>
                    <input
                      className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <div className=" mt-4">
                    <p className=" text-black font-normal text-lg font-rly">
                      Password
                      <span className="text-red  text-3xl pt-10">*</span>
                    </p>
                    <input
                      className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                      type="text"
                      placeholder="Enter Your Password"
                    />

                    <div className="flex items-center mt-7">
                      <input className=" h-5 w-5 mr-4" type="checkbox" />
                      <p className=" text-black font-rly text-lg">
                        Remember Me
                      </p>
                    </div>
                  </div>
                  <div className=" mt-12 text-center">
                    <button
                      className=" bg-khaki font-bold text-xl text-black font-slab py-4  px-28"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex justify-center mt-4">
                <p className=" text-xl text-black font-rly">
                  Don't have any account?
                </p>
                <Link to="/sign-up">
                  <p className=" text-xl text-khaki  font-slab ml-3 font-semibold">
                    Sign Up
                  </p>
                </Link>
              </div>

              <div className=" sing_width text-center font-semibold text-lg text-black mt-16">
                Or sign in with
              </div>

              <div className="flex justify-center gap-5 text-4xl  text-black mt-10">
                <Icon
                  className=" cursor-pointer"
                  icon="ant-design:google-square-filled"
                />
                <Icon
                  className=" cursor-pointer"
                  icon="ant-design:facebook-filled"
                />
                <Icon
                  className=" cursor-pointer"
                  icon="akar-icons:linkedin-v1-fill"
                />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingForm;
