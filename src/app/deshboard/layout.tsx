'use client'
import Link from "next/link";
import { useState } from "react";

interface DeshbordType {
  children: React.ReactNode;
}
const DeshboardLayout = ({ children }: DeshbordType) => {
  const [open, setOpen] = useState(false)
  return (
    <main className="pt-28 flex gap-10">
      <div>
        <ul className="flex flex-col lg:block hidden gap-5 bg-gray-100 dark:bg-dark dark:text-white w-60 h-screen items-center font-semibold">
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
      <div className="bg-gray-100 dark:bg-dark w-full p-5">
        <button onClick={() => setOpen(!open)} className="text-3xl lg:hidden">{open ? "+": "-"} </button>
        <h1 className="text-4xl font-semibold mb-3">Deshboard</h1>
        {children}
        
      </div>
    </main>
  );
};

export default DeshboardLayout;
