import React from "react";
import { SectionTitleCard } from "../modules/cards";

const Contact = () => {
  return (
    <div name="contact">
      <div className="flex flex-col justify-center  ">
        <SectionTitleCard
          title={"Contact"}
          subTitle={"Submit the form below to get in touch with me"}
        />

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/3e1918e0-8173-4738-afd1-4e5d7948191f"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            {/* <!-- add hidden Honeypot input to prevent spams --> */}
            <input type="hidden" name="_gotcha" className="hidden" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
