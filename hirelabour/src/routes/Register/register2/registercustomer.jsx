import React from "react";
import { Link } from "react-router-dom";

const RegisterCustomer = () => {
  return (
    <div className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h2 className="text-center text-3xl font-bold mb-5">Register as Customer</h2>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3 mb-3">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      required
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>

                  <div className="w-full px-3 mb-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>

                  <div className="w-full px-3 mb-3">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="new-password"
                      required
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Link to='/login'>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterCustomer;
