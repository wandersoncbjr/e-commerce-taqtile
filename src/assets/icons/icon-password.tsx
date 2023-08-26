import React from "react";
interface IconPasswordProps {
  onClick: () => void;
}

export function IconPassword({ onClick }: IconPasswordProps) {
  return (
    <span>
      <svg
        onClick={onClick}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9999 6C7.87511 6 4.2658 8.07786 2.2893 11.1834C1.90357 11.7859 1.90357 12.6362 2.2893 13.2415C4.2658 16.3443 7.87511 18.4249 11.9999 18.4249C16.1246 18.4249 19.7342 16.3471 21.7107 13.2415C22.0964 12.639 22.0964 11.7887 21.7107 11.1834C19.7342 8.07786 16.1246 6 11.9999 6Z"
          stroke="#99A2AB"
          strokeWidth="1.25"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9911 16.257C14.2163 16.257 16.02 14.4532 16.02 12.228C16.02 10.0028 14.2163 8.19897 11.9911 8.19897C9.76593 8.19897 7.96191 10.0028 7.96191 12.228C7.96191 14.4532 9.76593 16.257 11.9911 16.257Z"
          stroke="#99A2AB"
          strokeWidth="1.25"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
