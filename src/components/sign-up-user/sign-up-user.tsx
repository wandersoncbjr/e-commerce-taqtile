import { IconAdding } from "../../assets/icons/icon-adding";
import { Button } from "../button";
import Checkbox from "../check-box/check-box";
import { Input } from "../inputs/Input";
import { Select } from "../inputs/select";
import {
  brazilStates,
  genres,
  specialties,
} from "../inputs/select/options-select";
import { LinkButton } from "../link-button";
import { OptionButtons } from "../option-button/option-button";
import ProgressBar from "../progress-bar.tsx/progress-bar";

import { Separator } from "../separator";
import { BodySecondary } from "../typography/body-secondary/body-secondary";
import { H1 } from "../typography/headline/h1";
import {
  WrapperSignUp,
  ContainerTitleSignUp,
  DividerInputsStyled,
  WrapperButtonSignUpStyled,
  WrapperInputsStyled,
  DividerSelectsAndInputsStyled,
  WrapperLinkButtonStyled,
  ContainerSignUp,
} from "./style";

export function SignUpUser() {
  return (
    <ContainerSignUp>
      <ProgressBar progress={60} />
      <WrapperSignUp>
        <ContainerTitleSignUp>
          <H1>Cadastre-se</H1>
          <BodySecondary>Passo 2 de 3</BodySecondary>
        </ContainerTitleSignUp>
        <OptionButtons options={["Pessoa Física", "Pessoa Jurídica"]} />
        <WrapperInputsStyled>
          <Input label="Nome" type="text" />
          <Input label="Senha" type="password" />
        </WrapperInputsStyled>
        <DividerSelectsAndInputsStyled aria-disabled>
          <Input label="E-mail" type="text" />
          <Select label="Gênero" option={genres} />
          <Input label="CRO" type="text" />
          <Select label="UF" option={brazilStates} />
        </DividerSelectsAndInputsStyled>
        <BodySecondary>
          Ao fornecer o seu CRO, a Dental Cremer disponibiliza produtos
          exclusivos para o exercício da sua profissão como anestésicos,
          materiais inflamatórios e outros.
        </BodySecondary>
        <DividerInputsStyled>
          <Input label="CPF" type="text" />
          <Select label="Especialidade(s)" option={specialties} />
          <Input label="Celular" type="text" />
          <WrapperLinkButtonStyled>
            <Separator size="medium" />
            <LinkButton
              variant="default"
              iconPosition="left"
              type="button"
              icon={<IconAdding color="brandCtaDark" />}
            >
              Adicionar número de celular ou telefone
            </LinkButton>
          </WrapperLinkButtonStyled>
        </DividerInputsStyled>
        <Checkbox title="Este número é WhatsApp" />
        <Separator size="small" />

        <WrapperButtonSignUpStyled>
          <Button type="button" variant="secondary">
            Voltar para perfil
          </Button>
          <Button variant="primary">Continuar</Button>
        </WrapperButtonSignUpStyled>
      </WrapperSignUp>
    </ContainerSignUp>
  );
}
