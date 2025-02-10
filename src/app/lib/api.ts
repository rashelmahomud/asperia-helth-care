'use client'
import { useEffect, useState } from "react";

export const GetDoctor = () => {
    interface Doctor {
        id: string
        name: string;
        title: string;
        image: string;
        desc?: string[],
      }
  const [data, setData] = useState<Doctor[]>([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};
  export interface DoctorAll {
    id:string;
    name:string;
    title: string;
    image?:string;
  }

export const GetDoctorAll = () => {


  const [doctor,setDoctor] = useState<DoctorAll[]>([])

  useEffect(() => {
    fetch("/doctorall.json")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  return doctor;
}
