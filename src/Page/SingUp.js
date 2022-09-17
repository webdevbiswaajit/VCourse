import React from "react";
import Menu from "../Component/Common/Menu";
import { Icon } from "@iconify/react";
import Footer from "../Component/Common/Footer";

function SingUp() {
  return (
    <>
      <Menu />
      <div className=" py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div className=""></div>
            <div className="  col-span-2">
              <h2 className=" text-3xl font-semibold text-black text-center font-slab">
                Sign Up
              </h2>
              <div className="">
                <form action="">
                  <div className="">
                    <p className=" text-black font-normal text-lg font-rly">
                      Name <span className="text-red  text-3xl pt-10">*</span>
                    </p>
                    <input
                      className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className=" mt-4">
                    <p className=" text-black font-normal text-lg font-rly">
                      Email*<span className="text-red  text-3xl pt-10">*</span>
                    </p>
                    <input
                      className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className=" mt-4">
                    <p className=" text-black font-normal text-lg font-rly">
                      Phone<span className="text-red  text-3xl pt-10">*</span>
                    </p>
                    <input
                      className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                      type="tell"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                  <div className=" mt-4">
                    <p className=" text-black font-normal text-lg font-rly">
                      Username
                      <span className="text-red  text-3xl pt-10">*</span>
                    </p>
                    <input
                      className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                      type="text"
                      placeholder="Enter Your Username"
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
                    <div className=" mt-4">
                      <p className=" text-black font-normal text-lg font-rly">
                        Confirm Password
                        <span className="text-red  text-3xl pt-10">*</span>
                      </p>
                      <input
                        className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                        type="text"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="flex items-center mt-7">
                      <input className=" h-5 w-5 mr-4" type="checkbox" />
                      <p className=" text-black font-rly text-lg">
                        Accept the Terms and Privacy Policy
                      </p>
                    </div>
                  </div>
                  <div className=" mt-12 text-center">
                    <button
                      className=" bg-khaki font-bold text-xl text-black font-slab py-4  px-28"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex justify-center mt-4">
                <p className=" text-xl text-black font-rly">
                  Already have account?
                </p>
                <p className=" text-xl text-khaki  font-slab ml-3 font-semibold">
                  Sign In
                </p>
              </div>

              <div className=" sing_width text-center font-semibold text-lg text-black mt-16">
                Or sign up with
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
      <Footer />
    </>
  );
}

export default SingUp;
