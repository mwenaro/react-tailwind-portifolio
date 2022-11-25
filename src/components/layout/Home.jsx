import React from "react";
import { HERO_IMG } from "../../assets/images";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 bg-opacity-40"
    >
      <div className="  mx-auto flex flex-col items-center justify-center h-full px-4 ">
      <div>
      <h2 className="text-3xl sm:text-5xl font-bold text-white py-5 text-center">
            Hello ! I'm Mwero Abdalla
          </h2>
          <h4 className="text-2xl sm:text-3xl font-light text-white text-center">
             A Passionate Full Stack Developer
          </h4>
          
      </div>
        <div className="flex flex-col  md:flex-row ">
                

          <div className="flex flex-col justify-center items-center">
          <p className="text-gray-500 py-4 max-w-md ">
            I have 1.5+ years of experience developing beautiful and reponsive web and desktop applications using React,Tailwind, PHP, MySQL, SQLite and Node.
          </p> 
            <Link
              to="portifolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portifolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          
          
          
       
        <div className="w-full md:w-1/2">
          <img
            src={HERO_IMG}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />

          </div>
      </div>
     </div>
    </div>
  );
};

export default Home;
