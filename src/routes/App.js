import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "../pages/Products";
import Product from "../pages/Product";
import PageNotFound from "../pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} /> 
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={Product} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
