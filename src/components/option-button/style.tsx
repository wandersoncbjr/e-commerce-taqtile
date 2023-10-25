import styled from "styled-components";
import { colors } from "../typography/colors";

export const ButtonGroup = styled.div`
  display: flex;
  background-color: ${colors.baseGrayXlight};
  border-radius: 12px;
  gap: 8px;
  padding: 4px;
`;

type OptionButtonProps = {
  selected: boolean;
};

export const OptionButton = styled.button<OptionButtonProps>`
  background-color: ${({ selected }) =>
    selected ? colors.baseWhite : colors.baseGrayXlight};
  border-radius: 12px;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  p {
    color: ${({ selected }) =>
      selected ? colors.brandPrimary : colors.baseGray};
  }
`;
