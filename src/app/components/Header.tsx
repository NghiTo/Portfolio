import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          alt="profile-img"
          src={assets.profile_img}
          className="h-32 w-32 rounded-full object-cover"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-Ovo mb-3 flex items-end gap-2 text-xl md:text-2xl"
      >
        Hi! I&apos;m Kenzy{" "}
        <Image alt="profile-img" src={assets.hand_icon} className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-Ovo text-3xl sm:text-6xl lg:text-[66px]"
      >
        Fullstack web developer based in Vietnam
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="font-Ovo mx-auto max-w-2xl"
      >
        I am a fullstack developer from Vietnam with 3 years of experience in
        multiple companies
      </motion.p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-white dark:bg-transparent"
        >
          contact me
          <Image
            alt="right-arrow"
            src={assets.right_arrow_white}
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-gray-500 bg-white px-10 py-3 dark:text-black"
        >
          my resume
          <Image
            alt="download-icon"
            src={assets.download_icon}
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
