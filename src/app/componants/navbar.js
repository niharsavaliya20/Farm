"use client";
import React from "react";
import Image from "next/image";
import logo from "../../assets/plant.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="max-w-[1300px] bg-white mx-auto px-10">
        <div className="flex justify-between items-center py-5 px-3 text-primary">
          <Image
            src={logo}
            alt="Logo"
            // width={600} // Adjust width as needed
            height={65} // Adjust height as needed
            className=""
          />

          <ul className="flex gap-x-8 h-[19px] text-primary ">
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#4A5B5C", // indigo-600
                textShadow: "0px 0px 8px rgba(79, 70, 229, 0.5)", // glow effect
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("farm-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Farm
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#4A5B5C", // indigo-600
                textShadow: "0px 0px 8px rgba(79, 70, 229, 0.5)", // glow effect
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("photos-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Photos
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#4A5B5C", // indigo-600
                textShadow: "0px 0px 8px rgba(79, 70, 229, 0.5)", // glow effect
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("blog-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Blog
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#4A5B5C", // indigo-600
                textShadow: "0px 0px 8px rgba(79, 70, 229, 0.5)", // glow effect
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Video
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
