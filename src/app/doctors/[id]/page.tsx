"use client";
import Appoinment from "@/app/components/shared/Appoinment";
import { GetDoctor } from "@/app/lib/api";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useParams } from "next/navigation";

const DetailPage = () => {
  const { id: productId } = useParams();
  const doctors = GetDoctor(); //api data
  const doctorInfo = doctors?.find(
    (doctor) => doctor.id.toString() === productId
  );

  if (!doctorInfo) {
    return <p>Loading data .....</p>;
  }
  if (!doctorInfo) {
    return <h2>have a some issus for the data !</h2>;
  }

  return (
    <div className="">

      <div className="absolute inset-0 bg-[url('/asperia/get-insuracne-two-shape-3.png')] bg-no-repeat opacity-10 animate-custom-bounce bg-right-top "></div>

      <div className="lg:flex lg:gap-40 gap-10 py-24">
        <div className="bg-[url('/asperia/get-insuracne-two-shape-1.png')] bg-no-repeat">
          <Image
            className="rounded-full lg:ml-16 p-10"
            src={"/asperia/about-two-img-1.jpg"}
            width={500}
            height={400}
            alt="doctor image"
          />
        </div>

        <div className="lg:p-20 p-3">
          <div className="">
            <h1 className="lg:text-5xl text-2xl text-gray-700 dark:text-white font-semibold">
              {doctorInfo.name}
            </h1>
            <h3 className="text-xl font-semibold my-2">
              মেডিসিন, লিভার ও পরিপাকতন্ত্র বিশেষজ্ঞ
            </h3>
            <h2>{doctorInfo.title}</h2>
            <h4 className="text-xl">যেসব রোগের চিকিৎসা করা হয়</h4>
            <ul className="grid lg:grid-cols-2 grid-cols-1 gap-2 my-2">
              {doctorInfo?.desc?.map((des, index) => (
                <li key={index} className="my-2 text-gray-700 dark:text-white">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mr-3 text-iconBg hover:text-primary"
                  />
                  {des}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Appoinment />
    </div>
  );
};

export default DetailPage;
