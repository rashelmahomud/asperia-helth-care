import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  interface ServiceType {
    title: string;
    image: string;
  }

  const services: ServiceType[] = [
    { title: "Pre Screening", image: "/asperia/pre.jpg" },
    { title: "Screening", image: "/asperia/screening.jpg" },
    { title: "Diagnosis", image: "/asperia/diagnosis.jpg" },
    { title: "Counselling", image: "/asperia/councelling.jpg" },
    { title: "Chemotherapy & Daycare", image: "/asperia/daycare.jpg" },
    { title: "Rehabilitation", image: "/asperia/rehab.jpg" },
  ];

  return (
    <div className="lg:px-32 p-5 bg-gray-200">
      <h1 className="lg:text-5xl text-3xl font-semibold text-gray-700">
        Available Services
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-5">
        {services.map((service) => (
          <div key={service.title} className="flex items-center gap-5 bg-white p-5 rounded-lg">
            <Image
              src={service.image}
              width={100}
              height={100}
              alt="services"
            />
            <h3 className="text-2xl font-semibold text-gray-800 w-full"><Link href={'/apoinment'}>{service.title}</Link></h3>
            <Link href={'/apoinment'}><FontAwesomeIcon icon={faChevronRight}/></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
