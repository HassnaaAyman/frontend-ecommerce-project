import * as actionTypes from "./action";

const intiateState = {
  products: [],
  productDetails: {}
};

const reducer = (state = intiateState, action) => {
  switch (action.type) {
    case actionTypes.GETALLPRODUCTS:
      let newProduct = [...state.products];
      newProduct = action.payload;
      return {
        ...state,
        products: newProduct
      }


    case actionTypes.ADDPRODUCT:
      let newProducts = [...state.products];
      console.log(newProducts)
      newProducts.push(action.payload);
      window.alert('Added Successfully');
      return {
        ...state,
        products: newProducts
      }

    case actionTypes.DELETEPRODUCT:
      let deletedProduct = [...state.products]
      let productId = deletedProduct.findIndex(product => product.id !== action.productData.id);
      deletedProduct.splice(productId, 1)
      console.log(deletedProduct)
      return {
        ...state,
        products: deletedProduct
      }

    case actionTypes.SHOWPRODUCTDETAILS:
      let detailProductCopy = { ...state.productDetails };
      let index = state.products.findIndex(p => p.id == action.id);
      detailProductCopy = state.products[index];

      return {
        ...state,
        productDetails: detailProductCopy
      }

    default:
      return { ...state };
  }
};
export default reducer;
