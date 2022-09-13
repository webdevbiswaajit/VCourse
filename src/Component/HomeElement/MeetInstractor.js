import React from "react";

import InstructorSlide from "./InstructorSlide";

function MeetInstractor() {
  return (
    <>
      <div className=" bg-ash">
        <div className="container mx-auto py-16">
          <h2 className="text-center text-2xl sm:text-5xl mb-7 sm:mb-16 font-medium text-black">
            Meet Our Instructor
          </h2>
          <InstructorSlide />
        </div>
      </div>
    </>
  );
}

export default MeetInstractor;
