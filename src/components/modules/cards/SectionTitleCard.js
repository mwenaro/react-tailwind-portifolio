import React from "react";

function SectionTitleCard({ title , subTitle}) {
  return (
    <div className="py-4 my-5 flex flex-col items-center justify-center">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center">
        {title}
      </p>
      {
        subTitle &&  <p className="py-6">{subTitle}</p>
      }
    </div>
  );
}

export default SectionTitleCard;
