import React from "react";
import { Link } from "react-scroll";
function Home() {
  return (
    <div
      id="home"
      className=" flex flex-col items-start px-4 lg:pl-40 lg:max-w-5xl"
    >
      <p className="text-black font-light font-titleNorm text-lg mb-2 md:text-xl md:mb-3 lg:text-2xl lg:mb-4">
        One-Stop Solution For All Your Business Needs
      </p>
      <p className="text-start text-black font-medium font-titleBold text-4xl mb-4 md:text-5xl md:mb-6 lg:text-8xl lg:mb-10">
        Creating Softwares & Digital Excellence
      </p>
      <p className="text-start text-black font-light font-titleNorm lg:text-2xl lg:mb-10">
        We are specialized in Web Development, Web Design and we also provide
        Testing & QA, Client-Server Solution, Desktop Application Development,
        Mobile Solution. We build web solutions, which evolve with the changing
        needs of your business.
      </p>
      {/* explore button */}
      <div className="animate-bounce mt-4 bg-indigo-950 rounded-full text-white py-2 px-5 lg:py-7 lg:px-14 lg:cursor-pointer lg:transform lg:duration-300 lg:ease-in-out lg:hover:scale-105 lg:hover:text-white lg:hover:bg-indigo-500">
        <a href="http://www.edorotechnologies.com/#portfolio" target="_blank">
          <span className="text-center font-medium font-titleNorm text-base lg:text-lg">
            Explore Our Work
          </span>
        </a>
      </div>
      {/* Cards */}
      <div className="mt-14 mb-5 flex">
        <div className="max-w-lg shadow-2xl rounded  m-4">
          <div className="px-6 py-4 transform transition duration-500 hover:scale-110 hover:bg-blue-300">
            <h2 className="mb-2 font-black">Quality Products!</h2>
            <p className="mb-4  text-start text-grey-dark text-sm">
              We never compromise with the quality because quality of the
              product is our first priority. We use our experrience with the
              latest technology to develop world class product for our clients.
            </p>
          </div>
        </div>

        <div className="max-w-lg shadow-2xl rounded m-4">
          <div className="px-6 py-4 transform transition duration-500 hover:scale-110 hover:bg-blue-300">
            <h2 className="mb-2 font-black">Fastest Delivery!</h2>
            <p className="mb-4  text-start text-grey-dark text-sm">
              We respect value of TIME of our clients that motivate us for on
              time delivery of the product . To assure it we use agile
              methodology during our software development.
            </p>
          </div>
        </div>
        <div className="max-w-lg shadow-2xl rounded m-4">
          <div className="px-6 py-4 transform transition duration-500 hover:scale-110 hover:bg-blue-300">
            <h2 className="mb-2 font-black">Lowest Price!</h2>
            <p className=" text-start mb-4 text-grey-dark text-sm">
              We are providing the solution at very cheap cost to our those
              clients, who can not afford costly softwares and still running
              their business on mannual basis.
            </p>
          </div>
        </div>
      </div>
      <div className="animate-bounce mt-12 bg-indigo-950 rounded-full text-white py-2 px-5 lg:py-7 lg:px-14 lg:cursor-pointer lg:transform lg:duration-300 lg:ease-in-out lg:hover:scale-105 lg:hover:text-white lg:hover:bg-indigo-500">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="">
          <span className="text-center font-medium font-titleNorm text-base lg:text-lg">
            Request A Quote...
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
