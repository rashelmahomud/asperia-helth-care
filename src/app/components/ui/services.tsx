"use client";
import { GetServices } from "@/app/lib/api";

const Services = () => {
  const services = GetServices();
  return (
    <div className="lg:px-32 mx-auto my-10 dark:bg-dark dark:text-white">
      <div className="grid lg:grid-cols-2 p-2 gap-10 justify-between">
        <div className="">
          <h3 className="uppercase text-xl font-semibold mb-4">
            First time in Chattogram
          </h3>
          <h1 className="text-5xl font-bold text-gray-700 dark:text-white">
            Super Speciality Services
          </h1>
        </div>
        <div className="">
          <p className="text-xl text-gray-500 dark:text-white p-5">
            High accuracy diagnosis, consultation and diseases management
            powered by state of the art molecular lab and histopathology center.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 p-5">
        {services.map((service) => (
          <div key={service.id} className="border p-5 rounded-md">
            <span className="border-b-4 w-10 mx-auto border-red-500"></span>
            <h1 className="text-xl font-semibold">{service.name}</h1>
            <p className="text-gray-500 dark:text-white mt-2">{service.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
