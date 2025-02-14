"use client";
import Image from "next/image";
import { GetDoctorAll } from "../lib/api";
import Link from "next/link";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/shared/Button";

const Doctorall = () => {
  const doctorall = GetDoctorAll();
  return (
    <div>
      <div className="bg-[url('/asperia/page-header-bg3.jpg')]  bg-no-repeat bg-cover lg:p-32">
        <div className="flex gap-5 font-semibold text-gray-700">
          <Link href={"/"}>HOME</Link>/<Link href={"/doctorall"}>DOCTOR</Link>
        </div>
        <h2 className="text-5xl font-semibold text-gray-800">Doctors</h2>
      </div>
      <div className="relative text-center lg:p-32">
        <div className="absolute inset-0 bg-[url('/asperia/team-one-shape-1.png')] bg-no-repeat bg-right-top opacity-10 animate-custom-bounce"></div>
        <div className="relative z-10">
          <form className="flex gap-5 ml-20 p-5">
            <div className=" col-span-full flex items-center gap-5">
              <label className="bg-gray-100 p-3 rounded-lg text-gray-500">
                search by doctors name
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Filter by department</option>
                <option value="US">
                  Dr Taif Mahmud (Orthopedic & Trauma Surgeon)
                </option>
                <option value="CA">
                  Mohammed Selim (Orthopedic & Trauma Surgeon)
                </option>
                <option value="FR">
                  Dr. Jabed Jahangir Tuhin (Orthopedic & Trauma Surgeon)
                </option>
                <option value="DE">
                  Dr. Mohammad Akram Hossain (Cardiology)
                </option>
                <option value="DS">Dr. Md. Shakhawat Ullah (Cardiology)</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 px-5 rounded-lg hover:bg-blue-600"
            >
              Search
            </button>
          </form>

          <div className="grid lg:grid-cols-4 my-5 lg:gap-20">
            {doctorall?.map((doctor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative group">
                  {/* Animated Dotted Border */}
                  <div
                    className="absolute inset-0 border-4 border-dotted border-gray-400 -rotate-12 scale-95 rounded-lg z-[-1] 
                transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:border-gray-200 group-hover:shadow-xl"
                  ></div>

                  {/* Hover Overlay with Gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-0 
                    group-hover:opacity-60 transition-opacity duration-500 rounded-lg z-10"
                  ></div>

                  {/* Image Container with 3D Lift */}
                  <div
                    className="relative overflow-hidden rounded-lg transition-all duration-500 
                    group-hover:shadow-2xl group-hover:shadow-gray-700 group-hover:scale-105 group-hover:rotate-2"
                  >
                    <Image
                      className="rounded-lg transition-all duration-500 group-hover:scale-110"
                      src={doctor.image || ""}
                      width={200}
                      height={200}
                      alt="doctor image"
                    />
                  </div>
                </div>
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
      <div className="bg-[url('/asperia/cta-one-img.png')] bg-no-repeat bg-[#16243d] border-4 border-iconBg lg:mx-32 p-5 m-10 rounded-lg text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)] drop-shadow-2xl">
      <div className="flex justify-between gap-10 items-center p-10 justify-between ">  
        <h1 className="text-4xl font-semibold ">Make appointment instantly </h1>
        <div className="order-last"><Button>LIVE CHAT</Button></div>
        <div className="flex items-center gap-3 text-xl ml-28">
          <Link href={'/'}><FontAwesomeIcon icon={faPhoneVolume} className="w-8 h-8 text-iconBg border rounded-full p-3 hover:text-iconBg hover:bg-primary border-4"/></Link>

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

export default Doctorall;
