import React from "react";
import { SectionTitleCard } from "../modules/cards";

const About = () => {
  return (
    <div name="about">
      <div className="flex flex-col justify-center ">
        <SectionTitleCard title={"About"} />

        <div>
          <p className="text-base md:text-lg font-medium">
My name is Mwero Abdalla. A full-stack developer with 1.5+ years of experience.


          </p>

          <p className="text-base md:text-lg font-medium">

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
