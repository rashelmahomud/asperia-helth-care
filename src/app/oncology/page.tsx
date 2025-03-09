import Link from "next/link";
import React from "react";
import LiveChat from "../components/shared/LiveChat";
import Service from "../service/page";

const OncologyPage = () => {
  return (
    <div>
      <div className="bg-[url('/asperia/onco.jpg')]  bg-no-repeat bg-cover lg:h-96 lg:p-32">
        <div className="flex gap-5 font-semibold text-gray-700">
          <Link href={"/"}>HOME</Link>/
          <Link href={"/specialties"} className="uppercase">
            SERVICES
          </Link>
        </div>
        <h2 className="text-5xl font-semibold text-gray-800">Oncology</h2>
      </div>
      <div>
        <p className="lg:p-32 text-gray-600">
          Asperia healthcare ltd has added a new dimension in healthcare sector
          of Bangladesh by introducing most advance cancer screening and
          management. Our oncology center provides comprehensive and super
          specialized, modern diagnostic services, treatment, and care for
          cancer. Our oncology solutions include pre-screening, screening,
          diagnosis, councelling, rehabilitation, chemotherapy and day care. We
          believe that every cancer case is different and therefore, we follow a
          personalized approach to provide treatment to our cancer patients. At
          Asperia, we treat various types of cancers with the utmost compassion
          and high precision. 
          < br/>
          < br/>
          < br/>
          Asperia Healthcare Ltd stands at the forefront of
          cancer management in Chattogram, offering a comprehensive range of
          oncology services. Our commitment to excellence is evident through our
          best-in-class pre-screening, screening, diagnosis, counseling,
          rehabilitation, chemotherapy, and day care facilities. < br/>  < br/> At Asperia, we
          prioritize precision and compassion in cancer care, supported by the
          region’s first histopathology lab in Chattogram. This facility enables
          us to deliver accurate diagnostic insights crucial for effective
          treatment planning. Our dedication to advancing cancer care extends to
          the first dedicated chemotherapy center in Chattogram, ensuring that
          patients receive specialized treatment in a comfortable environment
          tailored to their needs. 
          < br/> < br/>
           Experience unparalleled oncology services at
          Asperia Healthcare Ltd, where expertise meets innovation to deliver
          exceptional care and outcomes for every patient. < br/> < br/> Health packages < br/>
          Discover comprehensive health checkup packages tailored to meet the
          diverse needs of patients across all age groups and categories at
          Asperia Health Care Ltd in Chattogram. We are committed to offering
          the best and most affordable health checkups in the city, ensuring
          access to quality healthcare for everyone.
        </p>
      </div>
      <Service />
      <LiveChat />
    </div>
  );
};

export default OncologyPage;
