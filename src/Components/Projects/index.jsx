import Cards from "../Cards";
import { Container } from "./style";

const Projects = () => {
  return (
    <Container id="projects">
      <h1>PROJETOS</h1>
      <span>Projetos nos quais trabalhei</span>
      <div className="cardsContainer">
      <Cards/>
      </div>
    </Container>
  );
};

export default Projects;
