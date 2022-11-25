import React from "react";
import { CSS_IMG, GITHUB_IMG, HTML_IMG, JS_IMG,TS_IMG, NODE_IMG, PHP_IMG, REACT_IMG, SQLITE_IMG, TAILWIND_IMG, MYSQL_IMG } from "../../assets/images";
import { SectionTitleCard } from "../modules/cards";



const Skills = () => {
  const techs = [
   
    {
     
      src: REACT_IMG,
      title: "React",
      style: "shadow-blue-600",
    },
    {
     
      src: TS_IMG,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
   
    {
      
      src: TAILWIND_IMG,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
     
      src: HTML_IMG,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      
      src: CSS_IMG,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
    
      src: JS_IMG,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
     
      src: NODE_IMG,
      title: "Node JS",
      style: "shadow-[#cf0]",
    },
    {
     
      src: PHP_IMG,
      title: "PHP",
      style: "shadow-[#6181b6]",
    },
    {
     
      src: MYSQL_IMG,
      title: "",
      style: "shadow-yellow-500",
    },
    {
     
      src: SQLITE_IMG,
      title: "SQLite",
      style: "shadow-[#0dd]",
    },
    
          {
      
      src: GITHUB_IMG,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white">
       

        <SectionTitleCard title={"Skills"} subTitle ={"These are the technologies I've worked with"} />

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0">
          {techs.map(({src, title, style },i) => (
            <div
              key={i}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills
