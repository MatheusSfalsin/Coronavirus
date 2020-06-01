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

  h2 {
    color: #848484;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-left: 20px;
  }
`;

export const LinkStyle = styled(Link)`
  position: absolute;
  padding: 10px;
  top: 80px;
  right: 60px;
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
