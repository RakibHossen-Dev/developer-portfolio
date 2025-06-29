import { IoArrowDownSharp } from "react-icons/io5";
const About = () => {
  return (
    <div className="w-11/12 mx-auto  pt-[50px]">
      <div className="flex justify-end items-center ">
        <button className="flex justify-center items-center gap-1 border rounded-full p-1">
          <IoArrowDownSharp className="text-lg " />
        </button>
        <button className="flex justify-center items-center gap-1 border rounded-full p-1 ">
          <span className="text-[16px] ">About</span>
        </button>
      </div>

      <h2 className="md:text-[78px] text-[48px] max-w-[1053px] mx-auto text-center">
        I’ve been
        <span className="text-white bg-black rounded-md px-2">
          Developing
        </span>{" "}
        <br />
        for Websites since
        <span className="text-white bg-black rounded-md px-2"> 2013</span>
      </h2>

      <p className="text-[18px]  mb-5 max-w-[921px] mx-auto text-center">
        We start every new client interaction with an in-depth discovery call
        where we get to know each other and recommend the best course of action.
      </p>
    </div>
  );
};

export default About;
