import React, { Component } from "react";
import Filter from "../Components/filter";
import Product from "../Components/product";
import Pagination from "../Components/pagination";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

class ProductList extends Component {
  state = {
    pr: [],
    pageSize: 6,
    currentPage: 1
  }

  componentDidMount() {
    this.props.onGetAllProducts();
  }


  pageChangedHandler = page => {
    this.setState({ currentPage: page });
  };

  Paginate(items, pageNumber, pageSize) {
    let startindex = (pageNumber - 1) * pageSize;
    return items.slice(startindex, startindex + pageSize);
  }


  render() {
    this.allProducts = this.Paginate(
      this.props.pr,
      this.state.currentPage,
      this.state.pageSize
    );
    const products = this.allProducts.map((product, index) => (
      <Product
        key={index}
        name={product.name}
        priceBefore={product.priceBefore}
        priceAfter={product.priceAfter}
        ProductImg={product.ProductImg}
        onSale={product.onSale}
        deletedProduct={() => this.props.OnDeleteProduct(index)}
      // showdetails={() => this.props.onClickProduct(index)}
      />
    ));
    return (
      <section class="item-listing">
        <Filter />
        <div className="item-listing__items item-listing--3items">
          {products}
        </div>
        <Pagination
          pageChanged={this.pageChangedHandler}
          itemsCount={this.props.pr.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
        />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    pr: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnDeleteProduct: (id, token) => { dispatch(actionTypes.deleteProduct(id, token)) },
    onGetAllProducts: () => dispatch(actionTypes.getProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
