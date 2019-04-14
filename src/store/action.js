import productsApi from '../Api/product';

export const GETALLPRODUCTS = "GETALLPRODUCTS";
export const ADDPRODUCT = "ADDPRODUCT";
export const DELETEPRODUCT = "DELETEPRODUCT";
export const SHOWPRODUCTDETAILS = "SHOWPRODUCTDETAILS";


export const getprds = (product) => {
    return { type: GETALLPRODUCTS, payload: product }
}


export const addPrdt = (product) => {
    return { type: ADDPRODUCT, payload: product }
}


export const getProducts = ()=>{
    return dispatch => {
        productsApi.getAllProducts()
            .then(res => dispatch(getprds(res.data)))
            .catch(console.error);
    }
}



export const addProduct = (product, token) => {
    return dispatch => {
        productsApi.addProduct(product, token)
            .then(res => dispatch(addPrdt(res.data)))
            .catch(console.error);
    }
}
