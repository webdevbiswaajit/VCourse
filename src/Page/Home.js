import React from "react";
import Footer from "../Component/Common/Footer";
import Menu from "../Component/Common/Menu";

import Hero from "../Component/HomeElement/Hero";
import Instructor from "../Component/HomeElement/Instructor";
import LearnWith from "../Component/HomeElement/LearnWith";
import MeetInstractor from "../Component/HomeElement/MeetInstractor";
import Newsletter from "../Component/HomeElement/Newsletter";
import OurServices from "../Component/HomeElement/OurServices";
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
      <OurServices />
      <Instructor />
      <MeetInstractor />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
