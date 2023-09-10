import React from "react";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div id="footer" className="">
      <div class="px-4 pt-4 mt-12 lg:w-1/6 mx-auto ">
        <h5 class="text-xl font-bold mb-6 sm:text-center">Stay connected</h5>
        <div class="flex sm:justify-center">
          <a
            href="https://www.instagram.com/edorotechnologies/"
            target="_blank"
            class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href=""
            class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href=""
            class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
          >
            <i class="fab fa-google-plus-g"></i>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-between border-t mt-6 pt-6 px-4 mx-auto max-w-screen-md">
        <div className="flex items-center">
          <strong>Edoro Technologies LLP</strong>
        </div>
        <div class="">
          <h6 class="font-bold mb-2">Address</h6>
          <address class="not-italic mb-4 text-sm">
            C-1057, Sector B Rd
            <br />
            Mahanagar, Lucknow, UP
            <br />
            India (226006)
          </address>
        </div>
        <div class="">
          <h6 class="font-bold mb-2">Useful Links</h6>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="lg:cursor-pointer mb-4 text-sm ">
            Services
          </Link>
          <br />
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="lg:cursor-pointer mb-4 text-sm ">
            About Us
          </Link>
          <br />
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="lg:cursor-pointer mb-4 text-sm ">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="px-4 py-2 bg-indigo-950 hover:bg-blue-400 rounded text-white">
            Get Started
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200 my-6 pt-6 px-4 mx-auto max-w-screen-md">
        <p className="text-gray-400">Copyright 2023 | Edoro Technologies LLP</p>
      </div>
    </div>
  );
}
export default Footer;
