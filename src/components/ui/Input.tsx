import React from "react";

const Input: React.FC<{
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        autoFocus
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-2 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

export default Input;
