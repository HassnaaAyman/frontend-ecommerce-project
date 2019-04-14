const axios = require('axios');
const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ecommerce-backend-project.herokuapp.com';

module.exports = {
    getAllProducts() {
        return axios.get(`${baseUrl}/products`);
    },
    addProduct(product, token) {
        return axios.post(`${baseUrl}/products`, product, { headers: { Authorization: localStorage.getItem(token) } })
    },
    deleteProduct(id, token) {
        return axios.delete(`${baseUrl}/products/${id}`, { headers: { Authorization: localStorage.getItem(token) } });

    }
}