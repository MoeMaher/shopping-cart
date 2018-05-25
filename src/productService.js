/**
 * the service responsible for external requests
 */

import axios from 'axios';

// retrieving the products from the server.
export const getProducts = ()=> {
    return axios.get('https://faker-api-yczfsfkfcd.now.sh/api/products');
}
