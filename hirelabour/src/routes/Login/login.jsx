
import React from 'react';
import { Link } from 'react-router-dom';

const login = () =>  {
  return (
    <body class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white p-16 rounded shadow-md w-96">
      <h2 class="text-2xl font-bold mb-6">Login</h2>
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="flex items-center justify-between">
          <Link to='/market'>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          </Link>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/"
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