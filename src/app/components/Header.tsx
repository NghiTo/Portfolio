import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          alt="profile-img"
          src={assets.profile_img}
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Kenzy{" "}
        <Image alt="profile-img" src={assets.hand_icon} className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Fullstack web developer based in Vietnam
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a fullstack developer from Vietnam with 3 years of experience in
        multiple companies
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me
          <Image
            alt="right-arrow"
            src={assets.right_arrow_white}
            className="w-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image
            alt="download-icon"
            src={assets.download_icon}
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
