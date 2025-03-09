import Link from "next/link";
import Depertment from "../depertment/page";

const SpecialPage = () => {
  return (
    <div>
      <div className="bg-[url('/asperia/page-header-bg3.jpg')]  bg-no-repeat bg-cover lg:p-32">
        <div className="flex gap-5 font-semibold text-gray-700">
          <Link href={"/"}>HOME</Link>/<Link href={"/specialties"} className="uppercase">specialties</Link>
        </div>
        <h2 className="text-5xl font-semibold text-gray-800">Specialties</h2>
      </div>
      <Depertment />
    </div>
  );
};

export default SpecialPage;
