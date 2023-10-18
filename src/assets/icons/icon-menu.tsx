interface IconMenuProps {
  onClick: () => void;
}

export function IconMenu({ onClick }: IconMenuProps) {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/24px/ic_menu">
        <path
          id="Path"
          d="M3 17.375C3 17.7202 3.27982 18 3.625 18H20.375C20.7202 18 21 17.7202 21 17.375C21 17.0298 20.7202 16.75 20.375 16.75H3.625C3.27982 16.75 3 17.0298 3 17.375Z"
          fill="#99A2AB"
        />
        <path
          id="Path_2"
          d="M3 12C3 12.3452 3.27982 12.625 3.625 12.625H20.375C20.7202 12.625 21 12.3452 21 12C21 11.6548 20.7202 11.375 20.375 11.375H3.625C3.27982 11.375 3 11.6548 3 12Z"
          fill="#99A2AB"
        />
        <path
          id="Path_3"
          d="M3.625 6C3.27982 6 3 6.27982 3 6.625C3 6.97018 3.27982 7.25 3.625 7.25H20.375C20.7202 7.25 21 6.97018 21 6.625C21 6.27982 20.7202 6 20.375 6H3.625Z"
          fill="#99A2AB"
        />
      </g>
    </svg>
  );
}
