import React, { useEffect } from "react";
import { Login } from "./login";
import {
  ArrowUpStyled,
  BackDropStyled,
  ContainerLoginStyled,
  ContainerModalStyled,
} from "./style";

export function ModalLogin() {
  useEffect(() => {
    function logScrollY() {
      if (window.scrollY >= 0) {
        window.scrollTo(0, 0);
      }
    }
    window.addEventListener("scroll", logScrollY);
    return () => {
      window.removeEventListener("scroll", logScrollY);
    };
  }, []);

  return (
    <>
      <ContainerModalStyled>
        <ArrowUpStyled />
        <ContainerLoginStyled>
          <Login />
        </ContainerLoginStyled>
      </ContainerModalStyled>
      <BackDropStyled />
    </>
  );
}
