import React from "react";

function About() {
  return (
    <div id="about">
        <div className="w-4/6 m-auto">
          <h1 className="text-black text-3xl font-bold my-14 mt-24 underline ">ABOUT US</h1>
          <p className="text-black text-start mt-5">
            Edoro Technologies is a newly founded Software Development Company
            based at Lucknow with the team of skilled and experienced IT experts
            established in early 2015. We are passionate about client
            satisfaction and provide affordable and quality services to our
            clients with small to corporate-sized businesses worldwide. We are
            specialized in Web Development, Web Design and we also provide
            Testing & QA, Client-Server Solution, Desktop Application
            Development, Mobile Solution. We build web solutions, which evolve
            with the changing needs of your business.
          </p>
          <h2 className="text-xl font-semibold uppercase my-12 text-start">
        Process We Follow
      </h2>
        </div>
      <div className=" w-4/6 m-auto">
      <div className="bg-indigo-950 border border-blue-500 text-center py-6 shadow-lg">
        <h3 className="p-5 text-white font-semibold font-mono lg:hover:text-blue-400">1. Requirement Gathering</h3>
        <p className="text-white">
          We follow the first and foremost priority of gathering requirements,
          resources, and information to begin our project.
        </p>
      </div>
      <div className="bg-indigo-950 border border-blue-500 text-center py-6 mt-5 shadow-lg">
        <h3 className="p-5 text-white font-semibold font-mono lg:hover:text-blue-400"> 2. UI/UX Design</h3>
        <p className="text-white">
          We create catchy and charming designs with the latest tools of
          designing to make it a best user-friendly experience..
        </p>
      </div>
      <div className="bg-indigo-950 border border-blue-500 text-center py-6 mt-5 shadow-lg">
        <h3 className="p-5 text-white font-semibold font-mono lg:hover:text-blue-400" >3. Prototype</h3>
        <p className="text-white">
          After designing, you will get your prototype, which will be sent ahead
          for the development process for the product.
        </p>
      </div>
      <div className="bg-indigo-950 border border-blue-500 text-center py-6 mt-5 shadow-lg">
        <h3 className="p-5 text-white font-semibold font-mono  lg:hover:text-blue-400">4. Development</h3>
        <p className="text-white">
          Development of mobile application/web/blockchain started using latest
          tools and technologies with transparency.
        </p>
      </div>
      <div className="bg-indigo-950 border border-blue-500 text-center py-6 mt-5 shadow-lg">
        <h3 className="p-5 text-white font-semibold font-mono lg:hover:text-blue-400">5. Quality Assurance</h3>
        <p className="text-white">
          Hyperlink values quality and provides 100% bug free application with
          no compromisation in it.
        </p>
      </div>
      <div className="bg-indigo-950 border border-blue-500 text-center py-6 mt-5 shadow-lg ">
        <h3 className="p-5 text-white font-semibold font-mono  lg:hover:text-blue-400">6. Support & Maintenance</h3>
        <p className="text-white">
          Our company offers you all support and the team is always ready to
          answer every query after deployment.
        </p>
      </div>
    </div>
    </div>
  );
}
export default About;
