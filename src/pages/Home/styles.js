import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Content = styled.div`
  > div {
    margin-bottom: 50px;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 20px;
    align-items: center;
  }

  h2 {
    color: #848484;
    padding-left: 20px;
  }

  h1 {
    color: #848484;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
`;

export const LinkStyle = styled(Link)`
  padding: 10px;
  height: 40px;
  width: 140px;
  background: transparent;
  border: 1px solid #d6d6d6;
  font-size: 20px;
  font-weight: bold;
  color: #4e73df;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 5px;
  }
`;
