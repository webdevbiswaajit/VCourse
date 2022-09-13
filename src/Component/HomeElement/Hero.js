import React from "react";
import { Icon } from "@iconify/react";

function Hero() {
  return (
    <>
      <div className="homehero pt-6  bg-center bg-cover bg-no-repeat sm:h-700 pb-[300px] sm:pb-0 ">
        <div className=" container mx-auto h-full flex flex-col justify-center">
          <p className="font-medium text-2xl sm:text-5xl leading-tight text-center sm:text-left">
            Develop Skills
            <br /> With Expert on Live!
          </p>
          <p className="font-normal px-12 sm:px-0 text-sm sm:text-2xl text-center sm:text-left text-black mt-4 sm:mt-12">
            Our goal is to construct skills and transform <br />
            Bangladesh's unemployment crisis into competent
            <br /> manpower for the digital economy.
          </p>
          <div className="hidden sm:block">
            <form action="">
              <div className="flex items-center mt-12 bg-white w-fit pl-6 ">
                <Icon className="text-xl" icon="akar-icons:search" />
                <input
                  type="text"
                  className="bg-transparent  w-[27rem] px-4 ml-4 border-none outline-none"
                  placeholder="Search here"
                />
                <button className=" bg-khaki text-black py-4 px-6 font-semibold text-sm">
                  Search here
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
