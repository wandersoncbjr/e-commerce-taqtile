import React from "react";

interface IconSubtractingProps {
  color: string;
}

export function IconSubtracting({ color }: IconSubtractingProps) {
  return (
    <svg
      width="15"
      height="2"
      viewBox="0 0 15 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="13.9751"
        y1="1"
        x2="1.2251"
        y2="0.999999"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
