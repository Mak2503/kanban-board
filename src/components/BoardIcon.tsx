import React from "react";

type BoardIconProps = {
  border?: string;
  bg?: string;
};

const BoardIcon = ({ border = "#858fa1", bg = "#2C2C38" }: BoardIconProps) => {
  return (
    <div className="w-4 h-4 mr-3">
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="240" height="240" rx="16" fill={border} />
        <rect
          x="10"
          y="10.9955"
          width="220"
          height="219.005"
          rx="16"
          fill={bg}
        />
        <line
          y1="-5"
          x2="135.976"
          y2="-5"
          transform="matrix(0.999974 -0.00725502 0.00435017 0.999991 10 123.987)"
          stroke={border}
          strokeWidth="10"
        />
        <line
          x1="145.972"
          y1="62.7375"
          x2="230"
          y2="62.7375"
          stroke={border}
          strokeWidth="10"
        />
        <line
          x1="145.972"
          y1="174.231"
          x2="230"
          y2="174.231"
          stroke={border}
          strokeWidth="10"
        />
        <line
          x1="140.972"
          y1="230"
          x2="140.972"
          y2="10"
          stroke={border}
          strokeWidth="10"
        />
      </svg>
    </div>
  );
};

export default BoardIcon;
