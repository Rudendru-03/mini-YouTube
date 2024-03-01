import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill(10)
        .map((e, index) => {
          return (
            <div key={index}>
              <div className="bg-gray-300 m-2 p-2 w-60 h-60 rounded-lg"></div>
              <div className="flex">
                <div className="w-7 h-7 rounded-full bg-gray-300 m-3 p-1"></div>
                <div className="flex-wrap">
                  <div className="w-48 h-4 rounded-lg bg-gray-300 p-2 my-1"></div>
                  <div className="w-44 h-4 rounded-lg bg-gray-300 p-2 "></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
