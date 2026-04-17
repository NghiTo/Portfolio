import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full scroll-mt-20 px-[12%] py-10"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-Ovo mb-2 text-center text-lg"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-Ovo text-center text-5xl"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="font-Ovo mx-auto mt-5 mb-12 max-w-2xl text-center"
      >
        I am a fullstack developer from Vietnam with 3 years of experience in
        multiple companies
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid-cols-auto my-10 grid gap-6"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="hover:bg-lightHover dark:hover:bg-darkHover cursor-pointer rounded-lg border border-gray-400 px-8 py-12 duration-500 hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="my-4 text-lg text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm leading-5 text-gray-600 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="mt-5 flex items-center gap-2 text-sm">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
