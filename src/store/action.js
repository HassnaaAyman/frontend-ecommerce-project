// import productsApi from '../Api/product';
const axios = require('axios');
const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ecommerce-backend-project.herokuapp.com';


export const ADDPRODUCT = "ADDPRODUCT";
export const DELETEPRODUCT = "DELETEPRODUCT";
export const SHOWPRODUCTDETAILS = "SHOWPRODUCTDETAILS";

export const addPrdt = (product) => {
    return { type: ADDPRODUCT, payload: product }
}



export const addProductToList = (product) => {
    return dispatch => {
        axios.post(`${baseUrl}/products`, product, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            dispatch(addPrdt(res.data));
        })
    }
}


