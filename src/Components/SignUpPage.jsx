import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const SignUpPage = ({ onSignUp, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: Date.now() };
    onSignUp(newUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create your</h2>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">PopX account</h2>
          </div>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-purple-600 text-sm font-medium mb-2">Full Name*</label>
              <input
                type="text"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-purple-600 text-sm font-medium mb-2">Phone Number*</label>
              <input
                type="tel"
                placeholder="123-456-7890"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-purple-600 text-sm font-medium mb-2">Email Address*</label>
              <input
                type="email"
                placeholder="example@mail.com"
                value={formData.emailAddress}
                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-purple-600 text-sm font-medium mb-2">Password*</label>
              <input
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-purple-600 text-sm font-medium mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Your company"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Agency Radio */}
            <div>
              <label className="block text-purple-600 text-sm font-medium mb-4">Are you an Agency?*</label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="agency"
                    checked={formData.isAgency === true}
                    onChange={() => setFormData({ ...formData, isAgency: true })}
                    className="w-5 h-5 text-purple-600 border-2 border-purple-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="agency"
                    checked={formData.isAgency === false}
                    onChange={() => setFormData({ ...formData, isAgency: false })}
                    className="w-5 h-5 text-purple-600 border-2 border-purple-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
            //   className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
            // >
              className="w-full bg-gray-400  hover:bg-purple-700 text-white font-semibold py-4 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Create Account
            </button>

            
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;