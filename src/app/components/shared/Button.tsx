import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  nav?: boolean;
}

const Button = ({ children, nav }: ButtonProps) => {
  return (
    <div>
      <button
        className={`${
          nav ? "bg-primary px-4 py-3 font-semibold text-xl text-white rounded-r-lg" : "bg-primary px-4 py-3 font-semibold text-xl rounded-lg text-white"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
