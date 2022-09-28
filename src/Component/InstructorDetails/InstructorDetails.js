import React from "react";
import { Icon } from "@iconify/react";
import marketing from "../../Img/marketing.jpg";
import Menu from "../Common/Menu";
import ins1 from "../../Img/inst1.jpg";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

function InstructorDetails() {
  return (
    <>
      <Menu />
      <div className="container mx-auto sm:mt-24 sm:mb-24 mt-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:gap-4">
          <div className="sm:mr-5 md:mr-0 sm:px-0 px-4">
            <img className=" w-full" src={ins1} alt="...." />
            <div className=" p-8 border border-border_black">
              <h2 className=" font-semibold text-black text-xl font-rly">
                Md. Mehedi Hassan
              </h2>
              <small className=" font-rly text-sm  text-black font-medium ">
                CEO &amp; Instructor
              </small>
              <p className=" font-rly text-base text-black mt-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <div className="flex mt-8">
                <div className=" w-10 h-10 bg-khaki flex justify-center items-center cursor-pointer">
                  <Icon className=" text-white" icon="dashicons:facebook-alt" />
                </div>
                <div className=" w-10 h-10  bg-orenge flex justify-center items-center cursor-pointer">
                  <Icon
                    className=" text-white"
                    icon="akar-icons:linkedin-v2-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className=" text-black font-semibold  text-base font-slab mb-5 sm:text-start  text-center sm:mt-0 mt-5">
              Course
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 ">
              <div className="mb-4 ">
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
                      <img
                        className=" w-8 h-8 rounded-full mr-2"
                        src={ins1}
                        alt=""
                      />
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
              <div className="mb-4">
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
                      <img
                        className=" w-8 h-8 rounded-full mr-2"
                        src={ins1}
                        alt=""
                      />
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
              <div className="mb-4">
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
                      <img
                        className=" w-8 h-8 rounded-full mr-2"
                        src={ins1}
                        alt=""
                      />
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
              <div className="mb-4">
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
                      <img
                        className=" w-8 h-8 rounded-full mr-2"
                        src={ins1}
                        alt=""
                      />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InstructorDetails;
