import ForDoctor from "./components/ui/forDoctor";
import Oncology from "./components/ui/oncology";
import OncologyTwo from "./components/ui/oncologyTwo";

export default function Home() {
  return (
   <div className="bg-gray-50">
    <Oncology />
    <OncologyTwo />
  <ForDoctor />
   </div>
  );
}
