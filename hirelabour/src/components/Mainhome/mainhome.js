import React from 'react';

const Homepage = () => {
  return (
    <div style={{ background: 'linear-gradient(180deg, #EBF4FE 0%, #F3F4F6 100%)' }}>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Welcome to our website</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Find the best labour for your project
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide the best labour hiring services for your college projects. Our team of experts will help you find the right person for the job.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
</div>
  );
};

export default Homepage;
