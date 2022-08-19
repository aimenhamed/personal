import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 0 4rem;
  }
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
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  margin: 0 0 2rem;
  line-height: 1.15;
  font-size: 2rem;
`;

export const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
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
