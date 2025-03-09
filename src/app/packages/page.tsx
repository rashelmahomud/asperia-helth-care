import Link from "next/link";
import React from "react";
import LiveChat from "../components/shared/LiveChat";

const Packages = () => {
  return (
    <div>
      <div className="bg-[url('/asperia/page-header-bg3.jpg')]  bg-no-repeat bg-cover lg:p-32">
        <div className="flex gap-5 font-semibold text-gray-700">
          <Link href={"/"} className="text-gray-800">HOME</Link>/
          <Link href={"/specialties"} className="uppercase text-gray-800">
            more Packages
          </Link>
        </div>
        <h2 className="text-5xl font-semibold text-gray-800">Packages</h2>
      </div>
      <LiveChat />
    </div>
  );
};

export default Packages;
