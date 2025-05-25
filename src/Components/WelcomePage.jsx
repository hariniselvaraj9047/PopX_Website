import React from 'react';

const WelcomePage = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
    <div className="max-w-md w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to PopX</h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="space-y-4">
        <button
          onClick={() => onNavigate('signup')}
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
        >
          Create Account
        </button>
        <button
          onClick={() => onNavigate('login')}
          className="w-full bg-gradient-to-r from-purple-300 to-purple-400 hover:from-purple-400 hover:to-purple-500 text-purple-800 
          font-semibold py-4 px-6 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  </div>
);

export default WelcomePage;