import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import poster from "../../Img/detailsImage.jpg";
import Menu from "../Common/Menu";
import ins1 from "../../Img/ins2.jpg";

function CourseDetails() {
  return (
    <>
      <Menu />
      <div className="container mx-auto mt-20 mb-20">
        <div className="grid grid-cols-3 gap-5">
          <div className=" col-span-2">
            <h2 className=" text-black text-xl font-semibold font-slab mb-10">
              WordPress for Beginners – Master WordPress
            </h2>
            <img className=" w-full" src={poster} alt="..." />
            <div className="">
              <Tabs>
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Curriculum</Tab>
                </TabList>

                <TabPanel>
                  <h2 className=" text-black text-sm font-semibold mb-3 mt-5">
                    About Course
                  </h2>
                  <p className=" text-black font-rly font-semibold text-sm">
                    Are you new to PHP or need a refresher? Then this course
                    will help you get all the fundamentals of Procedural PHP,
                    Object Oriented PHP, MYSQLi and ending the course by
                    building a CMS system similar to WordPress, Joomla or
                    Drupal.
                  </p>
                  <p className=" text-black font-rly font-semibold text-sm mt-5">
                    Knowing PHP has allowed me to make enough money to stay home
                    and make courses like this one for students all over the
                    world. Being a PHP developer can allow anyone to make really
                    good money online and offline, developing dynamic
                    applications.
                  </p>
                  <p className=" text-black font-rly font-semibold text-sm mt-5">
                    Knowing PHP will allow you to build web applications,
                    websites or Content Management systems, like WordPress,
                    Facebook, Twitter or even Google.
                  </p>
                  <p className=" text-black font-rly font-semibold text-sm mt-5">
                    There is no limit to what you can do with this knowledge.
                    PHP is one of the most important web programming languages
                    to learn, and knowing it, will give you SUPER POWERS in the
                    web development world and job market place.
                  </p>

                  <h2 className=" text-black text-sm font-semibold mb-3 mt-5">
                    Why ?
                  </h2>

                  <p className=" text-black font-rly font-semibold text-sm mt-5">
                    Because Millions of websites and applications (the majority)
                    use PHP. You can find a job anywhere or even work on your
                    own, online and in places like freelancer or Odesk. You can
                    definitely make a substantial income once you learn it.
                  </p>
                  <h2 className=" text-black text-sm font-semibold mb-3 mt-5">
                    I will not before you
                  </h2>

                  <p className=" text-black font-rly font-semibold text-sm mt-5">
                    I take my courses very seriously but at the same time I try
                    to make it fun since I know how difficult learning from an
                    instructor with a monotone voice or boring attitude is. This
                    course is fun, and when you need some energy to keep going,
                    you will get it from me.
                  </p>
                  <h2 className=" text-black text-sm font-semibold mb-3 mt-5">
                    My Approach
                  </h2>
                  <p className=" text-black font-rly font-semibold text-sm mt-5">
                    Practice, practice and more practice. Every section inside
                    this course has a practice lecture at the end, reinforcing
                    everything with went over in the lectures. I also created a
                    small application the you will be able to download to help
                    you practice PHP. To top it off, we will build and awesome
                    CMS like WordPress, Joomla or Drupal.
                  </p>
                </TabPanel>
                <TabPanel>
                  <h2 className=" text-black text-sm font-semibold mb-3 mt-5">
                    About Course
                  </h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>

          <div className=" mt-16 ">
            <div className=" py-9 px-11 border border-border_black">
              <p className=" font-bold text-black text-2xl text-right font-rly">
                ৳ 5,000
              </p>
              <div className=" bg-khaki text-center py-2 mt-10">
                <button className=" bg-transparent text-white font-slab text-xl font-bold">
                  Join &amp; Enroll
                </button>
              </div>
            </div>
            <div className=" py-9 px-11 border border-border_black mt-5">
              <p className=" font-bold  text-khaki text-2xl font-rly">
                Material Includes
              </p>
              <ul>
                <li className=" list-disc text-black text-sm  ml-4 mt-4 font-rly font-semibold">
                  7.5 hours on-demand video
                </li>
                <li className=" list-disc text-black text-sm  ml-4 mt-4 font-rly font-semibold">
                  10 articles
                </li>
                <li className=" list-disc text-black text-sm  ml-4 mt-4 font-rly font-semibold">
                  31 downloadable resources
                </li>
                <li className=" list-disc text-black text-sm  ml-4 mt-4 font-rly font-semibold">
                  Full lifetime access
                </li>
                <li className=" list-disc text-black text-sm  ml-4 mt-4 font-rly font-semibold">
                  Access on mobile and TV
                </li>
                <li className=" list-disc text-black text-sm  ml-4 mt-4 font-rly font-semibold">
                  Certificate of Completion
                </li>
              </ul>
            </div>
            <div className=" py-9 px-11 border border-border_black">
              <p className=" font-semibold text-black text-sm font-rly">
                A Course by,
              </p>
              <div className=" mt-3 flex items-center">
                <img
                  className=" w-10 h-10 rounded-full mr-4"
                  src={ins1}
                  alt="..."
                />
                <div className="">
                  <p className=" text-black font-rly font-semibold text-base">
                    Jarif Huda Angon
                  </p>
                  <small className=" text-black font-rly  font-medium text-sm">
                    CEO &amp; Instructor
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
