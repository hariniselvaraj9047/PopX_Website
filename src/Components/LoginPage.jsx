import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const LoginPage = ({ onLogin, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Login to your PopX account</h2>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-purple-600 text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-purple-600 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-400  hover:bg-purple-700 text-white font-semibold py-4 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Login
            </button>
{/* "w-full  hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
              */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;