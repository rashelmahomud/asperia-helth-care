"use client";
import Link from "next/link";
import { GetDoctor } from "../lib/api";
import Image from "next/image";

const Doctors = () => {
  const doctors = GetDoctor();
  if (!doctors) {
    return <p className="text-center text-lg">Loading data ...</p>;
  }
  if (doctors.length === 0) {
    return (
      <p className="text-center text-lg text-red-500 font-semibold my-2">
        Loading data ...
      </p>
    );
  }

  return (
    <div className="relative text-center lg:my-10 my-3 lg:p-32 p-3">
      <div className="absolute inset-0 bg-[url('/asperia/team-one-shape-1.png')] bg-no-repeat bg-right-top opacity-30 animate-custom-bounce duration-700"></div>
      <div className="relative z-10">
        <h1 className="lg:text-4xl text-2xl my-10 font-semibold text-gray-700 dark:text-white">
          Meet Our Specialist <br /> Doctors
        </h1>
        <div className="grid lg:grid-cols-4 my-5 lg:gap-32 gap-10">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative group">
                {/* Animated Dotted Border */}
                <div
                  className="absolute inset-0 border-4 border-dotted border-gray-400 -rotate-12 scale-95 rounded-lg z-[-1] 
transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:border-gray-200 group-hover:shadow-xl"
                ></div>

                {/* Hover Overlay with Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-0 
    group-hover:opacity-60 transition-opacity duration-500 rounded-lg z-10"
                ></div>

                {/* Image Container with 3D Lift */}
                <div
                  className="relative overflow-hidden rounded-lg transition-all duration-500 
    group-hover:shadow-2xl group-hover:shadow-gray-700 group-hover:scale-105 group-hover:rotate-2"
                >
                  <Image
                    className="rounded-lg transition-all duration-500 group-hover:scale-110"
                    src={doctor.image}
                    width={200}
                    height={200}
                    alt="doctor image"
                  />
                </div>
              </div>

              <div className="mt-6 lg:p-4 text-left">
                <Link href={`/doctors/${doctor.id}`}>
                  <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
                    {doctor.name}
                  </h2>
                </Link>
                <p className="text-primary dark:text-white">{doctor.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
