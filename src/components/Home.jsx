import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <><div className="home bg-gray-900 text-gray-200 h-screen w-full flex flex-col items-center justify-between p-4">
      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 space-y-5">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-100">COCOMO SIMULATOR</h1>
          <p className="text-xl text-gray-400 mt-4">
            An application software for estimating software development.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-gray-700 rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4  decoration-gray-500">
            Introduction:
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The COCOMO Simulator is an application program that is used for cost estimation of software to be
            developed. Software cost estimation involves the determination of estimates of effort, development time, and
            cost of the software to be developed. The user rates 17 cost drivers and 5 scale drivers and provides the labor rate.
          </p>
        </div>

        {/* Functionalities Section */}
        <div className="bg-gray-700 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4  decoration-gray-500">
            Functionalities:
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-4">
            <li>
              <Link
                to="/function"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                CALCULATION OF FUNCTION POINT
              </Link>
            </li>
            <li>
              <Link
                to="/loc"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                CALCULATION OF SOURCE LINES OF CODES (SLOC)
              </Link>
            </li>
            <li>
              <Link
                to="/estimation"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                ESTIMATION OF EFFORT, DEVELOPMENT TIME, AND COST
              </Link>
            </li>
          </ul>
        </div>
      </div>


    </div>
      {/* Footer Section */}
      <footer className="w-full text-center  py-2 bg-gray-900  ">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} COCOMO-II Simulator. All rights reserved. Developed By Syed M. Taha
        </p>
      </footer></>
  );
};

export default Home;
