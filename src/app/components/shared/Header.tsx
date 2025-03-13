"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhoneVolume,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  type NavLInk = {
    link: string;
    name: string;
  };
  const links: NavLInk[] = [
    { link: "/", name: "Home" },
    { link: "/packages", name: "Packages" },
    { link: "/specialties", name: "Specialties" },
    { link: "/oncology", name: "Cancer Care" },
    { link: "/doctorall", name: "Doctors" },
  ];
  const pathName = usePathname();
  const defaultClass = "py-3 px-4 rounded-lg text-gray-700 transition";
  const activeClass = "bg-blue-500 text-white";
  return (
    <div className="">
      <div className="flex gap-5 justify-between lg:px-32 p-5 fixed bg-white w-full z-10">
        <Image src={"/asperia/logo.png"} width={150} height={150} alt="logo" />

        <div onClick={() => setOpen(!open)} className="lg:hidden ml-20">
          {open ? (
            <FontAwesomeIcon icon={faXmark} className="w-8 h-8 text-red-500 border rounded-full p-3 border-4" />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="w-8 h-8 text-iconBg border rounded-full p-3 border-4"
            />
          )}
        </div>

        <div className="lg:flex hidden items-center gap-3 text-xl order-last">
          <Link href={"/"}>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="w-8 h-8 text-iconBg border rounded-full p-2 hover:text-iconBg hover:bg-primary border-4"
            />
          </Link>

          <div className="">
            <p className="font-semibold">+8801835199061</p>

            <span className="text-sm">hotline number</span>
          </div>
        </div>
        <div className="lg:ml-32">
           <ul className={`lg:flex text-center md:pb-3 p-5 lg:p-0 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-24 opacity-100 z-[10]" : "left-[-490px] lg:opacity-100 opacity-0"}`}>
            {links.map((link) => (
              <li key={link.name} className="flex justify-center">
                <Link
                  href={link.link}
                  className={`${defaultClass} ${
                    pathName === link.link ? activeClass : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link href={"/apoinment"}>
                <Button nav>Appoinment</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
