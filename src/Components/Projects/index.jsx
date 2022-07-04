import Cards from "../Cards";
import { Container } from "./style";

const Projects = () => {
  return (
    <Container>
      <h1>Projetos</h1>
      <div className="cardsContainer">
      <Cards/>
      </div>
    </Container>
  );
};

export default Projects;
