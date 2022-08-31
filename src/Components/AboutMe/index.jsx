import daniel from "../../Assets/daniel.jpg";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Container, Conteudo } from "./style.js";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript,
  DiGit,
  DiPostgresql,
  DiPython,
} from "react-icons/di";
import { FaLinux, FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import {
  SiFlask,
  SiDjango,
  SiTypescript,
  SiSqlite,
  SiMaterialui,
  SiStyledcomponents,
  SiInsomnia,
  SiVisualstudiocode,
  SiFigma,
} from "react-icons/si";

const AboutMe = () => {
  return (
    <Container>
      <Container id="aboutMe">
        <div className="content">
          <div className="image">
            <Avatar
              alt="foto"
              src={daniel}
              sx={{
                width: "100%",
                height: "100%",
                border: "3px solid var(--green-dark)",
              }}
            />
          </div>
          <div className="text">
            <h2>Olá, eu sou Daniel.</h2>
            <h3>
              Estudante back-end e desenvolvedor front-end, com conhecimento e
              projetos desenvolvidos em HTML, CSS, Javascript,React e
              context-api. Gosto de aprender e ensinar sobre o que sei. No
              código prezo pelas boas práticas e por escrever um código de fácil
              compreensão.
            </h3>
          </div>
        </div>
      </Container>

      <Conteudo>
        <div className="conteudo">
          <p>Minhas tecnologias</p>
          <div className="techs">
            <a href="https://git-scm.com/">
              <DiGit className="icone" />
              <span>GIT</span>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
              <AiOutlineHtml5 className="icone" />
              <span>HTML</span>
            </a>
            <a href="httphttps://developer.mozilla.org/pt-BR/docs/Web/CSSs://git-scm.com/">
              <DiCss3 className="icone" />
              <span>CSS</span>
            </a>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <DiJavascript className="icone" />
              <span>Javascript</span>
            </a>
            <a href="https://pt-br.reactjs.org/docs/getting-started.html">
              <FaReact className="icone" />
              <span>React</span>
            </a>
            <a href="https://www.postgresql.org/docs/">
              <SiStyledcomponents className="icone" />
              <span>STYLEDCOMPONENTS</span>
            </a>
            <a href="https://docs.docker.com/">
              <SiMaterialui className="icone" />
              <span>MATERIAL UI</span>
            </a>
            <a href="https://nodejs.org/en/docs/">
              <FaNodeJs className="icone" />
              <span>NodeJs</span>
            </a>
            <a href="https://docs.docker.com/">
              <FaDocker className="icone" />
              <span>DOCKER</span>
            </a>
            <a href="https://www.postgresql.org/docs/">
              <DiPostgresql className="icone" />
              <span>Postgres</span>
            </a>
            <a href="https://www.postgresql.org/docs/">
              <SiVisualstudiocode className="icone" />
              <span>VSCODE</span>
            </a>
            <a href="https://www.postgresql.org/docs/">
              <SiInsomnia className="icone" />
              <span>INSOMNIA</span>
            </a>
          </div>
        </div>
      </Conteudo>

      <Conteudo>
      <div className="conteudo">
        
        <p>Tecnologias que estou aprendendo</p>
        <div className="techs">
          <a href="https://git-scm.com/">
            <FaLinux className="icone" />
            <span>Linux</span>
          </a>
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
            <DiPython className="icone" />
            <span>PYTHON</span>
          </a>
          <a href="httphttps://developer.mozilla.org/pt-BR/docs/Web/CSSs://git-scm.com/">
            <SiFlask className="icone" />
            <span>FLASK</span>
          </a>
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
            <SiDjango className="icone" />
            <span>DJANGO</span>
          </a>
          <a href="https://nodejs.org/en/docs/">
            <SiSqlite className="icone" />
            <span>SQLITE</span>
          </a>

          <a href="https://www.postgresql.org/docs/">
            <SiFigma className="icone" />
            <span>FIGMA</span>
          </a>

          <a href="https://pt-br.reactjs.org/docs/getting-started.html">
            <SiTypescript className="icone" />
            <span>TYPESCRIPT</span>
          </a>
        </div>
        </div>
      </Conteudo>
    </Container>
  );
};

export default AboutMe;
