import { Input } from "../inputs/Input";
import { Separator } from "../separator";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { H2 } from "../typography/headline/h2";
import { Button } from "../button";
import { LinkButton } from "../link-button";
import { useLoginForm } from "./validation-login/useLoginForm";
import { Caption } from "../inputs/Input/styles";
import {
  WrapperButtonLoginStyled,
  WrapperTitleButtonLinkStyled,
} from "./style";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { register, handleSubmit, errors, error, handleForm, loading } =
    useLoginForm();
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <H2>Faça seu login</H2>
      <Separator size="medium" />
      <BodySecondary>E aproveite ofertas exclusivas para você</BodySecondary>
      <Separator size="medium" />
      <Input
        label="E-mail ou CPF/CNPJ"
        type="text"
        {...register("email")}
        error={errors.email?.message}
      />
      <Separator size="medium" />
      <Input
        label="Senha"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Separator size="small" />
      {error?.message && <Caption>{error?.message}</Caption>}
      <WrapperTitleButtonLinkStyled>
        <LinkButton variant="default" type="button">
          Esqueceu sua senha?
        </LinkButton>
      </WrapperTitleButtonLinkStyled>
      <Separator size="large" />
      <WrapperButtonLoginStyled>
        <Button expanded variant="primary" type="submit" disabled={loading}>
          Entrar
        </Button>
        <BodySecondary>OU</BodySecondary>
        <LinkButton
          variant="default"
          type="button"
          onClick={() => navigate("/signUp")}
        >
          Cadastrar-se
        </LinkButton>
      </WrapperButtonLoginStyled>
    </form>
  );
}
