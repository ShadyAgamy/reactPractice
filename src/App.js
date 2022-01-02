import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import Store from "./pages/Store";
import PropertyDetails from "./pages/PropertyDetails";
import createHistory from "history/createBrowserHistory";

import "./app.scss";

export default function App() {
  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/addProduct" exact component={AddProduct}></Route>
            <Route path="/store" exact component={Store}></Route>
            <Route path="/store/:id" exact component={PropertyDetails}></Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}
