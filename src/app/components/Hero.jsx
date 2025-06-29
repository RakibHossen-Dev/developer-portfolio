import { IoCallSharp } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="w-11/12 mx-auto my-15 relative">
      <div className="space-y-5">
        <h2 className="text-[78px]">
          Trusted
          <span className="text-white bg-black rounded-md px-2">
            Partner
          </span>{" "}
          for <br></br>
          Your Website
          <span className="text-white bg-black rounded-md px-2">Develop.</span>
        </h2>
        <div className="max-w-[703px] mx-auto space-y-5">
          <p className="text-[18px]">
            Building the worlds best marketing websites for over a decade. Your
            trusted partner for strategy, design, and dev.
          </p>
          <button className="flex justify-center items-center gap-1 border rounded-full py-1.5 pr-1">
            <span className="border rounded-full p-1 ">
              <IoCallSharp className="text-md" />
            </span>
            <span className="text-[16px]">Schedule a Call</span>
          </button>
        </div>
      </div>

      <div className="absolute ">
        <p>@williamrey</p>
      </div>
    </div>
  );
};

export default Hero;
