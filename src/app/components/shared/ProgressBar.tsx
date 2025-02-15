import React from "react";

type progressType = {
    progress: number
}

const ProgressBar:React.FC<progressType> = ({ progress }) => {
  return (
    <div className="w-full max-w-md">
      <p className="text-end mt-2 text-gray-700">{progress}%</p>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div
          className="bg-blue-500 h-full h-3 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
          
        ></div>
      </div>
      
    </div>
  );
};

export default ProgressBar;
