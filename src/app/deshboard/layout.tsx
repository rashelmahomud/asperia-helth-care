"use client";
import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../components/shared/ThemeToggle";

interface DeshbordType {
  children: React.ReactNode;
}
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
        className={`flex flex-col gap-5 bg-gray-100 dark:bg-dark dark:text-white lg:w-60 lg:h-screen items-center font-semibold transition-all duration-500 ease-in ${
          open
            ? "top-[180px] bg-gray-200 right-0 w-80 absolute rounded-tl-[150px] overflow-hidden"
            : "hidden lg:block"
        }`}
      >
        <li className="hover:bg-gray-200 text-center w-full p-2">
          <Link href={"/deshboard/shop"}>Shop</Link>
        </li>
        <li className="hover:bg-gray-300 text-center w-full p-2">
          <Link href={"/deshboard/login"}>Login</Link>
        </li>
        <li className="hover:bg-gray-300 text-center w-full p-2">
          <Link href={"/deshboard"}>admin</Link>
        </li>
        <li className="hover:bg-gray-300 text-center w-full p-2">
          <Link href={"/deshboard"}>add product</Link>
        </li>
        <li className="hover:bg-gray-300 text-center w-full p-2">
          <Link href={"/deshboard"}>appoinment</Link>
        </li>
        <li className="hover:bg-gray-300 text-center w-full p-2">
          <Link href={"/deshboard"}>pestion</Link>
        </li>
        <li className="hover:bg-gray-300 text-center w-full p-2">
          <Link href={"/deshboard"}>admited</Link>
        </li>
        <li className="hover:bg-gray-300 text-center w-full p-2">
          <Link href={"/deshboard"}>login</Link>
        </li>
        <li className="hover:bg-gray-300 text-center w-full p-2"></li>
        <li className="text-center">
          <ThemeToggle />
        </li>
      </ul>
    </main>
  );
};

export default DeshboardLayout;
