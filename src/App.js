import React from "react";
import { Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import Store from "./pages/Store";
import PropertyDetails from "./pages/PropertyDetails";
import "./app.scss";

export default function App() {

  return (
    <div>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/addProduct" exact component={AddProduct}></Route>
            <Route path="/store" exact component={Store}></Route>
            <Route path="/store/:id" exact component={PropertyDetails}></Route>
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}
