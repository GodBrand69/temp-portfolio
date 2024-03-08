"use client";
import { motion, useInView, useScroll } from "framer-motion";

const AboutPage = () => {
  
  return (
    <motion.div
      className=" md:px-24 bg-gradient-to-b from-blue-100 to-red-100 object-cover max-md:px-10 pt-24"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-hidden lg:flex" >
       
          
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={ { x: "0" } }
              transition={{ delay: 0.2 }}
              className="font-bold text-[#800020] text-4xl sm:text-5xl"
            >
              Experience
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              
              animate={{ x: "0" } }
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white max-sm:text-sm p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Electronic Department 
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm max-sm:hidden italic">
                  Tested, inspected, diagnosed, and repaired electronic hardware faults. Replaced defective components and conducted set-up, calibration, testing, and troubleshooting of circuits and mechanical assemblies.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    07/2023-Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Jindal Saw Ltd
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 max-sm:text-sm font-semibold rounded-b-lg rounded-s-lg">
                  Software Developer Trainee

                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 max-sm:hidden text-sm italic">
                  Project Management, Teamwork. Tested code for bugs, debugged to fix errors, and boosted performance. Applied various case scenarios to verify validity and feasibility.

                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  04/2022-06/2022
{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Fewer Clicks Software LLP

                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 max-sm:text-sm font-semibold rounded-b-lg rounded-s-lg">
                  Software Test Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 max-sm:hidden text-sm italic">
                  Software Testing, Project Management. Tested functionality, performance, and compliance of products against design specifications to maintain strong development standards.

                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                  01/2023-03/2023
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Devfolks

                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
       
      
    </motion.div>
  );
};

export default AboutPage;
