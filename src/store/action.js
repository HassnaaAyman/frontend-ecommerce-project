import productsApi from '../Api/product';

export const GETALLPRODUCTS = "GETALLPRODUCTS";
export const ADDPRODUCT = "ADDPRODUCT";
export const DELETEPRODUCT = "DELETEPRODUCT";
export const SHOWPRODUCTDETAILS = "SHOWPRODUCTDETAILS";



export const getProducts = () => {
    return dispatch => {
        productsApi.getAllProducts().then(res => {
            dispatch({ type: GETALLPRODUCTS, payload: res.data });
        })
            .catch(console.log);
    }
}


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
