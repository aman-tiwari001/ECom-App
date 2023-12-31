import axios from 'axios';

export const getSingleProduct = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`, {
    headers: 'application/json',
  });
  return res.data;
};
