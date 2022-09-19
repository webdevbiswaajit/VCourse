import React from "react";
import { Icon } from "@iconify/react";
import marketing from "../../Img/marketing.jpg";
import ins1 from "../../Img/ins2.jpg";
import { Link } from "react-router-dom";

function CompliteTab() {
  return (
    <>
      <div className="flex gap-4">
        <div className=" w-1/3">
          <img src={marketing} alt="...." />
          <div className=" border border-border_black py-5 px-7">
            <h2 className=" text-black text-sm  font-semibold">
              WordPress for Beginners
            </h2>
            <div className="flex justify-between  mt-4 ">
              <div className="flex items-center">
                <Icon
                  className=" mr-3 text-khaki  font-medium text-xs font-rly"
                  icon="bxs:book-reader"
                />
                <p className=" text-black font-medium text-xs font-rly">
                  30 Lesson
                </p>
              </div>
              <div className="flex items-center">
                <Icon
                  className=" mr-3 text-khaki font-medium text-xs font-rly"
                  icon="eva:clock-outline"
                />
                <p className=" text-black font-medium text-xs font-rly">
                  1.5 Hrs
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center  mt-4 ">
                <img className=" w-8 h-8 rounded-full mr-2" src={ins1} alt="" />
                <p className=" text-black font-medium text-xs font-rly">
                  By, Jarif Huda Angon
                </p>
              </div>
              <p className=" text-black font-medium text-xs  font-rly mt-3">
                ৳ 5,000
              </p>
            </div>
          </div>
          <div className=" bg-khaki py-3 text-center">
            <Link to="/course-details">
              <p className=" bg-transparent text-black  text-sm font-bold font-slab">
                Enroll Course
              </p>
            </Link>
          </div>
        </div>
        <div className=" w-1/3">
          <img src={marketing} alt="...." />
          <div className=" border border-border_black py-5 px-7">
            <h2 className=" text-black text-sm  font-semibold">
              WordPress for Beginners
            </h2>
            <div className="flex justify-between  mt-4 ">
              <div className="flex items-center">
                <Icon
                  className=" mr-3 text-khaki  font-medium text-xs font-rly"
                  icon="bxs:book-reader"
                />
                <p className=" text-black font-medium text-xs font-rly">
                  30 Lesson
                </p>
              </div>
              <div className="flex items-center">
                <Icon
                  className=" mr-3 text-khaki font-medium text-xs font-rly"
                  icon="eva:clock-outline"
                />
                <p className=" text-black font-medium text-xs font-rly">
                  1.5 Hrs
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center  mt-4 ">
                <img className=" w-8 h-8 rounded-full mr-2" src={ins1} alt="" />
                <p className=" text-black font-medium text-xs font-rly">
                  By, Jarif Huda Angon
                </p>
              </div>
              <p className=" text-black font-medium text-xs  font-rly mt-3">
                ৳ 5,000
              </p>
            </div>
          </div>
          <div className=" bg-khaki py-3 text-center">
            <button className=" bg-transparent text-black  text-sm font-bold font-slab">
              Enroll Course
            </button>
          </div>
        </div>
        <div className=" w-1/3">
          <img src={marketing} alt="...." />
          <div className=" border border-border_black py-5 px-7">
            <h2 className=" text-black text-sm  font-semibold">
              WordPress for Beginners
            </h2>
            <div className="flex justify-between  mt-4 ">
              <div className="flex items-center">
                <Icon
                  className=" mr-3 text-khaki  font-medium text-xs font-rly"
                  icon="bxs:book-reader"
                />
                <p className=" text-black font-medium text-xs font-rly">
                  30 Lesson
                </p>
              </div>
              <div className="flex items-center">
                <Icon
                  className=" mr-3 text-khaki font-medium text-xs font-rly"
                  icon="eva:clock-outline"
                />
                <p className=" text-black font-medium text-xs font-rly">
                  1.5 Hrs
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center  mt-4 ">
                <img className=" w-8 h-8 rounded-full mr-2" src={ins1} alt="" />
                <p className=" text-black font-medium text-xs font-rly">
                  By, Jarif Huda Angon
                </p>
              </div>
              <p className=" text-black font-medium text-xs  font-rly mt-3">
                ৳ 5,000
              </p>
            </div>
          </div>
          <div className=" bg-khaki py-3 text-center">
            <button className=" bg-transparent text-black  text-sm font-bold font-slab">
              Enroll Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompliteTab;
