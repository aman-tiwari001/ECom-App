import axios from 'axios';

// POST - https://dummyjson.com/auth/login - For user login

export const loginUser = async (credentials) => {
  const userData = await axios.post(
    'https://dummyjson.com/auth/login',
    credentials,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return userData;
};

// let { data } = await loginUser({
//   username: 'kminchelle',
//   password: '0lelplR',
// });

// console.log(data);
