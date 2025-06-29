import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto  bg-black rounded-[40px] p-10">
      <div className="grid grid-cols-3 justify-between ">
        <div className="col-span-1">
          <h1 className="uppercase text-[#C5FF41] font-bold text-[34px]">
            devlop.me
          </h1>
        </div>
        <div className="col-span-2">
          <h2 className="text-[64px] text-white">As You Can</h2>
          <div className="flex justify-between gap-5">
            <div>
              <p className="text-[#757575] text-[16px] mb-3">Say Hello</p>
              <div className=" space-y-2 flex flex-col mb-6">
                <Link href="/" className="uppercase text-[16px] text-white">
                  HELLO@DEVLOP.ME.COM
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  MAHBUBUL@ME.COM
                </Link>
              </div>
              <p className="text-[#757575] text-[16px] mb-3">Call</p>
              <div className=" space-y-2 flex flex-col">
                <Link href="/" className="uppercase text-[16px] text-white">
                  +784549 4981 00
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  +8845 0100 211
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[#757575] text-[16px] mb-3">Menu</p>
              <div className=" space-y-2 flex flex-col">
                <Link href="/" className="uppercase text-[16px] text-white">
                  Home
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  About
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  portfolo
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  Blog
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[#757575] text-[16px] mb-2">Social</p>
              <div className="space-y-2 flex flex-col">
                <Link href="/" className="uppercase text-[16px] text-white">
                  TWITTER
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  INSTAGRAM
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  FACEBOOK
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  BEHANCE
                </Link>
                <Link href="/" className="uppercase text-[16px] text-white">
                  DRIBBBLE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5 mt-15">
        <h3 className="text-[24px] uppercase text-white">BESNIK</h3>
        <p className="text-[16px] text-white">© devlop.me 2025</p>
        <h3 className="text-[16px] text-white">PRIVACY - TERMS</h3>
      </div>
    </div>
  );
};

export default Footer;
