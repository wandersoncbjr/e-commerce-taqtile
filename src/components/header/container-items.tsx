import { ReactNode, useState } from "react";
import { ContainerItemStyled } from "./styles";
import { TypographyButton } from "../typography/typography-link/styles";
import { ModalLogin } from "../login/modal-login";
import { colors } from "../typography/colors";

interface ContainerItemsProps {
  icon: ReactNode;
  title: string;
}
export function ContainerItems({ icon, title }: ContainerItemsProps) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const togglePopover = () => {
    setIsVisibleModal(!isVisibleModal);
  };


  return (
    <ContainerItemStyled>
      {icon}
      <TypographyButton
        style={{
          color:
            title === "Entrar" && isVisibleModal ? colors.brandPrimary : "",
        }}
        onClick={togglePopover}
      >
        {title}
      </TypographyButton>
      {title === "Entrar" && isVisibleModal ? <ModalLogin /> : null}
    </ContainerItemStyled>
  );
}
