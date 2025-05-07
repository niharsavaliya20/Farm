import React from "react";
import Image from "next/image";
import logo from "../../assets/farm_img4.jpg";
import polygonIcon from "../../assets/polyicon.png";
const Outcome = () => {
  return (
    <section className="bg-white mt-16 mb-16">
      <div className="max-w-[1300px] bg-white mx-auto p-10">
        <div className="flex flex-col md:flex-row gap-x-15 gap-y-5 items-center">
          <div className="flex-1">
            <Image
              src={logo}
              alt="Logo"
              // width={600} // Adjust width as needed
              height={500} // Adjust height as needed
              className=""
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl text-black font-bold">
              The Outcome for Participants of
              <br /> the Program
            </h1>
            <p className="text-darkblue mt-5">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4">
              <div className="flex items-center  gap-x-2 mt-5">
                <div>
                  <Image
                    src={polygonIcon}
                    alt="Logo"
                    // width={600} // Adjust width as needed
                    height={40} // Adjust height as needed
                    className=""
                  />
                </div>
                <h3 className="text-darkblue text-lg">Product Ownership</h3>
              </div>

              <div className="flex items-center  gap-x-2 mt-5">
                <div>
                  <Image
                    src={polygonIcon}
                    alt="Logo"
                    // width={600} // Adjust width as needed
                    height={40} // Adjust height as needed
                    className=""
                  />
                </div>
                <h3 className="text-darkblue text-lg">Product Ownership</h3>
              </div>

              <div className="flex items-center gap-x-2 mt-5">
                <div>
                  <Image
                    src={polygonIcon}
                    alt="Logo"
                    // width={600} // Adjust width as needed
                    height={40} // Adjust height as needed
                    className=""
                  />
                </div>
                <h3 className="text-darkblue text-lg">Product Ownership</h3>
              </div>

              <div className="flex items-center gap-x-2 mt-5">
                <div>
                  <Image
                    src={polygonIcon}
                    alt="Logo"
                    // width={600} // Adjust width as needed
                    height={40} // Adjust height as needed
                    className=""
                  />
                </div>
                <h3 className="text-darkblue text-lg">Product Ownership</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcome;
