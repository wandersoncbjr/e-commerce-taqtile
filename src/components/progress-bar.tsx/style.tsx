import styled from "styled-components";
import { colors } from "../typography/colors";

export const ProgressBarContainer = styled.div`
  background-color: ${colors.baseGrayXlight};
  height: 6px;
  width: 100%;
`;

export const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  border-radius: 12px;
  width: ${(props) => props.progress}%;
  background: ${colors.brandSecondaryGradient};
  transition: width 0.5s;
`;
