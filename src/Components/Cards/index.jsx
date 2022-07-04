import { Projeto } from "./style";
import gitHub from "../../Assets/github.png";
import { useContext } from "react";
import { CardContext } from "../../Providers/Cards";
import Button from "@mui/material/Button";

const Cards = () => {
  const { projetos } = useContext(CardContext);
  return projetos.map((element, index) => (
    <Projeto>
      <h2 className="titulo">{element.nome}</h2>
      <img src={element.imgUrl} alt={`${element.nome}`} />
      <p className="descricao">{element.descricao}</p>
      <p className="tecno">
        Tecnologias usadas: <br />
        {element.tecnologias}
      </p>
      <>
        <Button href={`${element.linkGit}`} className="botao">
          Acessar repositório <img src={gitHub} alt="git" />
        </Button>

        <Button href={`${element.linkSite}`} className="botao">
          Acessar o site
        </Button>
      </>
    </Projeto>
  ));
};

export default Cards;
