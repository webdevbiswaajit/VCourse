import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import poster from "../../Img/detailsImage.jpg";
import Menu from "../Common/Menu";

function CourseDetails() {
  return (
    <>
      <Menu />
      <div className="container mx-auto mt-20 mb-20">
        <div className="grid grid-cols-3">
          <div className=" col-span-2">
            <h2 className=" text-black text-xl font-semibold font-slab mb-10">
              WordPress for Beginners – Master WordPress
            </h2>
            <img className=" w-full" src={poster} alt="..." />
            <div className="">
              <Tabs>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
