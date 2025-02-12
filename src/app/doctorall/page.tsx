"use client";
import Image from "next/image";
import { GetDoctorAll } from "../lib/api";
import Link from "next/link";

const Doctorall = () => {
  const doctorall = GetDoctorAll();
  return (
    <div>
      <div className="bg-[url('/asperia/page-header-bg3.jpg')]  bg-no-repeat bg-cover lg:p-32">
        <div className="flex gap-5 font-semibold text-gray-700">
        <Link href={'/'} >HOME</Link>/
        <Link href={'/doctorall'}>DOCTOR</Link>
        </div>
        <h2 className="text-5xl font-semibold text-gray-800">Doctors</h2>
      </div>
      <div className="relative text-center my-10 lg:p-32">
        <div className="absolute inset-0 bg-[url('/asperia/team-one-shape-1.png')] bg-no-repeat bg-right-top opacity-10 animate-custom-bounce"></div>
        <div className="relative z-10">
          <h1 className="lg:text-4xl my-10 font-semibold text-gray-700">
            Meet Our Specialist <br /> Doctors
          </h1>
          <div className="grid lg:grid-cols-4 my-5 lg:gap-20">
            {doctorall?.map((doctor, index) => (
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
                      src={doctor.image || ""}
                      width={200}
                      height={200}
                      alt="doctor image"
                    />
                  </div>
                </div>
                <div className="mt-6 lg:p-4 text-left">
                  <Link href={`/doctorall/${doctor.id}`}>
                    <h2 className="text-2xl font-semibold text-gray-700">
                      {doctor.name}
                    </h2>
                  </Link>
                  <p className="text-primary">{doctor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctorall;
