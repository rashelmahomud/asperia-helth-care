import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="">
      <div className="flex gap-5 justify-between lg:px-32 p-5">
        <Image src={"/asperia/logo.png"} width={150} height={150} alt="logo" />
        <div className="flex gap-3 text-xl order-last ">
          <FontAwesomeIcon icon={faPhoneVolume} className="w-8 text-iconBg" />

          <div className="">
            <p className="font-semibold">+8801835199061</p>

            <span className="text-sm">hotline number</span>
          </div>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-5 bg-gray-100 rounded-lg pl-5 font-semibold">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Packages</Link>
              </li>
              <li>
                <Link href={"/"}>Specialties </Link>
              </li>
              <li>
                <Link href={"/"}>Cancer Care</Link>
              </li>
              <li>
                <Link href={"/"}>Doctors</Link>
              </li>
              <li>
                <Button nav>Appoinment</Button>
              </li>
            </ul>
          </div>
        
      </div>
    </div>
  );
};

export default Header;
