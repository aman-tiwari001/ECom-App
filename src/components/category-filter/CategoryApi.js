import axios from 'axios';

export const getCategories = async () => {
    const res = await axios.get('https://dummyjson.com/products/categories', {
        headers: 'application/json',
    });
    return res.data;
}