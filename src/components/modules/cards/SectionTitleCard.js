import React from "react";
import PropTypes from "prop-types";

function SectionTitleCard({ title, subTitle }) {
  return (
    <div className="py-4 my-5 flex flex-col items-center justify-center ">
      <h1 className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {title}
      </h1>
      {subTitle && <p className="py-6 text-base font-normal">{subTitle}</p>}
    </div>
  );
}


SectionTitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default SectionTitleCard;
