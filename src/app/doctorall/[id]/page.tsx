"use client";
import LiveChat from "@/app/components/shared/LiveChat";
import Progress from "@/app/components/shared/Progress";
import { GetDoctorAll } from "@/app/lib/api";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const DoctorallDetails = () => {
  const { id: doctorId } = useParams();

  const doctorAll = GetDoctorAll();

  const data = doctorAll?.find((doctor) => doctor.id.toString() === doctorId);

  return (
    <div>
      <div className="bg-[url('/asperia/page-header-bg3.jpg')]  bg-no-repeat bg-cover h-32 lg:h-96 lg:p-32 mb-10">
        <div className="flex gap-5 font-semibold text-gray-700">
          <Link href={"/"}>HOME</Link>/<Link href={"/doctorall"}>DOCTOR</Link>
        </div>
        <h2 className="lg:text-5xl font-semibold text-gray-800">Profile</h2>
      </div>
      <div className="lg:flex gap-10">
        <div>
          <Image
            className="rounded-xl ml-16 p-10"
            src={data?.image || "/asperia/2088.jpg"}
            width={600}
            height={600}
            alt="doctor image"
          />
        </div>

        <div className="">
          <div className=""></div>
          <div className="relative p-10 mx-auto">
            <h1 className="lg:text-5xl text-2xl text-gray-700 font-semibold">
              {data?.name}
            </h1>
            <h3 className="text-sm font-semibold my-2">
              মেডিসিন, লিভার ও পরিপাকতন্ত্র বিশেষজ্ঞ
            </h3>
            <h2 className="text-sm">{data?.title}</h2>
            <h4 className="text-sm">যেসব রোগের চিকিৎসা করা হয়</h4>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center lg:px-32 my-10">
        <div>
          <h1 className="lg:text-5xl font-bold text-gray-700 mb-3 text-center">
            Personal Experience
          </h1>
          <p className="text-xl p-3 text-gray-700">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isnt anything embarrassing hidden.
          </p>
        </div>
        <div>
          <Progress />
        </div>
      </div>

      <LiveChat />
    </div>
  );
};

export default DoctorallDetails;
