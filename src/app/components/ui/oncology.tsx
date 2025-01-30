import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "../shared/Button";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Oncology = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:p-32 p-3 bg-gray-100 justify-center mt-10">
      <div className="relative">
        <Image
          className="rounded-lg ml-10 mt-12"
          src={"/asperia/about-one-shape-1.jpg"}
          width={500}
          height={500}
          alt="oncology image"
        />
        <Image
          className="rounded-lg absolute top-0 left-0 z-0"
          src={"/asperia/chemo.jpg"}
          width={500}
          height={500}
          alt="oncology image"
        />
      </div>

      <div className="bg[url('/public/asperia/')] max-w-2xl">
        <h3 className="text-2xl font-semibold text-gray-800">
          Specialized Oncology Services
        </h3>
        <h1
          className="text-5xl tracking-wide
 font-semibold text-gray-700 my-2"
        >
          World class cancer diagnosis & management in Chattogram
        </h1>
        <p className="text-xl text-gray-600 my-3">
          Asperia healthcare ltd has introduced most advance cancer screening
          and management in Chattogram. Our oncology center provides
          comprehensive and super specialized, modern diagnostic services,
          treatment, and care for cancer.
        </p>
        <ul>
          <li className="flex items-center gap-2 font-semibold text-gray-700">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-4 h-4 text-white bg-iconBg rounded-full"
            />
            High accuracy investigation in molecular & histopathology lab
          </li>
          <li className="flex items-center gap-2 font-semibold text-gray-700">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-4 h-4 text-white bg-iconBg rounded-full"
            />
            Devoted team of specialist doctors and nurses.
          </li>
          <li className="flex items-center gap-2 font-semibold text-gray-700">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-4 h-4 text-white bg-iconBg rounded-full"
            />
            Affordable day care packages
          </li>
        </ul>
        <div className="flex my-3 gap-5">
          <Button>discover more</Button>

          <div className="flex gap-3 text-xl order-last ">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="w-8 text-iconBg"
            />

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

export default Oncology;
