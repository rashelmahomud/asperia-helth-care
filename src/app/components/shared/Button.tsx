import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  nav?: boolean;
  foot?: boolean;
}

const Button = ({ children, nav,foot }: ButtonProps) => {
  return (
    <div>
      <button
        className={`${
          nav ? "bg-primary px-4 py-3 font-semibold text-xl text-white rounded-r-lg" : "bg-primary px-4 py-3 font-semibold text-xl rounded-lg text-white"
        } ${foot ? 'bg-white px-4 py-3 font-semibold text-xl text-gray-500 rounded-r-lg': ''}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
