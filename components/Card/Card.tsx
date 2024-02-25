import { Project } from "../../projects";
import { Container, Description, Title } from "./style";

function Card({ title, description, link }: Project) {
  return (
    <Container href={link}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
export default Card;
