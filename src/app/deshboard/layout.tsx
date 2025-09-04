"use client";
import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../components/shared/ThemeToggle";

interface DeshbordType {
  children: React.ReactNode;
}

interface LinkType {
  href: string;
  label: string;
  id: number;
}

const links: LinkType[] = [
  { id: 1, href: "/deshboard/doctor", label: "Doctor" },
  { id: 2, href: "/deshboard", label: "custom" },
  { id: 3, href: "/deshboard", label: "Admin" },
  { id: 4, href: "/deshboard", label: "Add Product" },
  { id: 5, href: "/deshboard", label: "Appointment" },
  { id: 6, href: "/deshboard", label: "Patient" },
  { id: 7, href: "/deshboard", label: "Admitted" },
  { id: 8, href: "/deshboard/login", label: "Login" },
];

const DeshboardLayout = ({ children }: DeshbordType) => {
  const [open, setOpen] = useState(false);
  return (
    <main className="pt-28 lg:flex gap-10">
      <div className="bg-gray-100 dark:bg-dark lg:w-full p-5 flex flex-col items-end">
        <div className="flex gap-32 relative">
          <button onClick={() => setOpen(!open)} className="text-3xl lg:hidden">
            {open ? (
              <FontAwesomeIcon icon={faLock} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
          <h1 className="text-4xl font-semibold mb-3">Deshboard</h1>
        </div>
        {children}
      </div>
      <ul
        className={`flex flex-col gap-5 bg-gray-100 dark:bg-dark dark:text-white lg:w-60 lg:h-screen items-center font-semibold transition-all duration-500 ease-in z-[100] ${
          open
            ? "top-[180px] bg-gray-200 right-0 w-80 absolute rounded-tl-[150px] overflow-hidden"
            : "hidden lg:block"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.id}
            className="hover:bg-gray-200 text-center w-full p-2"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li className="text-center">
          <ThemeToggle />
        </li>
      </ul>
    </main>
  );
};

export default DeshboardLayout;
