import React from "react";
import "../../App.css";
import MySlide from "./FeedbackSlide";

function OurServices() {
  return (
    <>
      <div className="py-16">
        <div className="container mx-auto">
          <h1 className=" text-center text-black text-heading font-medium mb-16">
            What Our Students Says <br /> About Our Services
          </h1>
          <MySlide />
        </div>
      </div>
    </>
  );
}

export default OurServices;
