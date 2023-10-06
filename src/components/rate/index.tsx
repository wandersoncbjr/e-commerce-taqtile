import React from "react";
import { Rate } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import styled from "styled-components";

interface RatingProps {
  value?: number;
  onChange?: (value: number) => void;
}

const RateStyled = styled(Rate)`
  width: 6rem;
`;

export function Rating({ value = 0, onChange }: RatingProps) {
  return (
    <RateStyled size="xs"  value={value} onChange={onChange} />
  );
}
