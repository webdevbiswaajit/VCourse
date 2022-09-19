import React from "react";

function Cheakout() {
  return (
    <>
      <div className=" py-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-5">
            <div className=""></div>
            <div className=" col-span-3">
              <h2 className=" text-black text-4xl text-center  font-semibold ">
                Checkout
              </h2>

              <h2 className=" text-black font-rly text-lg font-semibold mt-16 mb-11">
                Billing Details
              </h2>
              <div className="">
                <form action="">
                  <div className="">
                    <p className=" text-black font-normal text-lg font-rly">
                      Customer Name
                      <span className="text-red  text-3xl pt-10">*</span>
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
                      Customer Phone
                      <span className="text-red  text-3xl pt-10">*</span>
                    </p>
                    <input
                      className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                      type="tell"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                  <div className=" mt-4">
                    <p className=" text-black font-normal text-lg font-rly">
                      Address
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
                      City
                      <span className="text-red  text-3xl pt-10">*</span>
                    </p>
                    <input
                      className=" w-full border border-border_black  outline-none font-rly text-base py-2 px-3 rounded-sm"
                      type="text"
                      placeholder="Enter Your Username"
                    />
                  </div>
                  <div className="">
                    <h2 className=" text-black font-rly text-lg font-semibold mt-16 mb-11">
                      Summery
                    </h2>
                    <div className="flex justify-between mb-3">
                      <p className=" text-black font-normal text-lg font-rly ml-5">
                        Course
                      </p>
                      <p className=" text-black font-normal text-lg font-rly mr-4">
                        Subtotal
                      </p>
                    </div>
                    <div className="w-full border border-border_black flex justify-between py-3 px-5">
                      <p className=" text-black font-normal text-lg font-rly ">
                        WordPress for Beginners – Master WordPress
                      </p>
                      <p className=" text-black font-normal text-lg font-rly">
                        ৳ 800
                      </p>
                    </div>
                    <div className="w-full border border-border_black flex justify-between py-3 px-5">
                      <p className=" text-black text-lg font-rly font-semibold ">
                        Total
                      </p>
                      <p className=" text-black  text-lg font-rly font-semibold">
                        ৳ 800
                      </p>
                    </div>
                  </div>

                  <div className=" mt-12 text-center">
                    <button
                      className=" bg-khaki font-bold text-xl text-black font-slab py-4  px-28"
                      type="submit"
                    >
                      Confirm Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cheakout;
