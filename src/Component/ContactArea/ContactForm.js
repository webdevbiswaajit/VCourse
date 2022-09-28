import React from "react";
import cBanner from "../../Img/ContactImg.jpg";

function ContactForm() {
  return (
    <>
      <div className=" bg-ash sm:py-24 py-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="">
              <h2 className="text-3xl font-slab font-semibold  sm:text-start text-center">
                Contact Us
              </h2>
              <h2 className="text-black font-rly font-medium text-lg mt-8  sm:text-start text-center">
                VCourse
              </h2>
              <div className=" sm:flex  gap-16  items-start">
                <p className=" font-rly text-lg font-normal text-black mt-3  sm:text-start text-center">
                  Home 315, Road 3, <br /> Phase 2, Sonadanga R/A, <br />
                  Khulna 9100, Bangladesh
                </p>
                <p className="font-rly text-lg font-normal text-black mt-3  sm:text-start text-center">
                  +880 1711 666 603 <br />
                  contact@vcourse.net
                </p>
              </div>

              <h2 className=" font-slab font-semibold text-black text-xl mt-14  sm:text-start text-center">
                Leave us a message
              </h2>
              <div className=" mt-11 px-4 sm:px-0">
                <form action="">
                  <div className=" sm:flex justify-between gap-5">
                    <div className=" sm:w-2/4 mt-2">
                      <p className=" font-rly text-lg text-black sm:mb-4  ">
                        Name
                      </p>
                      <input
                        className="outline-none py-3 px-4 w-full text-black  border border-border_black rounded-sm"
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className=" sm:w-2/4 mt-2">
                      <p className=" font-rly text-lg text-black sm:mb-4">
                        Email
                      </p>
                      <input
                        className=" outline-none py-3 px-4 text-black w-full border border-border_black rounded-sm"
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="font-rly text-lg text-black sm:mb-4">
                      Message
                    </p>
                    <textarea
                      className="w-full border border-border_black rounded-sm text-black text-sm p-6 outline-none"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className=" sm:mt-10 mt-2 text-center">
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
    </>
  );
}

export default ContactForm;
