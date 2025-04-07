import React from "react";
import Button from "../shared/Button";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const ForDoctor = () => {
  return (
    <div className="lg:px-32">
      <div className="lg:flex justify-between bg-primary dark:bg-medium gap-20 lg:p-10 p-3 rounded-t-lg relative overflow-hidden">
        <div className="flex items-center gap-5 lg:mb-0 mb-10">
          <div className="">
            <FontAwesomeIcon
            icon={faBookOpenReader}
            className="w-16 h-16 text-white"
          />
          <Image src={'/asperia/tracking-shape-3.png'} width={200} height={200} alt="image" className="absolute top-15 left-20 opacity-70 ml-10 z-2  animate-pulse" />
          <Image src={'/asperia/tracking-shape-3.png'} width={200} height={200} alt="image" className="absolute top-20 opacity-80 z-2 animate-ping"/>
          
          </div>
          <div>
            <h3 className="text-2xl text-gray-200 z-5">LOCKING FOR A DOCTOR</h3>
            <h1 className="lg:text-5xl text-2xl font-semibold text-white">
              Choose from the best in Chattogram
            </h1>
          </div>
        </div>
        <div><Button foot>Contact</Button></div>
        <Image src={'/asperia/tracking-shape-3.png'} width={200} height={200} alt="image" className="absolute top-15 right-0 opacity-40 ml-10 z-2 animate-spin"/>
          <Image src={'/asperia/tracking-shape-3.png'} width={200} height={200} alt="image" className="absolute top-20 right-10 opacity-80 z-2 animate-ping z-10"/>
      </div>
    </div>
  );
};

export default ForDoctor;
