import React from "react";
import PropTypes from "prop-types";

function PageWrapper({ children }) {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white min-h-fit sm:min-h-screen">
      <div className=" max-w-screen-lg mx-auto my-4">{children}</div>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
