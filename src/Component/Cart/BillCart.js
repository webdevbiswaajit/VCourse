import React from "react";
import web from "../../Img/web.jpg";
import marketing from "../../Img/marketing.jpg";

function BillCart() {
  return (
    <>
      <div className=" py-32">
        <div className="container mx-auto">
          <h2 className=" font-semibold text-center text-black text-4xl">
            Cart
          </h2>

          <div className="grid grid-cols-12">
            <div className=""></div>
            <div className=" col-span-10">
              <div className=" flex  w-70 mx-auto justify-between mt-14  items-center px-5">
                <p className=" font-rly text-lg  text-black font-semibold ">
                  Course
                </p>
                <div className="flex   w-2/5   justify-between items-center">
                  <p className=" font-rly text-lg  text-black font-semibold">
                    Course Fee
                  </p>
                  <p className=" font-rly text-lg  text-black font-semibold justify-around">
                    Subtotal
                  </p>
                </div>
              </div>
              <div className="w-full border border-border_black flex justify-between items-center py-3 px-5">
                <div className=" flex items-center">
                  <img className="w-24 h-14  mr-10" src={web} alt="...." />
                  <p className=" text-black font-normal text-lg font-rly ">
                    WordPress for Beginners – Master WordPress
                  </p>
                </div>
                <div className="flex w-2/5  justify-between items-center">
                  <p className=" font-rly text-lg  text-black ">৳ 800</p>
                  <p className=" font-rly text-lg  text-black justify-around">
                    ৳ 800
                  </p>
                  <button className=" font-rly text-lg font-bold justify-around text-red ">
                    X
                  </button>
                </div>
              </div>
              <div className="w-full border border-border_black flex justify-between items-center py-3 px-5">
                <div className=" flex items-center">
                  <img
                    className="w-24 h-14  mr-10"
                    src={marketing}
                    alt="...."
                  />
                  <p className=" text-black font-normal text-lg font-rly ">
                    Digital Marketing Master Course
                  </p>
                </div>
                <div className="flex w-2/5  justify-between items-center">
                  <p className=" font-rly text-lg  text-black ">৳ 4000</p>
                  <p className=" font-rly text-lg  text-black justify-around">
                    ৳ 4000
                  </p>
                  <button className=" font-rly text-lg font-bold justify-around text-red">
                    X
                  </button>
                </div>
              </div>

              <div className=" mt-9">
                <form action="">
                  <div className="flex items-end">
                    <input
                      className=" border-b-2  border-black text-black font-rly placeholder:font-light outline-none p-2"
                      type="text"
                      placeholder="Coupon Code"
                    />
                    <button className=" bg-black  px-4 py-1 text-white  text-lg font-rly font-light ml-5 border-2  border-black">
                      Apply Coupon
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className=""></div>
          </div>

          <div className="  w-84  mx-auto  grid grid-cols-3 mt-16">
            <div className=""></div>
            <div className=""></div>
            <div className="border border-black py-9 px-4">
              <h2 className=" font-bold text-2xl font-rly text-black text-center mb-5">
                Cart totals
              </h2>
              <div className="flex justify-center items-center mb-3">
                <p className=" font-rly  font-semibold  text-black mr-5">
                  Subtotal
                </p>
                <p className=" font-rly    text-black">৳ 800</p>
              </div>
              <div className="flex justify-center items-center">
                <p className=" font-rly  font-semibold  text-black mr-5">
                  Coupon
                </p>
                <p className=" font-rly    text-black">৳ 85</p>
              </div>

              <hr className=" bg-ash mt-4" />
              <div className=" flex justify-center items-center mt-4">
                <p className=" font-rly  font-semibold  text-black  mr-5">
                  Total
                </p>
                <p className=" font-rly text-black ml-9">৳ 800</p>
              </div>
              <div className=" text-center mt-10 ">
                <button className="  bg-khaki  text-black text-sm  font-slab font-medium py-4 px-6 text-center">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillCart;
