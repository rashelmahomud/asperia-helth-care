import Banner from "./components/ui/banner";
import ForDoctor from "./components/ui/forDoctor";
import Oncology from "./components/ui/oncology";
import OncologyTwo from "./components/ui/oncologyTwo";
import Services from "./components/ui/services";
import Depertment from "./depertment/page";
import Doctors from "./doctors/page";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Banner />
      <Services />
      <Oncology />
      <Depertment />
      <OncologyTwo />
      <Doctors />
      <ForDoctor />
    </div>
  );
}
