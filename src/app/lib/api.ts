import { useEffect, useState } from "react";

export const GetDoctor = () => {
    interface Doctor {
        id: string
        name: string;
        title: string;
        image: string;
        desc: string[],
      }
  const [data, setData] = useState<Doctor[]>([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};
