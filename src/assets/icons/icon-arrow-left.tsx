import { MouseEventHandler } from "react";
import { StyledIconButton } from "../../components/styled-button-icon/styled";

interface IconMenuProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function IconArrowLeft({ onClick }: IconMenuProps) {
  return (
    <StyledIconButton
      onClick={onClick}
      style={{ backgroundColor: "transparent" }}
    >
      <svg
        width="24"
        height="24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 237.526 237.526"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        enableBackground="new 0 0 237.526 237.526"
      >
        <g>
          <path
            d="m228.826,109.628h-205.334l53.944-53.944c3.48-3.48 3.48-8.701 0-12.181-3.48-3.48-8.701-3.48-12.181,0l-57.424,57.424c-10.441,10.441-10.441,26.102-2.66454e-15,36.543l57.424,57.424c1.74,1.74 5.22,1.74 6.96,1.74s3.48,0 5.22-1.74c3.48-3.48 3.48-8.701 0-12.181l-55.684-55.684h207.074c3.48,0 8.701-3.48 8.701-8.701 2.84217e-14-5.22-3.48-8.7-8.7-8.7"
            fill="#99A2AB"
          />
        </g>
      </svg>
    </StyledIconButton>
  );
}
