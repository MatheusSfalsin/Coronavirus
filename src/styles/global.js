import { createGlobalStyle } from "styled-components";

// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;

  *:focus{
    outline: 0;
  }

  html{
    height: 100%;
    width: 100%;
    background: #F8F9FC;
  }

  #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: #F8F9FC;
    height: 100%;
    width: 100%;
  }

  body, input , button{
    font: 14px 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }
}


`;
