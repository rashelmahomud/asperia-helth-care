import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  type NavLInk = {
    link: string;
    name: string;
  };
  const links: NavLInk[] = [
    { link: "/", name: "Home" },
    { link: "/packages", name: "Packages" },
    { link: "/specialties", name: "Specialties" },
    { link: "/cancerCare", name: "Cancer Care" },
    { link: "/doctors", name: "Doctors" },
  ];
  return (
    <div className="">
      <div className="flex gap-5 justify-between lg:px-32 p-5">
        <Link href={"/"}>
          <Image
            src={"/asperia/logo.png"}
            width={150}
            height={150}
            alt="logo"
          />
        </Link>
        <div className="flex gap-3 text-xl order-last ">
          <FontAwesomeIcon icon={faPhoneVolume} className="w-8 text-iconBg" />

          <div className="">
            <p className="font-semibold">+8801835199061</p>

            <span className="text-sm">hotline number</span>
          </div>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5 bg-gray-100 rounded-lg pl-5 font-semibold">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}

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
