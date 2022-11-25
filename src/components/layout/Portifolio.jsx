import React from "react";
import { ARRAY_DESRTUCT_IMG, INSTALL_NODE_IMG, NAV_BAR_IMG, REACT_PARALLAX_IMG, REACT_SMOOTH_IMG, REACT_WEATHER_IMG } from "../../assets/images";


const Portifolio = () => {
  const portifolios = [
    {
      id: 1,
      src: ARRAY_DESRTUCT_IMG,
    },
    {
      id: 2,
      src: REACT_PARALLAX_IMG,
    },
    {
      id: 3,
      src: NAV_BAR_IMG,
    },
    {
      id: 4,
      src: REACT_SMOOTH_IMG,
    },
    {
      id: 5,
      src: INSTALL_NODE_IMG,
    },
    {
      id: 6,
      src: REACT_WEATHER_IMG,
    },
  ];

  return (
    <div
      name="portifolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portifolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portifolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
