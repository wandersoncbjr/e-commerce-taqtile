import React from "react";
import { colors } from "../../components/typography/colors";
interface IconAddingProps {
  color?: "brandPrimary" | "brandCtaDark" | "baseGrayLight";
}

const colorMaps = {
  brandPrimary: colors.brandPrimary,
  brandCtaDark: colors.brandCtaDark,
  baseGrayLight: colors.baseGrayLight,
};
export function IconAdding({ color = "brandPrimary" }: IconAddingProps) {
  return (
    <span>
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.2251 0.625C8.2251 0.279822 7.94528 0 7.6001 0C7.25492 0 6.9751 0.279822 6.9751 0.625V6.375L1.2251 6.375C0.87992 6.375 0.600098 6.65482 0.600098 7C0.600098 7.34518 0.87992 7.625 1.2251 7.625L6.9751 7.625V13.375C6.9751 13.7202 7.25492 14 7.6001 14C7.94528 14 8.2251 13.7202 8.2251 13.375V7.625L13.9751 7.625C14.3203 7.625 14.6001 7.34518 14.6001 7C14.6001 6.65482 14.3203 6.375 13.9751 6.375L8.2251 6.375V0.625Z"
          fill={colorMaps[color]}
        />
      </svg>
    </span>
  );
}
