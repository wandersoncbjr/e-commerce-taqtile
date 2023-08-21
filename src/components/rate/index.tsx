import React from "react";
import { Rate } from "rsuite";
import "rsuite/dist/rsuite.min.css";

interface RatingProps {
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export function Rating({ defaultValue = 0, onChange }: RatingProps) {
  return <Rate defaultValue={defaultValue} onChange={onChange}  />;
}
