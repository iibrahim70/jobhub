/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-block text-center rounded-full active:scale-105 transition duration-300 ease-in-out font-medium",
  {
    variants: {
      colors: {
        primary: "bg-blue-500 hover:bg-blue-500/90 text-white",
        secondary: "bg-white text-blue-500",
        transparent: "border border-black hover:bg-black/10 ",
      },
      size: {
        default: "py-3 px-6",
        small: "py-2 px-4",
      },
    },
    defaultVariants: {
      colors: "primary",
      size: "default",
    },
  }
);

const Button = ({ onClick, colors, size, children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(buttonVariants({ colors, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
