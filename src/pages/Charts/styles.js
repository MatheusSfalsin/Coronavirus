import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  padding: 15px;
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(1, 1fr);
  }

  canvas {
    height: 600px;
    max-width: 100%;
  }
`;
