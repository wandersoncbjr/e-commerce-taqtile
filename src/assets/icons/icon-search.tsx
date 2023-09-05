interface IconSearchProps {
  onclick?: () => void;
}

export function IconSearch({ onclick }: IconSearchProps) {
  return (
    <svg
      onClick={onclick}
      width="20"
      height="22"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.77758 17.5551C14.073 17.5551 17.5551 14.073 17.5551 9.77757C17.5551 5.48213 14.073 2 9.77758 2C5.48214 2 2 5.48213 2 9.77757C2 14.073 5.48214 17.5551 9.77758 17.5551Z"
        stroke="#99A2AB"
        stroke-width="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.9999 22.0036L15.2178 15.3345"
        stroke="#99A2AB"
        stroke-width="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
