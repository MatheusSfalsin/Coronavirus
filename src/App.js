import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./Services/history";

import Header from "./components/Header";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
