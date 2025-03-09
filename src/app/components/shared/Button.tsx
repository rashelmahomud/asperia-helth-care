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
        className={`${ nav ? "bg-primary rounded-r-lg px-4 py-3 font-semibold text-xl text-white " : foot ? 'bg-white rounded-lg px-4 py-3 font-semibold text-xl text-gray-950 rounded-lg': 'bg-primary text-white rounded-lg px-4 py-3 font-semibold text-xl '}} `}
      >
        {children}
      </button>
      {/* <button
        className={`${
          nav ? "bg-primary px-4 py-3 font-semibold text-xl text-white rounded-r-lg" : "bg-primary px-4 py-3 font-semibold text-xl rounded-lg text-white"
        } `}
      >
        {children}
      </button> */}
    </div>
  );
};

export default Button;
