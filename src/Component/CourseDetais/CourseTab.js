import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Collapsible from "react-collapsible";

function CourseTab() {
  return (
    <>
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
            Are you new to PHP or need a refresher? Then this course will help
            you get all the fundamentals of Procedural PHP, Object Oriented PHP,
            MYSQLi and ending the course by building a CMS system similar to
            WordPress, Joomla or Drupal.
          </p>
          <p className=" text-black font-rly font-semibold text-sm mt-5">
            Knowing PHP has allowed me to make enough money to stay home and
            make courses like this one for students all over the world. Being a
            PHP developer can allow anyone to make really good money online and
            offline, developing dynamic applications.
          </p>
          <p className=" text-black font-rly font-semibold text-sm mt-5">
            Knowing PHP will allow you to build web applications, websites or
            Content Management systems, like WordPress, Facebook, Twitter or
            even Google.
          </p>
          <p className=" text-black font-rly font-semibold text-sm mt-5">
            There is no limit to what you can do with this knowledge. PHP is one
            of the most important web programming languages to learn, and
            knowing it, will give you SUPER POWERS in the web development world
            and job market place.
          </p>

          <h2 className=" text-black text-sm font-semibold mb-3 mt-5">Why ?</h2>

          <p className=" text-black font-rly font-semibold text-sm mt-5">
            Because Millions of websites and applications (the majority) use
            PHP. You can find a job anywhere or even work on your own, online
            and in places like freelancer or Odesk. You can definitely make a
            substantial income once you learn it.
          </p>
          <h2 className=" text-black text-sm font-semibold mb-3 mt-5">
            I will not before you
          </h2>

          <p className=" text-black font-rly font-semibold text-sm mt-5">
            I take my courses very seriously but at the same time I try to make
            it fun since I know how difficult learning from an instructor with a
            monotone voice or boring attitude is. This course is fun, and when
            you need some energy to keep going, you will get it from me.
          </p>
          <h2 className=" text-black text-sm font-semibold mb-3 mt-5">
            My Approach
          </h2>
          <p className=" text-black font-rly font-semibold text-sm mt-5">
            Practice, practice and more practice. Every section inside this
            course has a practice lecture at the end, reinforcing everything
            with went over in the lectures. I also created a small application
            the you will be able to download to help you practice PHP. To top it
            off, we will build and awesome CMS like WordPress, Joomla or Drupal.
          </p>
        </TabPanel>
        <TabPanel>
          <Collapsible trigger="Start here">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default CourseTab;
