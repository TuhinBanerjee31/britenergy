import React from "react";

const TeamCards = (props) => {
  return (
    <div className="w-full max-w-md border border-gray-200 rounded-lg shadow bg-[#102a41]">
      <div className="flex flex-col items-center py-10">
        {/* <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={props.data.imageUrl}
          alt={props.data.name}
        /> */}
        <h5 className="mb-1 text-xl font-medium text-[#102a41] dark:text-white">
          {props.data.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.data.title}
        </span>
        <div className="flex mt-4 md:mt-6 px-5">
          <p className="text-white">{props.data.responsibilities}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
