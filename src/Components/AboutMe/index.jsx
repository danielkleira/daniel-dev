import daniel from "../../Assets/daniel.jpg";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Container } from "./style.js";
import docker from "../../Assets/docker.png";
import htmlsvg from "../../Assets/html.png";
import css from "../../Assets/css3.png";
import javascript from "../../Assets/javascript.png";
import git from "../../Assets/git.png";
import linux from "../../Assets/linux.png";
import nodejs from "../../Assets/nodejs.png";
import reacticon from "../../Assets/react.png";
import postgres from "../../Assets/postgresql.png";

const AboutMe = () => {
  return (
    <Container>
      <div className="content">
        <div className="image">
          <Avatar
            alt="foto"
            src={daniel}
            sx={{
              width: "50%",
              height: "50%",
              border: "3px solid var(--header-back)",
            }}
          />
        </div>
        <div className="text">
          <h2>Olá, eu sou Daniel.</h2>
          <h3>
            Estudante back-end e desenvolvedor front-end, com conhecimento e
            projetos desenvolvidos em HTML, CSS, Javascript,React e context-api.
            Gosto de aprender e ensinar sobre o que sei. No código prezo pelas
            boas práticas e por escrever um código de fácil compreensão.
          </h3>
        </div>
      </div>

      <div className="barra"></div>

      <div className="icons">
        <p>Minhas tecnologias</p>
        <a href="https://git-scm.com/">
          <img alt="git" src={git} />
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
          <img alt="html" src={htmlsvg}></img>
        </a>
        <a href="httphttps://developer.mozilla.org/pt-BR/docs/Web/CSSs://git-scm.com/">
          <img alt="css" src={css}></img>
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
          <img alt="javascript" src={javascript}></img>
        </a>
        <a href="https://pt-br.reactjs.org/docs/getting-started.html">
          <img alt="react" src={reacticon}></img>
        </a>
        <a href="https://nodejs.org/en/docs/">
          <img alt="nodejs" src={nodejs}></img>
        </a>
        <a href="https://docs.docker.com/">
          <img alt="docker" src={docker}></img>
        </a>
        <a href="https://www.postgresql.org/docs/">
          <img alt="postgres" src={postgres}></img>
        </a>
      </div>
    </Container>
  );
};

export default AboutMe;
