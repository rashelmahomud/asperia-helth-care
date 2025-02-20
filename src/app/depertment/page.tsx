"use client";
import { GetDepertmentData } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";
export interface DepertmentType {
  id: string;
  name: string;
  image: string;
  dec: string;
}

const Depertment = () => {
  const depertments = GetDepertmentData();
  return (
    <div className="lg:px-32 my-10">
      <h1 className=" text-5xl font-semibold my-10">
        Super Specialty <br /> Departments
      </h1>

      <div className="grid lg:grid-cols-4 gap-10 ">
        {depertments.map((depertment) => (
          <div
            key={depertment.id}
            className="flex flex-col mx-auto border rounded-lg lg:p-16 hover:-translate-y-3 duration-300"
          >
            <div className="relative group">
              <Image
                src={depertment.image}
                width={100}
                height={100}
                alt="dpertment image"
                className="relative p-5 mx-auto border border-primary rounded-full mb-2 relative "
              />
              <div className="w-0 h-0  left-1 mx-auto right-0 top-0 rounded-full z-[-10] absolute group-hover:w-24 group-hover:h-24 group-hover:bg-primary duration-300"></div>
            </div>

            <span className="border-b-4 w-10 mx-auto"></span>
            <Link href={`/depertment/${depertment.id}`}>
              <h1 className="text-2xl font-semibold text-center">
                {depertment.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};                                                                                              

export default Depertment;
