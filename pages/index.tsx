import { prisma, Project } from "../lib/prisma";
import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import {
  Container,
  Description,
  Grid,
  Link,
  Main,
  SubTitle,
  Title,
} from "../components/style";

export async function getServerSideProps() {
  const projects = await prisma.project.findMany();
  return {
    props: {
      projects,
    },
  };
}

type HomeProps = {
  projects: Project[];
};

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <Container>
      <Head>
        <title>Aimen Hamed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Hello 👋🏻 <br />
          My name is Aimen Hamed.
        </Title>
        <Description>
          I am a Software Engineer at Optus. <br />I love creating developer
          friendly tools, and everything web.
        </Description>
        <Description style={{ margin: "0 0 4rem" }}>
          You can find me on{" "}
          <Link href="https://github.com/aimenhamed">GitHub</Link> and{" "}
          <Link href="https://www.linkedin.com/in/aimen-hamed/">Linkedin</Link>.
        </Description>
        <SubTitle>Projects</SubTitle>
        <Grid>
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </Grid>
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
