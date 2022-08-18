import { Container, Description, Title } from "./style";
import { Project } from "../../lib/prisma";

function Card({ title, description, link }: Project) {
  return (
    <Container href={link}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
export default Card;
