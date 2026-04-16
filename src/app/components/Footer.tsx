import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="mx-auto mb-2 w-36"
        />
        <div className="mx-auto flex w-max items-center gap-2">
          <Image src={isDarkMode ? assets.mail_icon_dark :assets.mail_icon} alt="" className="w-6" />
          tobanghi@gmail.com
        </div>
      </div>
      <div className="mx-[10%] mt-12 items-center justify-between border-t border-gray-400 py-6 text-center sm:flex">
        <p>© Nghi To. All rights reserved.</p>
        <ul className="mt-4 flex items-center justify-center gap-10 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/NghiTo">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nghị-tô-bá-8aa85b312/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/nghi.toba.9/">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
