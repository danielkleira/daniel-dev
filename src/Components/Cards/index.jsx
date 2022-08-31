import { Projeto } from "./style";
import {AiFillGithub} from "react-icons/ai" 
import {BiLinkExternal} from "react-icons/bi"
import { useContext } from "react";
import { CardContext } from "../../Providers/Cards";
import Button from "@mui/material/Button";

const Cards = () => {
  const { projetos } = useContext(CardContext);
  return projetos.map((element, index) => (
    <Projeto key={index}>
      <h2 className="titulo">{element.nome}</h2>
      <img className="imgProjeto" src={element.imgUrl} alt={`${element.nome}`} />
      <p className="descricao">{element.descricao}</p>
      <p className="tecno">
        Tecnologias usadas: <br />
        {element.tecnologias}
      </p>
      <>
        <Button href={`${element.linkGit}`} className="botao">
          Acessar repositório <AiFillGithub size={35} />
        </Button>

        <Button href={`${element.linkSite}`} className="botao">
          Acessar o site <BiLinkExternal size={35}/>
        </Button>
      </>
    </Projeto>
  ));
};

export default Cards;
