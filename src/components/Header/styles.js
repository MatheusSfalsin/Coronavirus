import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: 1px 1px 20px rgba(4, 4, 4, 0.1);
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    span {
      font-weight: bold;
      color: #3e3e3e;
      font-size: 24px;
      border-right: 1px solid #a5a5a5;
      padding-right: 20px;
      margin-right: 15px;
    }

    p {
      color: #979797;
    }
  }
`;
