import React from "react";
import ins_banner from "../../Img/instuctor.jpg";

function Instructor() {
  return (
    <>
      <div
        className=" py-24 bg-cover bg-center  bg-blend-overlay  bg-black_lighten "
        style={{ backgroundImage: `url(${ins_banner})` }}
      >
        <div className="container mx-auto">
          <div className=" text-center  w-1/2 mx-auto ">
            <h2 className=" text-heading text-white font-medium">
              Become An Instructor
            </h2>
            <p className=" font-normal text-light_white">
              Hello! This is a exciting opportunity for you. You can apply at
              VCourse as a Instructor. Share your talent and experience with us
              and go ahead of yourself for a new challenge.
            </p>
            <button className=" bg-khaki text-black px-7 py-4 mt-10 rounded-md">
              Apply As Instructor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructor;
