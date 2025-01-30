import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <button className={`bg-primary px-4 py-3 font-semibold text-xl rounded-lg text-white `}>
        {children}
      </button>
    </div>
  );
};

export default Button;
