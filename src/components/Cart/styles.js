import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const CartStyle = styled.div`
  display: block;
  height: 120px;
  padding: 15px;
  border-left: 4px solid ${(props) => props.colorCart};
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 1px 1px 20px rgba(4, 4, 4, 0.1);

  h3 {
    color: ${(props) => props.colorCart};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 7px;

    > div {
      display: block;
      span {
        color: #999999;
        font-size: 14px;
      }

      p {
        padding-top: 5px;
        color: #484848;
        font-size: 15px;
      }
    }
  }
`;
