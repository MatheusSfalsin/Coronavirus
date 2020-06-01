import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Charts from "./pages/Charts";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/charts" component={Charts} />
    </Switch>
  );
}
