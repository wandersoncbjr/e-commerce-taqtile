import { useLocation, useNavigate } from "react-router";
import { IconCart } from "../../assets/icons/icon-cart";
import { IconLogo } from "../../assets/icons/icon-logo";
import { IconSearch } from "../../assets/icons/icon-search";
import { IconUser } from "../../assets/icons/icon-user";
import { Input } from "../inputs/Input";
import { ModalRegister } from "../modal-register/modal-register";
import { ContainerItems } from "./container-items";
import {
  ContainerInputSearchStyled,
  WrapperItemsStyled,
  HeaderStyled,
  WrapperIconMenu,
  WrapperIconSearchStyled,
  SeparatorUserStyled,
  ContainerHeaderStyled,
  SectionInputStyled,
} from "./styles";
import { useState } from "react";
import { IconArrowLeft } from "../../assets/icons/icon-arrow-left";

interface HeaderProps {
  user?: string;
}

export function Header({ user }: HeaderProps) {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ContainerHeaderStyled>
      <HeaderStyled>
        <WrapperIconMenu>
          {location.pathname === "/login" ? (
            <IconArrowLeft onClick={() => navigate("/")} />
          ) : (
            <ModalRegister user={user} />
          )}
        </WrapperIconMenu>
        <IconLogo />
        <ContainerInputSearchStyled>
          <Input
            type="text"
            icon={<IconSearch />}
            placeholder={
              user
                ? `${user}, digite o que você procura`
                : "Digite o que você procura"
            }
            expanded
          />
        </ContainerInputSearchStyled>
        <WrapperItemsStyled>
          {!showInput ? (
            <WrapperIconSearchStyled>
              <IconSearch onclick={() => setShowInput(true)} />
            </WrapperIconSearchStyled>
          ) : null}
          <SeparatorUserStyled>
            <ContainerItems icon={<IconUser />} title="Entrar" />
          </SeparatorUserStyled>
          <ContainerItems icon={<IconCart />} title="Carrinho" />
        </WrapperItemsStyled>
      </HeaderStyled>
      <SectionInputStyled>
        {showInput && (
          <Input
            type="text"
            icon={<IconSearch />}
            placeholder={
              user
                ? `${user}, digite o que você procura`
                : "Digite o que você procura"
            }
            expanded
            onBlur={() => setShowInput(false)}
          />
        )}
      </SectionInputStyled>
    </ContainerHeaderStyled>
  );
}
