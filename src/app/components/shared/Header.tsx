'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

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
  const pathName = usePathname();
  const defaultClass =
  "py-2 px-4 rounded-lg text-gray-700 transition";
const activeClass = "bg-blue-500 text-white";
  return (
    <div className="">
      <div className="lg:flex gap-5 justify-between lg:px-32 p-5">
  
          <Image
            src={"/asperia/logo.png"}
            width={150}
            height={150}
            alt="logo"
          />
       
        <div className="flex items-center gap-3 text-xl order-last">
          <Link href={'/'}><FontAwesomeIcon icon={faPhoneVolume} className="w-8 h-8 text-iconBg border rounded-full p-3 hover:text-iconBg hover:bg-primary border-4"/></Link>

          <div className="">
            <p className="font-semibold">+8801835199061</p>

            <span className="text-sm">hotline number</span>
          </div>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5 bg-gray-100 rounded-lg pl-5 font-semibold">
            {links.map((link) => (
              <li key={link.name} >
                <Link href={link.link} className={`${defaultClass} ${pathName === link.link ? activeClass : ''}`}>{link.name}</Link>
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
