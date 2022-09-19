import React from "react";
import CourseCard from "../CourseDetais/CourseCard";

function AllCourses() {
  return (
    <>
      <div className="container mx-auto mt-36  mb-36">
        <div className=" grid grid-cols-3 gap-5">
          <CourseCard />
        </div>
      </div>
    </>
  );
}

export default AllCourses;
