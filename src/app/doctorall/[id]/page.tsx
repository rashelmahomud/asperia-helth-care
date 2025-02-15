"use client";
import Button from "@/app/components/shared/Button";
import Progress from "@/app/components/shared/Progress";
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
      <div className="bg-[url('/asperia/page-header-bg3.jpg')]  bg-no-repeat bg-cover lg:p-32 mb-10">
        <div className="flex gap-5 font-semibold text-gray-700">
          <Link href={"/"}>HOME</Link>/<Link href={"/doctorall"}>DOCTOR</Link>
        </div>
        <h2 className="lg:text-5xl font-semibold text-gray-800">Profile</h2>
      </div>
      <div className="flex gap-10">
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
          <div className="relative p-10">
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
          <h1 className="lg:text-5xl font-bold text-gray-700 mb-3">Personal Experience</h1>
          <p className="text-xl p-2 text-gray-700">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isnt anything embarrassing hidden.
          </p>
        </div>
        <div>
        <Progress />
        </div>
      </div>

      <div className="bg-[#16243d] border-4 border-iconBg lg:mx-32 p-5 m-10 rounded-lg text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)] drop-shadow-2xl relative">
        <div className="absolute inset-0 opacity-10  bg-[url('/asperia/cta-one-img.png')] bg-cover bg-center"></div>

        <div className="flex justify-between gap-10 items-center p-10 justify-between ">
          <h1 className="lg:text-4xl font-semibold ">
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
