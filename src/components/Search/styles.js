import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    height: 45px;
    color: #999;
    font-size: 22px;
    padding: 0 15px;
    width: 50%;
    border-radius: 4px;
    border: 0;
    box-shadow: 1px 1px 20px rgba(4, 4, 4, 0.1);
  }

  button:hover {
    background: ${darken(0.06, "#858796")};
  }

  button {
    height: 45px;
    padding: 0 15px;
    border-radius: 4px;
    border: 0;
    box-shadow: 1px 1px 20px rgba(4, 4, 4, 0.1);
    background: #858796;
    transition: background 0.2s;
  }
`;
