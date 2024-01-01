import React from 'react';
import Login from '../components/auth/Login';

const LoginPage = ({ setProgress }) => {
  return (
    <div className="bg-gray-900" style={{ height: '100vh' }}>
      <Login setProgress={setProgress} />
    </div>
  );
};

export default LoginPage;
