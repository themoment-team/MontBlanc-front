import React from "react";

interface GoodBtnProps {
  color: string;
}

const GoodBtn: React.FC<GoodBtnProps> = (p: GoodBtnProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill={p.color}
        fillRule="evenodd"
        stroke={p.color}
        d="M5.148 4.105a2 2 0 00-.481 1.302v3.676a2 2 0 002 2h2.747a2 2 0 001.968-1.642l.44-2.417a2 2 0 00-1.968-2.357H8.167l.95-2.85a.791.791 0 00-1.353-.764L5.149 4.105z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={p.color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M2.333 10.5V5.25"
      ></path>
    </svg>
  );
};

export default GoodBtn;
