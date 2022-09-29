import React from "react";
import CourseCard from "../CourseDetais/CourseCard";

function AllCourses() {
  return (
    <>
      <div className="container mx-auto mt-20 mb-20 lg:mt-28 lg:mb-20 ">
        <div className=" grid xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2 m-2 gap-5">
          <CourseCard />
        </div>
      </div>
    </>
  );
}

export default AllCourses;
