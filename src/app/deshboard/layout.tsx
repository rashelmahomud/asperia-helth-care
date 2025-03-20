"use client";
import Link from "next/link";
import { useState } from "react";

interface DeshbordType {
  children: React.ReactNode;
}
const DeshboardLayout = ({ children }: DeshbordType) => {
  const [open, setOpen] = useState(false);
  return (
    <main className="pt-28 lg:flex gap-10">
      <div className="bg-gray-100 dark:bg-dark lg:w-full p-5 flex flex-col items-end">
        <div className="flex justify-end">
          <button onClick={() => setOpen(!open)} className="text-3xl lg:hidden">
            {open ? "+" : "-"}
          </button>
          <h1 className="text-4xl font-semibold mb-3">Deshboard</h1>
        </div>
        {children}
      </div>

      <div>
        <ul
          className={`flex flex-col gap-5 bg-gray-100 dark:bg-dark dark:text-white lg:w-60 lg:h-screen items-center font-semibold transition-all duration-500 ease-in ${
            open
              ? "left-96 opacity-100 z-[10]"
              : "left-[-490px] lg:opacity-100 opacity-0"
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
        </ul>
      </div>
    </main>
  );
};

export default DeshboardLayout;
