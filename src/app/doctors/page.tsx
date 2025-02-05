"use client";
import Link from "next/link";
import { GetDoctor } from "../lib/api";

const Doctors = () => {
  const doctors = GetDoctor();
  if (!doctors) {
    return <p className="text-center text-lg">Loading data ...</p>;
  }
  if (doctors.length === 0) {
    return <p className="text-center text-lg text-red-500 font-semibold my-2">Loading data ...</p>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-4xl">Meet Our Specialist Doctors</h1>
      <div className="grid grid-cols-3 my-5">
        {doctors.map((doctor, index) => (
          <div key={index}>
            <Link href={`/doctors/${doctor.id}`}>
              <h2>{doctor.name}</h2>
            </Link>
            <p>{doctor.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
