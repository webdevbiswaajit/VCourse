import React from "react";

import InstructorSlide from "./InstructorSlide";

function MeetInstractor() {
  return (
    <>
      <div className=" bg-ash">
        <div className="container mx-auto py-16">
          <h2 className=" font-mediumb text-heading text-black text-center mb-20">
            Meet Our Instructor
          </h2>
          <InstructorSlide />
        </div>
      </div>
    </>
  );
}

export default MeetInstractor;
