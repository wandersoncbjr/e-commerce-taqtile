import React from "react";
import { Rate } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import styled from "styled-components";

interface RatingProps {
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const RateStyled = styled(Rate)`
  width: 6rem;
`;

export function Rating({ defaultValue = 0, onChange }: RatingProps) {
  return (
    <RateStyled size="xs" defaultValue={defaultValue} onChange={onChange} />
  );
}
