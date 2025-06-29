import { IoArrowDownSharp } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
const Skills = () => {
  return (
    <div className="w-11/12 mx-auto  bg-black rounded-[40px] p-10">
      <div className="flex  items-center ">
        <button className="flex justify-center items-center gap-1 border rounded-full p-1">
          <IoArrowDownSharp className="text-lg text-white" />
        </button>
        <button className="flex justify-center items-center gap-1 border rounded-full p-1 ">
          <span className="text-[16px] text-white">Why Choose me</span>
        </button>
      </div>

      <div className="flex justify-between items-center ">
        <h1 className="text-4xl font-bold text-white">
          My Extensive <br /> List of Skills
        </h1>
        <div className="max-w-[540px]">
          <p className="text-[18px] text-white mb-5">
            Building the worlds best marketing Your trusted partner for
            strategy, design, and dev.
          </p>
          <hr />
          <div className="flex justify-end gap-2 mt-9">
            <button className="border p-1 text-white rounded-full">
              <IoArrowBackOutline />
            </button>
            <button className="border p-1 text-white rounded-full">
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 mt-8">
        <div className="space-y-2.5 text-white bg-[#141414] rounded-[30px] py-8 px-5">
          <FaReact className="text-5xl" />
          <h3 className="uppercase text-[26px] font-bold">html & css</h3>
          <p className="text-[16px]">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad
            minim veniam, quis
          </p>
        </div>
        <div className="space-y-2.5 text-white bg-[#141414] rounded-[30px] py-8 px-5  rotate-[5deg]">
          <FaReact className="text-5xl" />
          <h3 className="uppercase text-[26px] font-bold">Javascript</h3>
          <p className="text-[16px]">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad
            minim veniam, quis
          </p>
        </div>
        <div className="space-y-2.5 text-white bg-[#141414] rounded-[30px] py-10 px-5">
          <FaReact className="text-5xl" />
          <h3 className="uppercase text-[26px] font-bold">Webflow</h3>
          <p className="text-[16px]">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad
            minim veniam, quis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
