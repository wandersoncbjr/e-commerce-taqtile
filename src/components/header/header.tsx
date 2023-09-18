import { IconCart } from "../../assets/icons/icon-cart";
import { IconLogo } from "../../assets/icons/icon-logo";
import { IconMenu } from "../../assets/icons/icon-menu";
import { IconSearch } from "../../assets/icons/icon-search";
import { IconUser } from "../../assets/icons/icon-user";
import { Input } from "../inputs/Input";
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

interface HeaderProps {
  user?: string;
}

export function Header({ user }: HeaderProps) {
  const [showInput, setShowInput] = useState(false);

  return (
    <ContainerHeaderStyled>
      <HeaderStyled>
        <WrapperIconMenu>
          <IconMenu />
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
