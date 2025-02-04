"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailPage = () => {
  interface Doctor {
    id: string
    name: string;
    title: string;
  }
  const [doctor, setDoctor] = useState<Doctor[]>([]);

  const { id: productId } = useParams();

  
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [productId]);

  const doctorInfo = doctor?.find((doc: Doctor) => doc.id.toString() === productId)
  console.log(doctorInfo)
  if(!doctorInfo) {
    return <h2>have a some issus for the data !</h2>
  }

  return (
    <div>
      <h1>Details page{productId}</h1>
      <h1>{doctorInfo.name}</h1>
    </div>
  );
};

export default DetailPage;
