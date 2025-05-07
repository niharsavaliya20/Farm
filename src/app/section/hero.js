"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/farm_img2.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../componants/AnimatedText";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
  
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 100 }, // 👈 start from right
        {
          opacity: 2,
          x: 0, // 👈 center on scroll down
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: 'top 30%',
            end: 'top 15%',
            toggleActions: 'play reverse play reverse',
            markers: false, // set to true if needed
          },
        }
      );
    }, el);
  
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white">
      <div id="farm-section" className="max-w-[1300px] bg-white mx-auto p-10">
        <div className="flex flex-col md:flex-row gap-x-8 items-center ">
          <div className="flex-1">
            <h3 className="text-primary mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h3>

            <h1 ref={headingRef} className="text-4xl text-black font-bold mt-4">
              {" "}
              Savaliya Farm
            </h1>

            <AnimatedText>
              <h1 className="text-2xl text-black font-bold">
                Zalancer 
              </h1>
            </AnimatedText>

            <p className="text-darkblue mt-5">
              A One and Quarter Years Panaverse DAO Earn as you Learn <br />{" "}
              Program Getting Ready for the Next Generation of the Internet
            </p>
            <p className="text-darkblue mt-5">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              <br /> Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              <br /> Bioinformatics Technologies
            </p>

            <div className="mt-5 mb-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-white bg-primary rounded-full py-3 px-5"
              >
                Learn More
              </motion.button>
            </div>
          </div>

          {/* <motion.div
            className="flex-1 mt-2 md:mt-5 flex justify-center"
            whileHover={{
              scale: 1.05,
              rotate: 3,
              
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src={logo}
              alt="Logo"
              height={600}
              width={500}
              className=""
            />
          </motion.div> */}

          <div className="flex-1 mt-2 md:mt-5">
            <Image
              src={logo}
              alt="Logo"
              // width={600} // Adjust width as needed
              height={500} // Adjust height as needed
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
