import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Containers/Header";
import AddProduct from "./Components/AddProduct";
import "./App.css";
import ProductCockpit from "./Components/Product-cockpit";
import UserForm from "./Components/UserForm";
import Home from "./Containers/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={UserForm} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route exact path="/product-list" component={Home} />
              <Route
                exact
                path="/product-details/:id"
                component={ProductCockpit}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
