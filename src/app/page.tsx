import ForDoctor from "./components/ui/forDoctor";
import Oncology from "./components/ui/oncology";
import OncologyTwo from "./components/ui/oncologyTwo";
import Depertment from "./components/ui/superDepertment";
import Doctors from "./doctors/page";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Oncology />
      <Depertment />
      <OncologyTwo />
      <Doctors />
      <ForDoctor />
    </div>
  );
}
