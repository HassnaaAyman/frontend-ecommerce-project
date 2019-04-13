import React, { Component } from "react";
import SideNav from "../Containers/Sidenav";
import ProductList from "../Containers/product-list";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <SideNav />
        <ProductList />
      </div>
    );
  }
}

export default Home;
