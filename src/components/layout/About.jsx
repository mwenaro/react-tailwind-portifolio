import React from "react";
import { SectionTitleCard } from "../modules/cards";

const About = () => {
  return (
    <div name="about">
      <div className="flex flex-col justify-center ">
        <SectionTitleCard title={"About"} />

        <div className="mx-auto w-fit">
          <p className="text-base md:text-lg font-semibold max-w-ld p-3 my-2">
            My name is Mwero Abdalla. I am a full-stack developer with 3+ years
            of experience creating web applications using React, TypeScript,
            Tailwind, Redux-Toolkit, PHP, MySQL, MongoDB, and Node.js. With a
            strong background in responsive design and user experience, I am
            passionate about developing performant and visually appealing web
            applications.
          </p>
          <p className="text-base md:text-lg font-semibold max-w-ld p-3 my-2">
            In my previous roles, I have developed and maintained various
            e-commerce websites, launched SaaS platforms, and collaborated with
            designers and project managers to deliver high-quality web
            applications. I am well-versed in utilizing Redux-Toolkit for state
            management, writing unit tests using Jest, and integrating the
            front-end with back-end development using APIs.
          </p>
          <p className="text-base md:text-lg font-semibold max-w-ld p-3 my-2">
            In my next role, I am looking to join a dynamic team that values
            collaboration, innovation, and personal growth. As a full-stack
            developer, I am eager to contribute to the development of new web
            applications, work on complex problems, and stay up-to-date with the
            latest web development trends. My strong skills in React,
            TypeScript, Tailwind, PHP, MySQL, MongoDB, Node.js, and responsive
            design make me a valuable addition to any team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
