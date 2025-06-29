import { IoArrowDownSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex  items-center ">
        <button className="flex justify-center items-center gap-1 border rounded-full p-1">
          <IoArrowDownSharp className="text-lg " />
        </button>
        <button className="flex justify-center items-center gap-1 border rounded-full p-1 ">
          <span className="text-[16px] ">Contact</span>
        </button>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <div className="space-y-4">
          <h2 className="md:text-[78px] text-[48px]">
            Interested in <br className="hidden lg:block"></br>
            <span className="text-white bg-black rounded-md px-2">work</span>
            for together?
          </h2>
          <p className="text-[18px]">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>
          <button className="flex border-black justify-center items-center gap-1 border rounded-full py-1.5 pr-1">
            <span className="border rounded-full p-1 border-black">
              <IoCallSharp className="text-md" />
            </span>
            <span className="text-[16px]">Schedule a Call</span>
          </button>
        </div>
        <div className="bg-black p-8 rounded-[30px] w-[529px]">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              class="border-b-2 w-full text-white border-lime-300 focus:outline-none focus:border-lime-500 py-2 px-3 w-full"
            />
            <input
              type="text"
              placeholder="Your email address"
              class="border-b-2 w-full text-white border-lime-300 focus:outline-none focus:border-lime-500 py-2 px-3 w-full"
            />
            <input
              type="text"
              placeholder="Describe your project"
              class="border-b-2 w-full text-white border-lime-300 focus:outline-none focus:border-lime-500 py-2 px-3 w-full"
            />
            <div className="flex items-center gap-5">
              <button className="flex text-white justify-center items-center gap-1 border rounded-full py-1.5 pr-1">
                <span className="border rounded-full p-1 ">
                  <IoCallSharp className="text-md" />
                </span>
                <span className="text-[16px]">Send</span>
              </button>

              <p className="text-white">or</p>
              <button className="flex text-white  justify-center items-center gap-1 border rounded-full py-1.5 pr-1">
                <span className="border rounded-full p-1 ">
                  <IoCallSharp className="text-md" />
                </span>
                <span className="text-[16px]">Contact Me</span>
              </button>
            </div>
          </form>

          <div className="flex items-center gap-2 text-white mt-10">
            <p>@williamrey</p>
            <div className="flex items-center gap-1">
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
      </div>
    </div>
  );
};

export default Contact;
