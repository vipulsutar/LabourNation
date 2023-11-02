import React from 'react';
import { Link } from 'react-router-dom';

const login = () =>  {
  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    window.alert('An email has been sent to reset your password.');
  };

  return (
    <body className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-16 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to='/market'>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </Link>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
              onClick={handleForgotPasswordClick} // Add the onClick handler
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </body>
  );
}

export default login;
