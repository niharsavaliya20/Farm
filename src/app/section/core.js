"use client";
import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Core = () => {
  const headingRef2 = useRef(null);

  useEffect(() => {
    const el = headingRef2.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 200 }, // 👈 start from right
        {
          opacity: 2,
          x: 0, // 👈 center on scroll down
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play reverse play reverse',
            markers: false, // set to true if needed
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);
  
  return (
    <section className="bg-white mt-16">
      <div id="blog-section" className="max-w-[1300px] bg-white mx-auto p-10">
        <div>
          <h3 className="text-primary mt-4 uppercase">Program of Studies</h3>
          <h1 ref={headingRef2} className="text-4xl text-black font-bold mt-4">
            Core Courses
            <br />
            (Common in All Specializations):
          </h1>

          <h1
            className="text-4xl text-black font-bold mt-4"
          >
            Savaliya Farm
          </h1>

          <p className="mt-5 text-darkblue">
            Every participant of the program will start by completing the <br />
            following three core courses:
          </p>
          <div className="mt-5">
            <button className="bg-primary text-white rounded-full px-4 py-2">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col md:flex-row gap-x-10 gap-y-5">
            <div className="flex flex-col justify-center border rounded-lg w-[360px] h-[279px] border-gray-400 px-8">
              <h1 className="text-black font-bold ">Quarter 1</h1>
              <p className="text-darkblue pt-2">
                CS-101: Object-Oriented Programming using TypeScript
              </p>
            </div>

            <div className="flex flex-col justify-center border rounded-lg w-[360px] h-[279px] border-gray-400 px-8">
              <h1 className="text-black font-bold ">Quarter 2</h1>
              <p className="text-darkblue pt-2">
                CS-101: Object-Oriented Programming using TypeScript
              </p>
            </div>

            <div className="flex flex-col justify-center border rounded-lg w-[360px] h-[279px] border-gray-400 px-8">
              <h1 className="text-black font-bold ">Quarter 3</h1>
              <p className="text-darkblue pt-2">
                CS-101: Object-Oriented Programming using TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Core;
