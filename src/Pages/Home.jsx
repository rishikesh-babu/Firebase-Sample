import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-[100dvh] flex items-center justify-center text-white p-6">
      <div className="rounded-2xl shadow-xl w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-gray-300">Please login or sign up to continue</p>

        <div className="flex flex-col gap-4 mt-6">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl text-lg font-semibold transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-lg font-semibold transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

