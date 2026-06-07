import React from "react";

const TextArea: React.FC<{
  name?: string;
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ name, label, placeholder, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-2 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
      />
    </div>
  );
};

export default TextArea;
