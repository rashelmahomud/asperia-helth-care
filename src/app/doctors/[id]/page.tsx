"use client";
import { GetDoctor } from "@/app/lib/api";
import { useParams } from "next/navigation";

const DetailPage = () => {
  const { id: productId } = useParams();
  const doctors = GetDoctor(); //api data
  const doctorInfo = doctors?.find((doctor) => doctor.id.toString() === productId);
  
  if(!doctorInfo) {
    return <p>Loading data .....</p>
  }
  if (!doctorInfo) {
    return <h2>have a some issus for the data !</h2>;
  }


  return (
    <div>
      <h1>Details page{productId}</h1>
      <h1>{doctorInfo.name}</h1>
    </div>
  );
};

export default DetailPage;
