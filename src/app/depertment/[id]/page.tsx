"use client";
import LiveChat from "@/app/components/shared/LiveChat";
import { GetDepertmentData } from "@/app/lib/api";

import Link from "next/link";
import { useParams } from "next/navigation";

const DepertmentId = () => {
  const { id } = useParams();

  const depertmentDetails = GetDepertmentData();

  const depertments = depertmentDetails.find(
    (depertmentDetail) => depertmentDetail.id.toString() === id
  );

  return (
    <div>
      <div
        className={`bg-no-repeat bg-center bg-cover lg:p-32`}
        style={{ backgroundImage: `url(${depertments?.image})` }}
      >
        <div className="flex gap-5 font-semibold text-gray-700">
          <Link href={"/"}>HOME</Link>/<Link href={"/doctorall"}>SERVICES</Link>
        </div>
        <h2 className="text-5xl font-semibold text-gray-800">
          {depertments?.name}
        </h2>
      </div>
      <div className="lg:p-32">
        <h1 className="font-semibold text-5xl mb-3 text-gray-700">About</h1>
        <p className="text-gray-500">{depertments?.dec}</p>
        <h2 className="text-5xl font-semibold my-5 text-gray-700">
          Consultation & Appointment
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vitae
          consectetur deleniti reiciendis ex iure nesciunt illo, autem ullam
          ducimus a maiores cumque praesentium quae aut impedit earum labore,
          exercitationem adipisci, corporis quia? Sequi, placeat molestias
          necessitatibus incidunt dolores accusamus dolore consectetur
          architecto quis sed recusandae cumque repudiandae, quaerat aspernatur?
        </p>
      </div>
      <LiveChat />
    </div>
  );
};

export default DepertmentId;
