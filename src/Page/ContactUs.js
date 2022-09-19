import React from "react";
import Menu from "../Component/Common/Menu";
import Footer from "../Component/Common/Footer";
import cBanner from "../Img/ContactImg.jpg";

function ContactUs() {
  return (
    <>
      <Menu />
      <div className=" bg-ash py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <h2 className=" text-3xl font-slab font-semibold">Contact Us</h2>
              <h2 className="text-black font-rly font-medium text-lg mt-8">
                VCourse
              </h2>
              <div className=" flex gap-16  items-start">
                <p className=" font-rly text-lg font-normal text-black mt-3">
                  Home 315, Road 3, <br /> Phase 2, Sonadanga R/A, <br />
                  Khulna 9100, Bangladesh
                </p>
                <p className="font-rly text-lg font-normal text-black mt-3">
                  +880 1711 666 603 <br />
                  contact@vcourse.net
                </p>
              </div>

              <h2 className=" font-slab font-semibold text-black text-xl mt-14">
                Leave us a message
              </h2>
              <div className=" mt-11">
                <form action="">
                  <div className=" flex justify-between gap-5">
                    <div className=" w-2/4">
                      <p className=" font-rly text-lg text-black mb-4">Name</p>
                      <input
                        className="outline-none py-3 px-4 w-full text-black  border border-border_black rounded-sm"
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className=" w-2/4">
                      <p className=" font-rly text-lg text-black mb-4">Email</p>
                      <input
                        className=" outline-none py-3 px-4 text-black w-full border border-border_black rounded-sm"
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="font-rly text-lg text-black mb-4">Message</p>
                    <textarea
                      className="w-full border border-border_black rounded-sm text-black text-sm p-6 outline-none"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className=" mt-10 text-center">
                    <button
                      className=" bg-khaki font-bold text-xl text-black font-slab py-4  px-28"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="">
              <img className=" h-full w-full" src={cBanner} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;