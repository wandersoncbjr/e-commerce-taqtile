import React, { useState } from "react";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { ButtonGroup, OptionButton } from "./style";

interface OptionButtonsProps {
  options: string[];
}

export function OptionButtons({ options }: OptionButtonsProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    options[0]
  );

  const handleOptionClick = (option: string) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
    }
  };

  return (
    <ButtonGroup>
      {options.map((option) => (
        <OptionButton
          type="button"
          key={option}
          selected={option === selectedOption}
          onClick={() => handleOptionClick(option)}
        >
          <BodySecondary>{option}</BodySecondary>
        </OptionButton>
      ))}
    </ButtonGroup>
  );
}
