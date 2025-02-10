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
    <div className="relative text-center my-10 lg:p-32">
      <div className="absolute inset-0 bg-[url('/asperia/team-one-shape-1.png')] bg-no-repeat bg-right-top opacity-30 animate-custom-bounce"></div>
      <div className="relative z-10">
        <h1 className="lg:text-4xl my-10 font-semibold text-gray-700">
          Meet Our Specialist <br /> Doctors
        </h1>
        <div className="grid lg:grid-cols-4 my-5 lg:gap-32">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                <Image
                  className="rounded-lg z-10"
                  src={doctor.image}
                  width={200}
                  height={200}
                  alt="doctor image"
                />
                <div className="absolute inset-0 border-4 border-dotted -rotate-12 hover:border-iconBg rounded-lg"></div>
              </div>
              <div className="mt-6 lg:p-4 text-left">
                <Link href={`/doctors/${doctor.id}`}>
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
  );
};

export default Doctors;
