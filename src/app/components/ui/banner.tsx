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

  

  return (
    <div className="bg-gray-300">
      <div className="flex flex-row">
        <div className="basis-1/8 ">
          <div className="bg-[url('/asperia/main-slider-shape-1.png')] h-full bg-no-repeat animate-custom-bounce duration-300 ">
            <div className="lg:p-16 bg-gray-300 h-full opacity-50 z-[-1]">
              <FontAwesomeIcon
                onClick={nextSlide}
                icon={faArrowRight}
                className="border-4 border-gray-700 text-gray-700 hover:border-gray-500 hover:text-gray-500 translate duration-300 text-white p-3 rounded-full mr-5 my-5 mt-24"
              />
              <FontAwesomeIcon
                onClick={prevSlide}
                icon={faArrowLeft}
                className="border-4 border-gray-700 text-gray-700 hover:border-gray-500 hover:text-gray-500 translate duration-300 text-white p-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/7">
          <div className="z-10 ml-10 absolute flex gap-5 justify-center items-center lg:mt-32 mt-10">
            <div className="">
              <h2 className="text-5xl font-semibold leading-[60px]">
                For The Frist Time <br /> In Chaittagon
              </h2>
              <h1 className="text-4xl font-semibold mb-3 my-3">
                <span className="font-bold text-primary">
                  Supper Specialities
                </span>{" "}
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
    </div>
  );
};

export default Banner;

