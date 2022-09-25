import React from "react";
import CourseCard from "../CourseDetais/CourseCard";

function AllCourses() {
  return (
    <>
      <div className="container mx-auto  sm:mt-36  sm:mb-36">
        <div className=" grid sm:grid-cols-3 md:grid-cols-2 m-2 gap-5">
          <CourseCard />
        </div>
      </div>
    </>
  );
}

export default AllCourses;
