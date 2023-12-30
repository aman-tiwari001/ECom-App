import axios from 'axios';

export const fetchAllProducts = async () => {
    const res = await axios.get('https://dummyjson.com/products', {
      headers: 'application/json',
    });
    return res.data;
};

export const fetchAllProductsByFilter = async (filterObj) => {
  let queryStr = '';
  for (let i in filterObj) {
    queryStr = queryStr.concat(`${i}=${filterObj[i]}&`);
  }
  console.log('q string ', queryStr);
  return new Promise(async (resolve) => {
    const res = await fetch(`http://localhost:3000/products?${queryStr}`);
    const data = await res.json();
    resolve({ data });
  });
};
