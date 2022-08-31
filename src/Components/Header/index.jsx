import { useEffect } from "react";
import { useState } from "react";
import { Container, ContainerHide, Fundo } from "./style";

const Header = () => {
  /*  const { chooseTab } = useContext(HeaderContext); */
  /* const { tab } = useContext(HeaderContext);
 
  const handleClick = (event) => {
    chooseTab(event.target.id);
    
  }; */

  return (
    
    <Container>
        <a href="#aboutMe">
          <button>Sobre mim</button>
        </a>
        <a href="#projects">
          <button>Projetos</button>
        </a>
        <a href="#contact">
          <button>Contato</button>
        </a>
    </Container>
    
  );
};

export default Header;
