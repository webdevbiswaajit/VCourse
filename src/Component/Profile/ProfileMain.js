import React from "react";
import ins2 from "../../Img/ins2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Collapsible from "react-collapsible";
import AboutTab from "./AboutTab";
import InstructorTab from "./InstructorTab";

function ProfileMain() {
  return (
    <>
      <div className=" py-24">
        <div className="container mx-auto">
          <div className=" bg-ash pt-12  ">
            <div className="flex items-center pl-12">
              <img
                className=" w-24  h-24 rounded-full mr-5"
                src={ins2}
                alt=""
              />
              <div className="">
                <h2 className=" text-black text-xl font-semibold">
                  Jarif Huda Angon
                </h2>
                <p className="text-black text-lg font-rly">Student</p>
              </div>
            </div>
            <Tabs>
              <div className="pl-12">
                <TabList>
                  <Tab>
                    <p className="text-black  text-base font-normal">
                      My Profile
                    </p>
                  </Tab>
                  <Tab>
                    <p className="text-black  text-base font-normal">
                      As Student
                    </p>
                  </Tab>
                  <Tab>
                    <p className="text-black  text-base font-normal">
                      As Instructor
                    </p>
                  </Tab>
                  <Tab>
                    <p className="text-black  text-base font-normal">
                      Enrolled Course (4)
                    </p>
                  </Tab>
                  <Tab>
                    <p className="text-black  text-base font-normal">
                      Completed Course
                    </p>
                  </Tab>
                  <Tab>
                    <p className="text-black  text-base font-normal">
                      Running Course
                    </p>
                  </Tab>
                </TabList>
              </div>
              <div className="bg-white py-3"></div>
              <TabPanel>
                <AboutTab />
              </TabPanel>
              {/* =================== */}
              <TabPanel></TabPanel>
              {/* ============================= */}
              <TabPanel>
                <InstructorTab />
              </TabPanel>
              {/* =========================== */}
              <TabPanel>
                <Collapsible trigger="Start here">
                  <p>
                    This is the collapsible content. It can be any element or
                    React component you like.
                  </p>
                  <p>
                    It can even be another Collapsible component. Check out the
                    next section!
                  </p>
                </Collapsible>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileMain;
