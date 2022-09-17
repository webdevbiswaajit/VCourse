import React from "react";
import Footer from "../Component/Common/Footer";
import Menu from "../Component/Common/Menu";

function About() {
  return (
    <>
      <Menu />
      <div className=" py-24">
        <div className="container mx-auto">
          <h2 className=" text-black  text-2xl text-center font-bold font-slab mb-8">
            A Great Place to Grow
          </h2>
          <p className=" font-rly text-xl font-normal text-black text-justify">
            Vcourse is a place where you can grow! Contribute to your own growth
            by coming to us. Our instructors are constantly available to you and
            will teach you in a unique and effective manner. The Vcourse team
            will ensure that you grow to your full potential in your course!{" "}
          </p>
          <h2 className=" text-black  text-2xl text-center font-bold font-slab mb-8  mt-12">
            Who We Are
          </h2>
          <p className=" font-rly text-xl font-normal text-black text-justify">
            We are a creative team. We're here to help you discover your innate
            creativity through our course. Our classes will assist you in
            thinking differently than others. Our team is comprised of a group
            of innovative educators who are prepared to address your
            difficulties at your level of comprehension. We're here to infuse
            your thoughts with our creativity. Learning with us will be an
            unforgettable experience that you will remember forever.
          </p>
          <h2 className=" text-black  text-2xl text-center  font-bold font-slab mb-8  mt-12">
            Our Mission
          </h2>
          <p className=" font-rly text-xl font-normal text-black text-justify">
            You are aware of our motto? That is our motto, "Learn for Being
            Creative". We are interested in discovering each individual's
            creativity. We believe that a teacher may enrich his or her pupils'
            inventions, and so all of our instructors are dedicated to eliciting
            the highest performance from their students. Even if you are
            completely ignorant, there is always something new to learn. Our
            goal is to fulfill your desire to learn something new and
            innovative.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
