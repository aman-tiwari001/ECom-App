import React, { useState } from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProtectedRoutes from './utils/ProtectedRoutes';
import LoadingBar from 'react-top-loading-bar';
import { Toaster } from 'react-hot-toast';

function App() {
  // state for top progress bar
  const [progress, setProgress] = useState(0);
  return (
    <>
      <LoadingBar
        color="#4F46E5"
        progress={progress}
        shadow={true}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setProgress={setProgress} />}
          />
          // protected routes - only logged in users can access
          <Route element={<ProtectedRoutes setProgress={setProgress} />}>
            <Route path="/" element={<Home setProgress={setProgress} />} />
            <Route
              path="/product-detail/:id"
              element={<ProductDetailPage setProgress={setProgress} />}
            />
            <Route
              path="/cart"
              element={<CartPage setProgress={setProgress} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
