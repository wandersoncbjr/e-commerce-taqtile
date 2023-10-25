import React from "react";
import { ProgressBarContainer, ProgressBarFill } from "./style";

interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <ProgressBarContainer>
      <ProgressBarFill progress={progress} />
    </ProgressBarContainer>
  );
}

export default ProgressBar;
