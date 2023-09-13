import { styled } from "styled-components";
import { constants } from "../typography";
import { BannerCardProps } from "./banner-card";
import { colors } from "../typography/colors";

export const ContainerBannerCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  img {
    object-fit: cover;
  }
`;

type BoxColorStyledProps = Pick<BannerCardProps, "color">;

export const BoxColorStyled = styled.div<BoxColorStyledProps>`
  border-radius: ${constants.radius.smallRadius};
  width: 100%;
  height: 44px;
  z-index: -1;
  bottom: 0;
  position: absolute;
  background-color: ${({ color }) => colors[color]};
`;

export const ContainerTextCardStyled = styled.div`
  width: 176px;
  text-align: center;
  h4 {
    margin-top: 10px;
  }
`;
