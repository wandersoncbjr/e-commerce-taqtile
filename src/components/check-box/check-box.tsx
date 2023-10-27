import styled from "styled-components";
import { Label } from "../typography/label";

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckboxInput = styled.input`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

interface CheckboxProps {
  title: string;
}
function Checkbox({ title }: CheckboxProps) {
  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" />
      <Label>{title}</Label>
    </CheckboxContainer>
  );
}

export default Checkbox;
