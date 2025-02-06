"use client";
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
  console.log(doctorInfo);

  if (!doctorInfo) {
    return <p>Loading data .....</p>;
  }
  if (!doctorInfo) {
    return <h2>have a some issus for the data !</h2>;
  }

  return (
    <div className="flex gap-10 my-10">
      <div className="bg-[url('/asperia/get-insuracne-two-shape-1.png')]">
        <Image
          className="rounded-full ml-16 p-10"
          src={"/asperia/about-two-img-1.jpg"}
          width={600}
          height={600}
          alt="doctor image"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-[url('/asperia/get-insuracne-two-shape-3.png')] bg-no-repeat bg-right-top opacity-10 animate-custom-bounce"></div>
        <div className="relative p-10">
          <h1 className="text-5xl text-gray-700 font-semibold">
            {doctorInfo.name}
          </h1>
          <h3 className="text-xl font-semibold my-2">
            মেডিসিন, লিভার ও পরিপাকতন্ত্র বিশেষজ্ঞ
          </h3>
          <h2>{doctorInfo.title}</h2>
          <h4 className="text-xl">যেসব রোগের চিকিৎসা করা হয়</h4>
          <ul className="my-3">
            {doctorInfo.desc.map((des, index) => (
              <li key={index} className="my-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-3" />
                {des}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
