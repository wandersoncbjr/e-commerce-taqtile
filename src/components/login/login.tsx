import { Input } from "../inputs/Input";
import { Separator } from "../separator";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { H2 } from "../typography/headline/h2";
import { Button } from "../button";
import { LinkButton } from "../link-button";
import { useLoginForm } from "./validation-login/useLoginForm";
import {
  WrapperButtonLoginStyled,
  WrapperTitleButtonLinkStyled,
} from "./style";

export function Login() {
  const { register, handleSubmit, errors, handleForm } = useLoginForm();

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
      <WrapperTitleButtonLinkStyled>
        <LinkButton variant="default">Esqueceu sua senha?</LinkButton>
      </WrapperTitleButtonLinkStyled>
      <Separator size="large" />
      <WrapperButtonLoginStyled>
        <Button expanded variant="primary">
          Entrar
        </Button>
        <BodySecondary>OU</BodySecondary>
        <LinkButton variant="default">Cadastrar-se</LinkButton>
      </WrapperButtonLoginStyled>
    </form>
  );
}
