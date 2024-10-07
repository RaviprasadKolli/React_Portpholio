import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h3 className="text-[#D7AA42]">Hi, my name is</h3>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          RaviPrasad Kolli
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[800px]">
          "As a skilled React.js web developer, I have a strong foundation in
          building dynamic, responsive, and user-friendly web applications. My
          expertise lies in leveraging modern front-end technologies like
          React.js, JavaScript, HTML5, and CSS3 to create seamless user
          experiences. I have a proven track record of developing and optimizing
          components with a focus on performance, reusability, and scalability.
          With experience in state management, API integration, and modern UI
          frameworks like Tailwind CSS, I am adept at delivering robust
          solutions that meet both business objectives and user needs. My
          collaborative approach ensures efficient teamwork, and my
          problem-solving skills enable me to tackle complex challenges in
          fast-paced environments."
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
