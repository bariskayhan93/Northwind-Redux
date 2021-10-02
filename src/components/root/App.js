import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Route,Switch} from "react-router-dom"
import cartDetail from "../cart/cartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product" exact component={Dashboard} />
        <Route path="/saveProduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/saveProduct" component={AddOrUpdateProduct} />
        <Route path="/cart" exact component={cartDetail} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
