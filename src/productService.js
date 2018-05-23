import axios from 'axios';

export const getProducts = ()=> {
    return axios.get('https://faker-api-yczfsfkfcd.now.sh/api/products');
}
