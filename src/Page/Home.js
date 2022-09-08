import React from "react";
import Menu from "../Component/Common/Menu";
import Hero from "../Component/HomeElement/Hero";
import LearnWith from "../Component/HomeElement/LearnWith";
import PopularCourses from "../Component/HomeElement/PopularCourses";
import TopCategories from "../Component/HomeElement/TopCategories";

function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <TopCategories />
      <PopularCourses />
      <LearnWith />
    </>
  );
}

export default Home;
