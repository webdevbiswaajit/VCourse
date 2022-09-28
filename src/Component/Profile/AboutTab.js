import React from "react";

function AboutTab() {
  return (
    <>
      <div className=" grid  sm:grid-cols-2 gap-5 bg-white mb-5">
        <div className="py-7 px-12 bg-ash">
          <h2 className=" text-xl font-semibold text-black text-center lg:text-left ">
            About Me
          </h2>
          <p className=" font-normal font-rly text-sm text-black text-justify mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="py-7 px-12 bg-ash">
          <h2 className=" text-xl font-semibold text-black text-center lg:text-left mb-5">
            Contact Information
          </h2>
          <div className="flex">
            <div className="">
              <p className=" font-rly text-sm mb-2  text-black font-semibold">
                Email:
              </p>
              <p className=" font-rly text-sm mb-2  text-black font-semibold">
                Profession:
              </p>
              <p className=" font-rly text-sm mb-2  text-black font-semibold">
                Phone:
              </p>
              <p className=" font-rly text-sm mb-2  text-black font-semibold">
                Date of Birth:
              </p>
              <p className=" font-rly text-sm mb-2  text-black font-semibold">
                Nationality:
              </p>
            </div>
            <div className=" ml-10">
              <p className=" font-rly text-sm mb-2  text-black  font-normal">
                ahmedishtiuq@gmail.com
              </p>
              <p className=" font-rly text-sm mb-2  text-black  font-normal">
                Graphic &ampp; UI/UX Designer
              </p>
              <p className=" font-rly text-sm mb-2  text-black  font-normal">
                +880 1674 668 544
              </p>
              <p className=" font-rly text-sm mb-2  text-black  font-normal">
                02.10.1990
              </p>
              <p className=" font-rly text-sm mb-2  text-black  font-normal">
                Bangladeshi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTab;
