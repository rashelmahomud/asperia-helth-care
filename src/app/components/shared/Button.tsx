import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  nav?: boolean;
  foot?: boolean;
}

const Button = ({ children, nav, foot }: ButtonProps) => {
  return (
    <div className="group">
      <button
        className={`${
          // bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700
          nav
            ? "bg-primary text-white rounded-r-lg px-4 py-3 font-semibold text-xl group-hover:bg-iconBg group-hover:text-gray-800 duration-700 transition-all"
            : foot
            ? "bg-white rounded-lg px-4 py-3 font-semibold text-xl text-gray-950 rounded-lg"
            : "bg-primary text-white rounded-lg px-4 py-3 font-semibold text-xl group-hover:bg-sky-800 duration-700  transition-all"
        }} `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
