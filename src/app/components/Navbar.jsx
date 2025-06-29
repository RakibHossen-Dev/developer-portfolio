import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto  py-[20px]">
      <div className="flex justify-between">
        <h1 className="uppercase text-2xl font-bold">develop.me</h1>
        <div className="flex justify-between items-center gap-6">
          <ul className="flex justify-between items-center gap-5 text-[18px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
          <button className="flex justify-center items-center gap-1 border rounded-full py-1 pr-1">
            <span className="border rounded-full p-1 ">
              <FaArrowRightLong className="text-md" />
            </span>
            <span className="text-[16px]">Start Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
