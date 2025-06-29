import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="w-11/12 mx-auto bg-[url('/gradientbg.png')] overflow-hidden py-20 relative ">
      <div className="space-y-8">
        <h2 className="md:text-[78px] text-[48px]">
          Trusted
          <span className="text-white bg-black rounded-md px-2">
            Partner
          </span>{" "}
          for <br className="hidden lg:block"></br>
          Your Website
          <span className="text-white bg-black rounded-md px-2">Develop.</span>
        </h2>
        <div className="max-w-[703px] mx-auto space-y-5">
          <p className="text-[18px]">
            Building the worlds best marketing websites for over a decade. Your
            trusted partner for strategy, design, and dev.
          </p>
          <button className="flex border-black justify-center items-center gap-1 border rounded-full py-1.5 pr-1">
            <span className="border rounded-full p-1 border-black">
              <IoCallSharp className="text-md" />
            </span>
            <span className="text-[16px]">Schedule a Call</span>
          </button>
        </div>
      </div>

      <div className="absolute  transform -translate-y-1/2 rotate-[-90deg]">
        <p>@williamrey</p>
        <div className="flex justify-between gap-1">
          ----
          <Link href="/">
            <MdFacebook />
          </Link>
          <Link href="/">
            <IoLogoInstagram />
          </Link>
          <Link href="/">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
