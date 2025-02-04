"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Doctors = () => {
  interface Doctor {
    id: string
    name: string;
    title: string;
  }
  const [data, setData] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="text-center my-10">
      <h1 className="text-4xl">Meet Our Specialist Doctors</h1>
      <div className="grid grid-cols-3 my-5">
        {data.map((doctor, index) => (
          <div key={index}>
           <Link href={`/doctors/${doctor.id}`}> <h2>{doctor.name}</h2></Link>
            <p>{doctor.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
