import productsApi from '../Api/product';

export const ADDPRODUCT = "ADDPRODUCT";
export const DELETEPRODUCT = "DELETEPRODUCT";
export const SHOWPRODUCTDETAILS = "SHOWPRODUCTDETAILS";

export const addPrdt = (product) => {
    return { type: ADDPRODUCT, payload: product }
}

export const addProduct = (product, token) => {
    return dispatch => {
        productsApi.addProduct(product, token)
            .then(res => dispatch(addPrdt(res.data)))
            .catch(console.error);
    }
}
