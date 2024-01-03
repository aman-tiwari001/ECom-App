import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { loginUserReducer } from './authSlice';
import { loginUser } from './authApi';

const Login = ({ setProgress }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleUserLogin = async () => {
    // toasting when field are empty
    if (!credentials.username || !credentials.password) {
      toast.error('Enter username and password to continue!');
      return;
    }
    setProgress(30);
    try {
      // fetching user and dispatching to redux store
      const user = await loginUser(credentials);
      dispatch(loginUserReducer(user));
      localStorage.setItem('login_token', user.token);
      navigate('/');
      toast.success('User logged in!');
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setProgress(100);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-white text-center text-3xl mb-3">ECom App</h1>
        <img
          className="mx-auto h-10 w-auto"
          src="/logo.png"
          alt="Your Company"
        />
        <h2 className="text-white mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleUserLogin}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log In
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-md text-gray-300">
          Use <b>kminchelle</b> as username and <b>0lelplR</b> as password to
          login!
        </p>
      </div>
    </div>
  );
};

export default Login;
