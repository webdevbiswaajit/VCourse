import React from "react";
import { Icon } from "@iconify/react";
import learn from "../../Img/learnwith.jpg";

function LearnWith() {
  return (
    <>
      <div className=" bg-lean py-20">
        <div className="container mx-auto">
          <h2 className=" text-center text-heading font-medium ">
            Why You'll Learn with Us
          </h2>
          <div className="grid grid-cols-3 mt-16 mb-28 gap-5">
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
          <div className=" grid grid-cols-2 gap-5">
            <div className=" ">
              <h2 className=" text-5xl text-black font-slab font-medium">
                Vcourse Creative <br /> Learning Steps
              </h2>
              <div className="flex mt-8">
                <Icon
                  className=" text-khaki text-5xl mr-5"
                  icon="akar-icons:circle-chevron-right-fill"
                />

                <div className="">
                  <h2 className=" font-rly font-medium text-black text-xl mt-2">
                    Find What Suits You Most.
                  </h2>
                  <p className=" text-black  text-lg mt-3 font-rly">
                    Learn what make sense to you and find best course from
                    Vcourse. Learn which grab your attention mostly and you're
                    highly interested.
                  </p>
                </div>
              </div>
              <div className="flex mt-8">
                <Icon
                  className=" text-khaki text-6xl mr-5"
                  icon="akar-icons:circle-chevron-right-fill"
                />

                <div className="">
                  <h2 className=" font-rly font-medium text-black text-xl mt-4">
                    Get ready and Make Your Own Place.
                  </h2>
                  <p className=" text-black  text-lg mt-3">
                    Be prepared about your class and ask questions to instructor
                    if you don't understand his/her lessons. Attend every quiz,
                    classes and try to improve.
                  </p>
                </div>
              </div>

              <div className="flex mt-8">
                <Icon
                  className=" text-khaki text-7xl mr-5"
                  icon="akar-icons:circle-chevron-right-fill"
                />

                <div className="">
                  <h2 className=" font-rly font-medium text-black text-xl mt-5">
                    Practice and Become Expert on Your Field.
                  </h2>
                  <p className=" text-black  text-lg mt-3">
                    Practice more and more to become expert on your field.
                    Without practicing no one can be successful. Mind one thing
                    that everyone values on your expertises not on your outward!
                  </p>
                </div>
              </div>
              <div className=" mt-10 flex">
                <button className=" bg-khaki px-5 py-4 flex items-center rounded-md">
                  <Icon
                    className=" mr-2.5 text-black text-xl"
                    icon="bi:bookmark-fill"
                  />
                  <span className=" text-black text-sm font-medium">
                    Start Learn Today
                  </span>
                </button>
              </div>
            </div>
            <div className="">
              <img src={learn} alt="Leanr Banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnWith;
