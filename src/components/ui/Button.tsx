import clsx from "clsx";
import React from "react";

const Button: React.FC<{
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ variant = "primary", type = "button", onClick, children }) => {
  return (
    <button
      type={type}
      className={clsx(
        "px-4 py-2 rounded-md font-semibold",
        variant === "primary"
          ? "bg-primary text-primaryText"
          : "border-2 border-primary text-primary"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
