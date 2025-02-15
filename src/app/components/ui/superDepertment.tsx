"use client";
import { GetDepertmentData } from "@/app/lib/api";
import Image from "next/image";
export interface DepertmentType {
  id: string;
  name: string;
  image: string;
  dec: string;
}
const Depertment = () => {
  const data = GetDepertmentData();
  return (
    <div className="lg:px-32 my-10">
      <h1 className=" text-5xl font-semibold my-10">Super Specialty <br /> Departments</h1>
      <div className="grid lg:grid-cols-4 gap-10 ">
        {data.map((depertment) => (
          <div key={depertment.id} className="flex flex-col mx-auto border rounded-lg lg:p-16">
            <Image src={depertment.image} width={100} height={100} alt="dpertment image" className="p-5 mx-auto border rounded-full bg-gray-200 mb-2 hover:bg-primary"/>
            <span className="border-b-4 w-10 mx-auto"></span>
            <h1 className="text-2xl font-semibold mx-auto">{depertment.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Depertment;
