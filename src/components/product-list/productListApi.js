import axios from 'axios';

export const fetchAllProducts = async (skip = 0) => {
    const res = await axios.get(`https://dummyjson.com/products?skip=${skip}`, {
      headers: 'application/json',
    });
    return res.data;
};

export const fetchAllProductsByFilter = async (filter) => {
    const res = await axios.get(`https://dummyjson.com/products/category/${filter}`, {
      headers: 'application/json',
    });
    return res.data;
};
