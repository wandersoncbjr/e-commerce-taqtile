import { useState } from "react";
import { IconMenu } from "../../assets/icons/icon-menu";
import { Button } from "../button";
import { LinkButton } from "../link-button";
import { H2 } from "../typography/headline/h2";
import {
  ContainerRegisterStyled,
  WrapperRegisterButtonsStyled,
  WrapperRegisterStyled,
} from "./styles";
import { IconClose } from "../../assets/icons/icon-close";
import { useNavigate } from "react-router-dom";

interface ModalRegisterProps {
  user?: string;
}

export function ModalRegister({ user }: ModalRegisterProps) {
  const navigate = useNavigate();
  const [showModalRegister, setShowModalRegister] = useState(false);
  return (
    <>
      <IconMenu onClick={() => setShowModalRegister(true)} />
      {showModalRegister && (
        <ContainerRegisterStyled>
          <WrapperRegisterStyled>
            <IconClose onClick={() => setShowModalRegister(false)} />
            {user ? (
              <>
                <H2>Olá, {user}</H2>
                <div>
                  <LinkButton variant="default">Acessar sua conta</LinkButton>
                </div>
              </>
            ) : (
              <>
                <H2>Acesse seu cadastro e confira benefícios exclusivos!</H2>
                <WrapperRegisterButtonsStyled>
                  <Button
                    variant="primary"
                    onClick={() => navigate("/login")}
                    expanded
                  >
                    Entrar
                  </Button>
                  <LinkButton
                    variant="default"
                    onClick={() => navigate("/signUp")}
                    expanded
                  >
                    Criar conta
                  </LinkButton>
                </WrapperRegisterButtonsStyled>
              </>
            )}
          </WrapperRegisterStyled>
        </ContainerRegisterStyled>
      )}
    </>
  );
}
