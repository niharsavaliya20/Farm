import React from "react";
import Image from "next/image";
import logo from "../../assets/hamzah_generate_an_image_that_represents_the_concept_of_Web_3 2.png";
import logo2 from "../../assets/hamzah_generate_an_image_that_represents_the_concept_of_Web_3 1.png";
import logo3 from "../../assets/hamzah_generate_an_image_that_represents_the_concept_of_Web_3 1 (2).png";
import logo4 from "../../assets/hamzah_generate_an_image_that_represents_the_concept_of_Web_3 1 (3).png";

const Special = () => {
  return (
    <section className="bg-white mt-16">
      <div className="max-w-[1300px] bg-white mx-auto p-10">
        <div className="">
          <h1 className="text-black font-bold text-4xl">Specialized Tracks:</h1>
          <p className="mt-5 text-darkblue">
            After completing the first three quarters the participants will
            select <br /> one or more specializations consisting of two courses
            each:{" "}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-x-4 mt-10">
          <div className="border border-gray-400  basis-8/12 rounded-2xl px-8 py-8 ">
            <div className="px-4 py-4">
              <h4 className="text-primary mt-4">Specialized Program</h4>

              <h1 className="text-black text-4xl mt-4">
                Web 3.0 (Blockchain) and Metaverse <br /> Specialization
              </h1>
              <p className="text-darkblue mt-5 text-wrap text-lg">
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </p>

              <div className="mt-4">
                <a className="text-primary">Learn more</a>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row gap-x-6 gap-y-3 px-4 py-4 mt-20">
              <div className="flex flex-col justify-center border rounded-lg w-[300px] md:w-[360px] h-[279px] border-gray-400 px-8">
                <h1 className="text-black font-bold ">Quarter 4</h1>
                <p className="text-darkblue pt-2">
                  CS-101: Object-Oriented Programming using TypeScript
                </p>
              </div>

              <div className="flex flex-col justify-center border rounded-lg w-[300px] md:w-[360px] h-[279px] border-gray-400 px-8">
                <h1 className="text-black font-bold ">Quarter 5</h1>
                <p className="text-darkblue pt-2">
                  CS-101: Object-Oriented Programming using TypeScript
                </p>
              </div>
            </div>
          </div>

          <div className="text-black basis-4/12 px-4 py-6" >

            <div className="flex gap-x-4">
              <div className="rouded-md">
                <Image
                  src={logo}
                  alt="Logo"
                  // width={600} // Adjust width as needed
                  height={100} // Adjust height as needed
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-primary text-sm">Specialized Program</h5>
                <p className="text-black mt-2 ">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </p>
              </div>

            </div>
            <div className="border mt-5 border-gray-400"></div>

            <div className="flex gap-x-4 mt-5">
              <div className="">
                <Image
                  src={logo2}
                  alt="Logo"
                  // width={600} // Adjust width as needed
                  height={100} // Adjust height as needed
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-primary text-sm">Specialized Program</h5>
                <p className="text-black mt-3">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </p>
              </div>

            </div>
            <div className="border mt-5 border-gray-400"></div>

            <div className="flex gap-x-4 mt-5">
              <div className="">
                <Image
                  src={logo4}
                  alt="Logo"
                  // width={600} // Adjust width as needed
                  height={100} // Adjust height as needed
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-primary text-sm">Specialized Program</h5>
                <p className="text-black mt-2">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </p>
              </div>

            </div>
            <div className="border mt-5 border-gray-400"></div>

            <div className="flex gap-x-4 mt-5">
              <div className="">
                <Image
                  src={logo3}
                  alt="Logo"
                  // width={600} // Adjust width as needed
                  height={100} // Adjust height as needed
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-primary text-sm">Specialized Program</h5>
                <p className="text-black mt-2">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </p>
              </div>

            </div>
            <div className="border mt-5 border-gray-400"></div>

            <div className="flex gap-x-4 mt-5">
              <div className="">
                <Image
                  src={logo}
                  alt="Logo"
                  // width={600} // Adjust width as needed
                  height={100} // Adjust height as needed
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-primary text-sm">Specialized Program</h5>
                <p className="text-black mt-2">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </p>
              </div>

            </div>
            <div className="border mt-5 border-gray-400"></div>

            <div className="flex gap-x-4 mt-5">
              <div className="">
                <Image
                  src={logo}
                  alt="Logo"
                  // width={600} // Adjust width as needed
                  height={100} // Adjust height as needed
                  className=""
                />
              </div>
              <div className="">
                <h5 className="text-primary text-sm">Specialized Program</h5>
                <p className="text-black mt-2">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </p>
              </div>

            </div>
            <div className="border mt-5 border-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
