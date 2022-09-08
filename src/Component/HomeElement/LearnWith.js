import React from "react";
import { Icon } from "@iconify/react";

function LearnWith() {
  return (
    <>
      <div className=" bg-lean py-20">
        <div className="container mx-auto">
          <h2 className=" text-center text-heading font-medium ">
            Why You'll Learn with Us
          </h2>
          <div className="grid grid-cols-3 mt-16 gap-5">
            <div className=" bg-white p-10 flex flex-col items-center ">
              <Icon
                className=" text-khaki text-5xl  mb-4 "
                icon="bxs:book-reader"
              />
              <h2 className=" text-black text-xl">Live Class</h2>
              <p className=" text-center text-black text-base mt-2 font-rly">
                VCourse is here to give you with the finest live class
                available, as we wish to answer any questions that arise during
                the lesson. Our live session begins with a pre-recorded demo
                class that is completely free. A live class is a fantastic way
                to learn quickly, and it's even more vital to eliminate any
                remaining doubts regarding the lesson you're receiving.{" "}
              </p>
            </div>
            <div className=" bg-white p-10 flex flex-col items-center ">
              <Icon
                className=" text-khaki text-5xl  mb-4 "
                icon="fluent:person-support-20-filled"
              />
              <h2 className=" text-black text-xl text-center">
                Lifetime Access , Support and Guidelines
              </h2>
              <p className=" text-center text-black text-base mt-2 font-rly">
                VCourse is here to give you with the finest live class
                available, as we wish to answer any questions that arise during
                the lesson. Our live session begins with a pre-recorded demo
                class that is completely free. A live class is a fantastic way
                to learn quickly, and it's even more vital to eliminate any
                remaining doubts regarding the lesson you're receiving.{" "}
              </p>
            </div>

            <div className=" bg-white p-10 flex flex-col items-center ">
              <Icon
                className=" text-khaki text-4xl  mb-4 "
                icon="fa-solid:user-clock"
              />
              <h2 className=" text-black text-xl text-center">
                Easy and User Friendly
              </h2>
              <p className=" text-center text-black text-base mt-2 font-rly">
                VCourse is here to give you with the finest live class
                available, as we wish to answer any questions that arise during
                the lesson. Our live session begins with a pre-recorded demo
                class that is completely free. A live class is a fantastic way
                to learn quickly, and it's even more vital to eliminate any
                remaining doubts regarding the lesson you're receiving.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnWith;
