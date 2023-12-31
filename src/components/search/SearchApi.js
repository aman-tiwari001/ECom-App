import axios from 'axios';

export const searchByQuery = async (query, limit) => {
  const res = await axios.get(`https://dummyjson.com/products/search?q=${query}&limit=${limit}`, {
    headers: 'application/json',
  });
  return res.data;
};
