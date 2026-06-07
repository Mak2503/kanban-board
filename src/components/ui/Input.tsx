import clsx from "clsx";
import React from "react";

const Input: React.FC<{ label?: string } & React.InputHTMLAttributes<HTMLInputElement>> = ({ label, className, ...props }) => {
  return (
    <div className="w-full">
      {label && <label>{label}</label>}
      <input
        className={clsx(
          "w-full mt-2 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
