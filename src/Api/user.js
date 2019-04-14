const axios = require('axios');
const baseUrl = process.env.REACT_APP_BASE_URL || 'https://ecommerce-backend-project.herokuapp.com'

module.exports = {

    register(user) {
        return axios.post(`${baseUrl}/users/`, user).then(res => res.data);
    },
    login(credentials) {
        return axios.post(`${baseUrl}/users/login`, credentials)
    }
}