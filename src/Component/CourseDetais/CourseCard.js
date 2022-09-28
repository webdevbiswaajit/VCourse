import React from "react";
import { Icon } from "@iconify/react";
import ins1 from "../../Img/ins2.jpg";
import marketing from "../../Img/marketing.jpg";
import { Link } from "react-router-dom";

function CourseCard() {
  return (
    <>
      <div className="">
        <div
          className="w-full h-245 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${marketing})` }}
        ></div>
        <div className=" py-7 px-10  border border-border_black">
          <h2 className=" font-slab font-medium text-black text-lg">
            WordPress for Beginners
          </h2>
          <div className="flex justify-between  mt-4 ">
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="bxs:book-reader"
              />
              <p className="font-rly font-medium text-black text-base">
                30 Lesson
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="eva:clock-outline"
              />
              <p className="font-rly font-medium text-black text-base">
                1.5 Hrs
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <div className="flex items-center">
              <img className=" w-10  h-10 rounded-full" src={ins1} alt="" />
              <p className="font-rly font-medium text-black text-base">
                By, Jarif Huda Angon
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-rly font-medium text-black text-base">
                ৳ 5000
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-border_black py-4 text-center">
          <Link to="/course-details">
            <p className=" border-none bg-transparent text-black font-slab font-bold ">
              Enroll Course
            </p>
          </Link>
        </div>
      </div>
      <div className="">
        <div
          className="w-full h-245 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${marketing})` }}
        ></div>
        <div className=" py-7 px-10  border border-border_black">
          <h2 className=" font-slab font-medium text-black text-lg">
            WordPress for Beginners
          </h2>
          <div className="flex justify-between  mt-4 ">
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="bxs:book-reader"
              />
              <p className="font-rly font-medium text-black text-base">
                30 Lesson
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="eva:clock-outline"
              />
              <p className="font-rly font-medium text-black text-base">
                1.5 Hrs
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <div className="flex items-center">
              <img className=" w-10  h-10 rounded-full" src={ins1} alt="" />
              <p className="font-rly font-medium text-black text-base">
                By, Jarif Huda Angon
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-rly font-medium text-black text-base">
                ৳ 5000
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-border_black py-4 text-center">
          <button className=" border-none bg-transparent text-black font-slab font-bold ">
            Enroll Course
          </button>
        </div>
      </div>
      <div className="">
        <div
          className="w-full h-245 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${marketing})` }}
        ></div>
        <div className=" py-7 px-10  border border-border_black">
          <h2 className=" font-slab font-medium text-black text-lg">
            WordPress for Beginners
          </h2>
          <div className="flex justify-between  mt-4 ">
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="bxs:book-reader"
              />
              <p className="font-rly font-medium text-black text-base">
                30 Lesson
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="eva:clock-outline"
              />
              <p className="font-rly font-medium text-black text-base">
                1.5 Hrs
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <div className="flex items-center">
              <img className=" w-10  h-10 rounded-full" src={ins1} alt="" />
              <p className="font-rly font-medium text-black text-base">
                By, Jarif Huda Angon
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-rly font-medium text-black text-base">
                ৳ 5000
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-border_black py-4 text-center">
          <button className=" border-none bg-transparent text-black font-slab font-bold ">
            Enroll Course
          </button>
        </div>
      </div>
      <div className="">
        <div
          className="w-full h-245 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${marketing})` }}
        ></div>
        <div className=" py-7 px-10  border border-border_black">
          <h2 className=" font-slab font-medium text-black text-lg">
            WordPress for Beginners
          </h2>
          <div className="flex justify-between  mt-4 ">
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="bxs:book-reader"
              />
              <p className="font-rly font-medium text-black text-base">
                30 Lesson
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="eva:clock-outline"
              />
              <p className="font-rly font-medium text-black text-base">
                1.5 Hrs
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <div className="flex items-center">
              <img className=" w-10  h-10 rounded-full" src={ins1} alt="" />
              <p className="font-rly font-medium text-black text-base">
                By, Jarif Huda Angon
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-rly font-medium text-black text-base">
                ৳ 5000
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-border_black py-4 text-center">
          <button className=" border-none bg-transparent text-black font-slab font-bold ">
            Enroll Course
          </button>
        </div>
      </div>
      <div className="">
        <div
          className="w-full h-245 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${marketing})` }}
        ></div>
        <div className=" py-7 px-10  border border-border_black">
          <h2 className=" font-slab font-medium text-black text-lg">
            WordPress for Beginners
          </h2>
          <div className="flex justify-between  mt-4 ">
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="bxs:book-reader"
              />
              <p className="font-rly font-medium text-black text-base">
                30 Lesson
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="eva:clock-outline"
              />
              <p className="font-rly font-medium text-black text-base">
                1.5 Hrs
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <div className="flex items-center">
              <img className=" w-10  h-10 rounded-full" src={ins1} alt="" />
              <p className="font-rly font-medium text-black text-base">
                By, Jarif Huda Angon
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-rly font-medium text-black text-base">
                ৳ 5000
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-border_black py-4 text-center">
          <button className=" border-none bg-transparent text-black font-slab font-bold ">
            Enroll Course
          </button>
        </div>
      </div>
      <div className="">
        <div
          className="w-full h-245 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${marketing})` }}
        ></div>
        <div className=" py-7 px-10  border border-border_black">
          <h2 className=" font-slab font-medium text-black text-lg">
            WordPress for Beginners
          </h2>
          <div className="flex justify-between  mt-4 ">
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="bxs:book-reader"
              />
              <p className="font-rly font-medium text-black text-base">
                30 Lesson
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                className=" mr-3 text-khaki text-xl"
                icon="eva:clock-outline"
              />
              <p className="font-rly font-medium text-black text-base">
                1.5 Hrs
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 ">
            <div className="flex items-center">
              <img className=" w-10  h-10 rounded-full" src={ins1} alt="" />
              <p className="font-rly font-medium text-black text-base">
                By, Jarif Huda Angon
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-rly font-medium text-black text-base">
                ৳ 5000
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-border_black py-4 text-center">
          <button className=" border-none bg-transparent text-black font-slab font-bold ">
            Enroll Course
          </button>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
