const axios = require('axios');
const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

module.exports = {
    getAllProducts(product) {
        return axios.get(`${baseUrl}/products`, product).then(res => res.data);
    },
    addProduct(product, token) {
        return axios.post(`${baseUrl}/products`, product, { headers: { Authorization: token } })
    }
}