import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/action";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: {
        name: "",
        description: "",
        priceAfter: "",
        priceBefore: "",
        onSale: false,
        PaymentTypes: [],
        categroies: [],
        ProductImg: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpcbonlineshop.com%2Fphotos%2Fproduct%2F4%2F176%2F4.jpg&imgrefurl=https%3A%2F%2Fpcbonlineshop.com%2FTest-product-2.html&docid=hoD76SE7hB_ZTM&tbnid=Ys6s1aKrzB6hrM%3A&vet=10ahUKEwjTup6XldDhAhUixoUKHSY3Dc8QMwhtKAUwBQ..i&w=1192&h=1192&bih=625&biw=1366&q=product%20image&ved=0ahUKEwjTup6XldDhAhUixoUKHSY3Dc8QMwhtKAUwBQ&iact=mrc&uact=8'

      },
    };
    this.OnAddNewProduct = this.OnAddNewProduct.bind(this);
  }

  changeHandlerName = (e) => {
    const newproduct = { ...this.state.newProduct };
    newproduct.name = e.target.value;
    console.log(newproduct);
    this.setState({ newProduct: newproduct });
  }

  changeHandlerDescription = (e) => {
    const newproduct = { ...this.state.newProduct };
    newproduct.description = e.target.value;
    this.setState({ newProduct: newproduct });
  }

  changeHandlerPrice = (e) => {
    const newproduct = { ...this.state.newProduct };
    newproduct.priceBefore = e.target.value;
    this.setState({ newProduct: newproduct });
  }

  changeHandlerDiscount = (e) => {
    const newproduct = { ...this.state.newProduct };
    newproduct.priceAfter = newproduct.priceBefore - e.target.value;
    this.setState({ newProduct: newproduct });
  }

  changeHandlerSale = (e) => {
    if (e.target.value === "OnSale") {
      this.setState({
        ...this.state,
        OnSale: true
      })
    }
    else {
      this.setState({
        ...this.state,
        OnSale: false
      })
    }
  }

  onCheckHandler = (e) => {
    const newproduct = { ...this.state.newProduct };
    newproduct.PaymentTypes.push(e.target.name);
    this.setState({ newProduct: newproduct });
  }

  onChooseCategoryHandler = (e) => {
    const newproduct = { ...this.state.newProduct };
    newproduct.categroies.push(e.target.name);
    this.setState({ newProduct: newproduct });
  }

  OnAddNewProduct = (e) => {
    e.preventDefault();
    this.props.OnAddProduct(this.state.newProduct);
  }

  render() {
    return (
      <>
        <div className="add-product container">
          <form action="">
            <div className="add-product__images slider">
              <div className="add-product__image-actions">
                <div className="add-product__image-action">
                  <a href="#">
                    <i className="fas fa-plus-square" />
                  </a>
                  <a href="#">
                    <i className="fas fa-edit" />
                  </a>
                  <a href="#">
                    <i className="fas fa-trash-alt" />
                  </a>
                </div>
              </div>
              <div className="slider__items">
                <div
                  className="slider__item active"

                />
              </div>
              <div className="form-controls">
                <section className="tabs">
                  <div className="tabs__headers">
                    <div className="tabs__header active">English</div>
                    <div className="tabs__header">Arabic</div>
                  </div>
                  <div className="tabs__bodies">
                    <div className="tabs__body active">
                      <div className="form-group invalid">
                        <label for="">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                          onChange={this.changeHandlerName}

                        />
                      </div>
                      <div className="form-group">
                        <label for="">Description</label>
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          cols="30"
                          rows="4"
                          onChange={this.changeHandlerDescription}

                        />
                      </div>
                    </div>
                    <div className="tabs__body ">
                      <div className="form-group invalid">
                        <label for="">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""


                        />
                      </div>
                      <div className="form-group">
                        <label for="">Description</label>
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          cols="30"
                          rows="4"


                        />
                      </div>
                    </div>
                  </div>
                </section>

                <div className="form-group">
                  <label for="">Price</label>
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    onChange={this.changeHandlerPrice}
                  />
                </div>
                <div className="add-product__discount">
                  <div className="form-group">
                    <label for="">Satus</label>
                    <div className="form-group__radios">
                      <div className="form-group__radio">
                        <input
                          type="radio"
                          name="discount"
                          id=""
                          value="OnSale"
                          onChange={this.changeHandlerSale}
                        />
                        <span>On Sale</span>
                      </div>
                      <div className="form-group__radio">
                        <input
                          type="radio"
                          name="discount"
                          id=""
                          value="NotOnSale"
                          onChange={this.changeHandlerSale}
                        />
                        <span>Not On Sale</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="">Discount</label>
                    <input className="form-control" type="text" name="" id="" onChange={this.changeHandlerDiscount} />
                  </div>
                </div>
                <div className="form-group">
                  <label for="">Payment Types</label>
                  <div className="form-group__checkboxs">
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="Direct Bank Transfare" id="" onChange={this.onCheckHandler} />
                      <span>Direct Bank Transfare</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="Cheque Payment" id="" onChange={this.onCheckHandler} />
                      <span>Cheque Payment</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="Paypal" id="" onChange={this.onCheckHandler} />
                      <span>Paypal</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="Visa" id="" onChange={this.onCheckHandler} />
                      <span>Visa</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="Mastercard" id="" onChange={this.onCheckHandler} />
                      <span>Mastercard</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="On Dilivery" id="" onChange={this.onCheckHandler} />
                      <span>On Dilivery</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="">Category</label>
                  <select className="form-control" name="" id="">
                    <option value="" name="Arts & Crafts" onChange={this.onChooseCategoryHandler}>Arts & Crafts</option>
                    <option value="" name="Automotive" onChange={this.onChooseCategoryHandler}>Automotive</option>
                    <option value="">Baby</option>
                    <option value="">Books</option>
                    <option value="">Eletronics</option>
                    <option value="">Women's Fashion</option>
                    <option value="">Men's Fashion</option>
                    <option value="">Health & Household</option>
                    <option value="">Home & Kitchen</option>
                    <option value="">Military Accessories</option>
                    <option value="">Movies & Television</option>
                    <option value="">Sports & Outdoors</option>
                    <option value="">Tools & Home Improvement</option>
                    <option value="">Toys & Games</option>
                  </select>
                </div>

                <div className="taged-textbox form-group">
                  <label className="taged-textbox__lable" for="">
                    Tags
                  </label>
                  <div className="taged-textbox__data">
                    <div className="taged-textbox__tags">
                      <div className="taged-textbox__tag">
                        <span>tag1</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag2</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag3</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag4</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag5</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag6</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag7</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag8</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag9</span>
                        <a href="#" className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                      <div className="taged-textbox__tag">
                        <span>tag10</span>
                        <a className="taged-textbox__remove">
                          <i className="fas fa-times" />
                        </a>
                      </div>
                    </div>
                    <div className="taged-textbox__clear">
                      <a href="#">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                  </div>
                  <input
                    className="taged-textbox__textbox form-control"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="add-product__actions">
                  <button href="#" className="btn btn--gray">
                    Cancel
                  </button>
                  <button href="#" className="btn btn--primary" onClick={this.OnAddNewProduct}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    OnAddProduct: (productData) => dispatch(actionTypes.addProduct(productData)),
  }
}

export default connect(null, mapDispatchToProps)(AddProduct);
