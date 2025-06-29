import React from "react";
import { IoArrowDownSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
const WorkProcess = () => {
  return (
    <div className="w-11/12 mx-auto   bg-[#141414] rounded-[40px] p-10">
      <div className="flex  items-center ">
        <button className="flex justify-center items-center gap-1 border rounded-full p-1">
          <IoArrowDownSharp className="text-lg text-white" />
        </button>
        <button className="flex justify-center items-center gap-1 border rounded-full p-1 ">
          <span className="text-[16px] text-white">Work Process</span>
        </button>
      </div>
      <h3 className="text-[58px] font-bold text-white text-center">
        My Work Process
      </h3>

      <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-black p-7 rounded-[30px]">
          <div className="flex justify-between items-center ">
            <button className="bg-green-300 px-1 rounded-full">
              Discovery
            </button>
            <button className="flex justify-center text-white items-center gap-1 underline">
              <FaArrowRightLong />
              <span>Read More</span>
            </button>
          </div>

          <p className="text-[18px] text-white mt-5">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other, discuss your current and
            future objectives, and recommend the best course of action.
          </p>
        </div>
        <div className="bg-lime-300 p-7 rounded-[30px] rotate-[4deg]">
          <div className="flex justify-between items-center ">
            <button className="bg-black px-1 text-white rounded-full">
              Discovery
            </button>
            <button className="flex justify-center  items-center gap-1 underline">
              <FaArrowRightLong />
              <span>Read More</span>
            </button>
          </div>

          <p className="text-[18px]  mt-5">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other, discuss your current and
            future objectives, and recommend the best course of action.
          </p>
        </div>
        <div className="bg-black p-7 rounded-[30px]">
          <div className="flex justify-between items-center ">
            <button className="bg-green-300 px-1 rounded-full">
              Discovery
            </button>
            <button className="flex justify-center text-white items-center gap-1 underline">
              <FaArrowRightLong />
              <span>Read More</span>
            </button>
          </div>

          <p className="text-[18px] text-white mt-5">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other, discuss your current and
            future objectives, and recommend the best course of action.
          </p>
        </div>
        <div className="bg-black p-7 rounded-[30px]">
          <div className="flex justify-between items-center ">
            <button className="bg-green-300 px-1 rounded-full">
              Discovery
            </button>
            <button className="flex justify-center text-white items-center gap-1 underline">
              <FaArrowRightLong />
              <span>Read More</span>
            </button>
          </div>

          <p className="text-[18px] text-white mt-5">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other, discuss your current and
            future objectives, and recommend the best course of action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
