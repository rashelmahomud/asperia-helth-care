"use client";

import {  faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Setting = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div onClick={() => setOpen(!open)} className=" ml-20 py-32 ">
        {open ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="w-8 h-8 text-red-500 border rounded-full p-3 border-4"
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className="w-8 h-8 text-iconBg border rounded-full p-3 border-4"
          />
        )}
      </div>
    </div>
  );
};

export default Setting;
