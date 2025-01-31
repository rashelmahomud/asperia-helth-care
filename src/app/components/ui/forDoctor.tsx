import React from "react";
import Button from "../shared/Button";

const ForDoctor = () => {
  return (
    <div className="flex justify-between gap-10 lg:px-32 p-3">
      <div>
        <h3 className="text-2xl">LOCKING FOR A DOCTOR</h3>
        <h1 className="text-5xl">Choose from the best in Chattogram</h1>
      </div>
      <Button>Contact</Button>
    </div>
  );
};

export default ForDoctor;
