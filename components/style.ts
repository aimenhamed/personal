import styled from "styled-components";

export const Container = styled.div`
  padding: 0 35rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

export const SubTitle = styled.h2`
  width: 97.5%;
  margin: 0 0 2rem;
  line-height: 1.15;
  font-size: 2rem;
`;

export const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  width: 97.5%;
`;

export const Link = styled.a`
  font-weight: bold;
  color: #0070f3;
  text-decoration: underline;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
`;
