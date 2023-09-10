import React from "react";
import { Link } from "react-scroll";
export default function Services() {
  return (
    <>
      <div id="services">
        <h1 className="text-black text-3xl font-bold my-14 underline">SERVICES</h1>
        <div className="flex lg:pl-40 lg:max-w-6xl">
          <div className="mx-10 bg-indigo-950 shadow-black shadow-2xl text-center rounded-lg transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
            <h1 className="mt-3 p-4 text-white text-8xl">
              <i class="fa-solid fa-cloud-arrow-up"></i>
            </h1>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="p-5 text-white font-semibold font-mono lg:cursor-pointer lg:hover:text-blue-400"
            >
              Web Solutions
            </Link>
            <p className="text-start p-5 text-white">
              We analyze, design, develop and implement static as well as
              dynamic websites with latest technologies like HTML5, Responsive
              Design, Jquery etc.
            </p>
          </div>
          <div className="mx-10 bg-indigo-950 shadow-black shadow-2xl text-center rounded-lg lg:w-auto transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
            <h1 className="mt-3 p-4 text-white text-8xl">
              <i class="fa-solid fa-tv"></i>
            </h1>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="p-5 text-white font-semibold font-mono lg:cursor-pointer lg:hover:text-blue-400" >
              ERP/CRM Solution
            </Link>
            <p className="text-start p-5 text-white">
              We understand the requirements of client and offer customize as
              well as our own developed ERP/ CRM solutions to make you more
              competitive in your segments
            </p>
          </div>
          <div className="mx-10 bg-indigo-950 shadow-black shadow-2xl text-center rounded-lg lg:w-auto transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
            <h1 className="mt-3 p-4 text-white text-8xl">
              <i class="fa-solid fa-mobile"></i>
            </h1>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="p-5 text-white font-semibold font-mono lg:cursor-pointer lg:hover:text-blue-400">
              Mobile Application
            </Link>
            <p className="text-start p-5 text-white">
              As world is moving towards the smart phones, We also provide the
              mobile applications for ios, android and windows platform as per
              the client requirements
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
