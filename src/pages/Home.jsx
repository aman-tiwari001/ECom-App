import React, { useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import CategoryFilter from '../components/category-filter/CategoryFilter';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('login_token')) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <NavBar />
      <CategoryFilter />
    </div>
  );
};

export default Home;
