"use client";
import Button from "@/app/components/shared/Button";
import { GetDoctorAll } from "@/app/lib/api";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const DoctorallDetails = () => {
  const { id: doctorId } = useParams();

  const doctorAll = GetDoctorAll();

  const data = doctorAll?.find((doctor) => doctor.id.toString() === doctorId);

  return (
    <div>
      <div className="flex gap-10">
        <div>
          <Image
            className="rounded-full ml-16 p-10"
            src={data?.image || "/asperia/2088.jpg"}
            width={600}
            height={600}
            alt="doctor image"
          />
        </div>

        <div className="">
          <div className=""></div>
          <div className="relative p-10">
            <h1 className="text-5xl text-gray-700 font-semibold">
              {data?.name}
            </h1>
            <h3 className="text-xl font-semibold my-2">
              মেডিসিন, লিভার ও পরিপাকতন্ত্র বিশেষজ্ঞ
            </h3>
            <h2>{data?.title}</h2>
            <h4 className="text-xl">যেসব রোগের চিকিৎসা করা হয়</h4>
          </div>
        </div>
      </div>

      <div className="bg-[#16243d] border-4 border-iconBg lg:mx-32 p-5 m-10 rounded-lg text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)] drop-shadow-2xl relative">
      
      <div className="absolute inset-0 opacity-10  bg-[url('/asperia/cta-one-img.png')] bg-cover bg-center">
        </div>

        <div className="flex justify-between gap-10 items-center p-10 justify-between ">
          <h1 className="text-4xl font-semibold ">
            Make appointment instantly{" "}
          </h1>
          <div className="order-last">
            <Button>LIVE CHAT</Button>
          </div>
          <div className="flex items-center gap-3 text-xl ml-28">
            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="w-8 h-8 text-iconBg border rounded-full p-3 hover:text-iconBg hover:bg-primary border-4"
              />
            </Link>

            <div className="">
              <p className="font-semibold">+8801835199061</p>

              <span className="text-sm">hotline number</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DoctorallDetails;
