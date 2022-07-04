import { Container } from "./style";
import { useContext } from "react";
import { HeaderContext } from "../../Providers/Head";

const Header = () => {
  const { chooseTab } = useContext(HeaderContext);
  const { tab } = useContext(HeaderContext);

  const handleClick = (event) => {
    chooseTab(event.target.id);
  };
  return (
    <Container>
      <button id="aboutMe" onClick={handleClick}>
        Sobre mim
      </button>
      <button id="projects" onClick={handleClick}>
        Projetos
      </button>
      <button id="articles" onClick={handleClick}>
        Artigos
      </button>
      <button id="contact" onClick={handleClick}>
        Contato
      </button>
    </Container>
  );
};

export default Header;
