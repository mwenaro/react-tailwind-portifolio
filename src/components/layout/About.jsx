import React from "react";
import { SectionTitleCard } from "../modules/cards";

const About = () => {
  return (
    <div name="about">
      <div className="flex flex-col justify-center ">
        <SectionTitleCard title={"About"} />

        <div>
          <p className="text-xl">
My name is Mwero Abdalla. A full-stack developer with 1.5+ years of experince.


          </p>

          <p className="text-xl">

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
