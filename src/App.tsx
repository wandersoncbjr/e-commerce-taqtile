import React from "react";
import { Button } from "./components/button";
import { H1 } from "./components/typography/headline/h1";
import { H2 } from "./components/typography/headline/h2";
import { LinkButton } from "./components/link-button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "30px",
        gap: "16px",
      }}
    >
      <H1>Styleguide</H1>
      <H2>Botões</H2>
      <p>versão CTA </p>
      <Button variant="CTA">Entrar</Button>
      <p>versão estendida compact CTA </p>
      <Button expanded variant="CTA">
        Entrar
      </Button>
      <p>versão compact CTA </p>
      <Button compact variant="CTA">
        Entrar
      </Button>
      <p>versão primary </p>
      <Button variant="primary">Calcular</Button>
      <p>versão compact primary </p>
      <Button variant="primary" compact>
        Calcular
      </Button>
      <p>versão estendida compact primary </p>
      <Button variant="primary" compact expanded>
        Calcular
      </Button>
      <p>versão secondary expanded</p>
      <Button variant="secondary" expanded>
        Adicionar
      </Button>
      <p>versão secondary </p>
      <Button variant="secondary">Adicionar</Button>
      <p>versão secondary compact </p>
      <Button variant="secondary" compact>
        Adicionar
      </Button>
      <Button variant="secondary">Adicionar</Button>
      <p>versão link destructive</p>
      <LinkButton variant="destructive">Remover</LinkButton>
      <p>versão link default icon</p>
      <LinkButton icon variant="default">
        Mover para lista
      </LinkButton>
      <p>versão link default</p>
      <LinkButton variant="default">
        Mover para lista
      </LinkButton>
    </div>
  );
}

export default App;
