import { Container, SocialIcons } from "./style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <Container>
      <SocialIcons
        style={{ marginRight: "1rem" }}
        href="https://github.com/aimenhamed"
      >
        <AiFillGithub color="inherit" size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/aimen-hamed/">
        <AiFillLinkedin color="inherit" size="3rem" />
      </SocialIcons>
    </Container>
  );
}

export default Footer;
