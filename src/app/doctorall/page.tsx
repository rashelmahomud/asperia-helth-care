"use client";
import Image from "next/image";
import { GetDoctorAll } from "../lib/api";
import Link from "next/link";

const Doctorall = () => {
  const doctorall = GetDoctorAll();
  return (
    <div>
      <div className="relative text-center my-10 lg:p-32">
        <div className="absolute inset-0 bg-[url('/asperia/team-one-shape-1.png')] bg-no-repeat bg-right-top opacity-10 animate-custom-bounce"></div>
        <div className="relative z-10">
          <h1 className="lg:text-4xl my-10 font-semibold text-gray-700">
            Meet Our Specialist <br /> Doctors
          </h1>
          <div className="grid lg:grid-cols-4 my-5 lg:gap-32">
            {doctorall?.map((doctor, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  className="rounded-lg"
                  src={doctor.image || ''}
                  width={200}
                  height={200}
                  alt="doctor image"
                />
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
