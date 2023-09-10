import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "./logo.jpg"

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="fixed w-screen z-10 bg-indigo-950 py-3 text-white  shadow-black">
        <div className="container flex  justify-between">
          {/* Logo */}
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <img
              className="lg:cursor-pointer h-12 ml-10"
              src={logo}
              alt="Logo"
            />
          </Link>
          {/* Navigation */}
          <nav className="lg:flex justify-between lg:flex-1">
            {/* Menu */}
            <button
              onClick={toggleMenu}
              className="visible lg:invisible mb-2 mr-9"
            >
              <i class="fa-solid fa-bars text-2xl"></i>
            </button>
            <div
              className={`mr-11 lg:flex items-center text-sm lg:text-lg  lg:space-x-8 ${
                menuVisible ? "" : "hidden"
              }`}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="lg:cursor-pointer block mb-3 lg:mb-0 lg:flex text-white text-xs lg:text-lg lg:font-extrabold  hover:text-blue-400 transition duration-500"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="lg:cursor-pointer block mb-3 lg:mb-0 lg:flex text-white text-xs lg:text-lg lg:font-extrabold hover:text-blue-400 transition duration-500"
              >
                About Us
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="lg:cursor-pointer block mb-3 lg:flex lg:mb-0 text-white text-xs lg:text-lg lg:font-extrabold hover:text-blue-400 transition duration-500"
              >
                Services
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="lg:cursor-pointer block mb-3 lg:flex lg:mb-0 text-white text-xs lg:text-lg lg:font-extrabold hover:text-blue-400 transition duration-500"
              >
                Contact Us
              </Link>
            </div>
            {/* Social media Links */}
            <div
              className={`mr-11 items-center space-x-2 lg:space-x-8 lg:flex ${
                menuVisible ? "" : "hidden"
              }`}
            >
              <a
                href="https://github.com/static-saqib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500"
              >
                <i class="fa-brands fa-github-alt"></i>
              </a>
              <a
                href="https://www.instagram.com/edorotechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/edoro-technologies-llp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
