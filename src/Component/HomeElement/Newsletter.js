import React from "react";

function Newsletter() {
  return (
    <>
      <div className=" bg-khaki py-20 px-4 sm:px-0`">
        <div className="container mx-auto">
          <div className="text-center   w-3/4 mx-auto">
            <h2 className=" text-black text-2xl sm:text-5xl font-slab">
              Subscribe to our Newsletter
            </h2>
            <p className=" font-rly text-2xl text-black">
              Subscribe to our Newsletter and get updated!
            </p>
          </div>
        </div>
        <div className=" mt-11 mx-auto ">
          <form action="">
            <div className=" flex sm:justify-center flex-col sm:flex-row">
              <input
                className=" border-none outline-none font-medium text-black px-5 py-4 "
                type="email"
                placeholder="Type your mail address"
              />
              <button className=" bg-black px-5 py-4 font-medium text-sm text-white">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
