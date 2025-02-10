"use client";
import { GetDoctorAll } from "@/app/lib/api";
import Image from "next/image";
import { useParams } from "next/navigation";

const DoctorallDetails = () => {
  const { id: doctorId } = useParams();

  const doctorAll = GetDoctorAll();

  const data = doctorAll?.find((doctor) => doctor.id.toString() === doctorId);

  return (
    <div className="flex gap-10">
      <div >
        <Image
          className="rounded-full ml-16 p-10"
          src={data?.image || '/asperia/2088.jpg'}
          width={600}
          height={600}
          alt="doctor image"
        />
      </div>

      <div className="">
        <div className=""></div>
        <div className="relative p-10">
          <h1 className="text-5xl text-gray-700 font-semibold">{data?.name}</h1>
          <h3 className="text-xl font-semibold my-2">
            মেডিসিন, লিভার ও পরিপাকতন্ত্র বিশেষজ্ঞ
          </h3>
          <h2>{data?.title}</h2>
          <h4 className="text-xl">যেসব রোগের চিকিৎসা করা হয়</h4>
        </div>
      </div>
    </div>
  );
};

export default DoctorallDetails;
