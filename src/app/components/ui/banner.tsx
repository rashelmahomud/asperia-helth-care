"use client";
import Image from "next/image";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = ["/asperia/main-slider-1-1.jpg", "/asperia/main-slider-1-3.jpg"];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  interface ItemsType {
    text: string;
    src: string;
  }

  const items: ItemsType[] = [
    { src: "/asperia/lab.png", text: "Specialized Cancer Management" },
    { src: "/asperia/micro.png", text: "High Accuracy Diagnostics" },
    { src: "/asperia/doctor.png", text: "Specialist Consultants" },
  ];

  return (
    <div className="bg-gray-300 mb-32 pt-[100px]">
      <div className="flex flex-row overflow-hidden">
        <div className="basis-1/8 ">
          <div className="bg-[url('/asperia/main-slider-shape-1.png')] h-full bg-no-repeat animate-custom-bounce duration-300">
            <div className="lg:p-16 px-3 bg-gray-300 h-full opacity-50 z-[-1]">
              <FontAwesomeIcon
                onClick={nextSlide}
                icon={faArrowRight}
                className="border-4 border-primary text-gray-700 hover:border-gray-500 hover:text-gray-500 translate duration-300 text-primary p-3 rounded-full mr-5 my-5 mt-24"
              />
              <FontAwesomeIcon
                onClick={prevSlide}
                icon={faArrowLeft}
                className="border-4 border-primary text-gray-700 hover:border-gray-500 hover:text-gray-500 translate duration-300 text-primary p-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/7">
          <div className="z-1 ml-10 absolute flex gap-5 justify-center items-center lg:mt-32 mt-10">
            <div className="">
              <div className="bg-gradient-to-r from-primary via-inconBg to-green-500 my-5 lg:w-72 h-3 rounded-full z-[-1] "></div>

              <h2 className="lg:text-5xl text-2xl font-semibold leading-[60px] text-gray-800">
                For The Frist Time <br /> In Chaittagon
              </h2>
              <h1 className="lg:text-5xl text-2xl font-semibold mb-3 my-3 text-gray-800 pb-3">
                <span className="font-bold text-primary">
                  Supper Specialities
                </span>
                Laboraties
              </h1>
              <Button>Let&apos;s Get Started</Button>
            </div>
          </div>
          <Image
            src={images[index]}
            className="h-[550px] w-screen"
            // className="h-[550px] w-4/5"
            width={500}
            height={500}
            alt="banner"
          />
        </div>
      </div>
      <div className="lg:flex justify-center gap-10 lg:px-32 p-3 absolute -mt-16">
        {items.map((item, index) => (
          <div key={index} className="relative overflow-hidden group">
            <div className="flex gap-3 items-center dark:bg-dark dark:text-white bg-white rounded-md p-8 w-96 shadow-md">
              <Image
                src={item.src}
                width={60}
                height={60}
                alt="icon"
                className="bg-gray-200 rounded-full m-2 p-3"
              />
              <h2 className="text-2xl font-bold text-center text-start">
                {item.text}
              </h2>
            </div>
            <div className="group-hover:bg-primary group-hover:-translate-x-full duration-[1.5s] hover:text-white w-full h-full absolute top-0 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
