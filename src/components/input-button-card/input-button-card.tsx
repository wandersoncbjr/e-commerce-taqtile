import { ReactNode } from "react";
import { Button } from "../button";
import { ContainerCards } from "../container-cards/container-cards";
import { Input } from "../inputs/Input";
import { H2 } from "../typography/headline/h2";
import {
  WappperInputButtonStyled,
  WappperButtonStyled,
  WappperInputStyled,
  ContainerInputButtonStyled,
} from "./styles";

interface InputButtonCardProps {
  title: string;
  label?: string;
  placeholder: string;
  children?: ReactNode;
  titleButton: string;
}

export function InputButtonCard({
  title,
  label,
  placeholder,
  children,
  titleButton,
}: InputButtonCardProps) {
  return (
    <ContainerCards>
      <ContainerInputButtonStyled>
        <H2>{title}</H2>
        <WappperInputButtonStyled>
          <WappperInputStyled>
            <Input label={label} placeholder={placeholder} />
          </WappperInputStyled>
          <WappperButtonStyled>
            <Button expanded variant="primary">
              {titleButton}
            </Button>
          </WappperButtonStyled>
        </WappperInputButtonStyled>
        {children}
      </ContainerInputButtonStyled>
    </ContainerCards>
  );
}
