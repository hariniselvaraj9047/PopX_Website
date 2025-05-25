

// import React, { useState } from 'react';

// const AccountPage = ({ user }) => {
//   const [profileImage, setProfileImage] = useState(user?.image || '');

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//       // You can also send this file to a backend or Firebase here
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
//       <div className="flex items-center space-x-4">
//         <div className="relative">
//           <img
//             src={profileImage || 'https://via.placeholder.com/150'}
//             alt="Profile"
//             className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
//           />
//           <label className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer">
//             <svg
//               className="w-4 h-4 text-white"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M4 13V7a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2zm8.707-4.293a1 1 0 00-1.414 0L10 10.586 9.707 10.293a1 1 0 00-1.414 1.414l1 1a1 1 0 001.414 0l2-2a1 1 0 000-1.414z" />
//             </svg>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="hidden"
//             />
//           </label>
//         </div>
//         <div>
//           <h3 className="text-lg font-bold">{user?.name}</h3>
//           <p className="text-gray-500">{user?.emailAddress}</p>
//         </div>
//       </div>
//       <p className="mt-4 text-gray-600 text-sm">
//         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//         eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
//       </p>
//     </div>
//   );
// };

// export default AccountPage;

import React, { useState } from 'react';

const AccountPage = ({ user }) => {
  const defaultImage = 'https://i.pravatar.cc/150?img=12'; // Default avatar

  const [profileImage, setProfileImage] = useState(user?.image || defaultImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      // Optional: Upload this file to backend or Firebase here
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
          />
          <label className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 13V7a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2zm8.707-4.293a1 1 0 00-1.414 0L10 10.586 9.707 10.293a1 1 0 00-1.414 1.414l1 1a1 1 0 001.414 0l2-2a1 1 0 000-1.414z" />
            </svg>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
        <div>
          <h3 className="text-lg font-bold">{user?.fullName }</h3>
          <p className="text-gray-500">{user?.emailAddress }</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-sm">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
      </p>
    </div>
  );
};

export default AccountPage;