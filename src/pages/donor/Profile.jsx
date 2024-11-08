import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 

// Mock donor data
const mockDonorData = {
  name: 'Jane Doe',
  email: 'janedoe@example.com',
  phone: '(415) 555-2671',
  mobile: '(415) 555-8729',
  address: 'Silicon Valley, San Jose, CA',
  pincode: '95101',
  profilePicture: '', 
};

const DonorProfile = () => {
  const [user, setUser] = useState(mockDonorData);
  const [isEditing, setIsEditing] = useState(false);

  // Handle input change for user details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Frozen Navbar */}
      <nav className="bg-blue-500 p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-white font-bold text-lg">ZeroHunger</div>
        <div>
          <Link 
            to="/" 
            className="text-white px-4 py-2 rounded-full hover:text-black hover:bg-neutral-200 transition duration-200"
          >
            Sign out as Donor
          </Link>
        </div>
      </nav>

      <div className="flex flex-grow">
        {/* Sticky Sidebar */}
        <div className="fixed w-64 bg-blue-500 text-white h-screen flex flex-col p-4" style={{ top: '60px' }}>
          <nav className="flex flex-col space-y-4">
            <Link to="/donor/dashboard" className="hover:bg-blue-600 p-2 rounded">
              Dashboard Overview
            </Link>
            <Link to="/donor/history" className="hover:bg-blue-600 p-2 rounded">
              Donation History
            </Link>
            <Link to="/donor/new-donation" className="hover:bg-blue-600 p-2 rounded">
              Schedule Donation
            </Link>
            <Link to="/donor/profile" className="hover:bg-blue-600 p-2 rounded">
              Profile
            </Link>
          </nav>
        </div>

        {/* Main Content with left margin for sidebar */}
        <div className="flex-grow ml-64 p-6">
          <h1 className="text-3xl font-bold mb-6 text-blue-500">Donor Profile</h1>

          {/* Profile Section */}
          <div className="bg-white shadow rounded-lg p-6 flex">
            {/* Left Section: Profile Icon and Basic Info */}
            <div className="w-1/3 flex flex-col items-center">
              {user.profilePicture ? (
                <img 
                  src={user.profilePicture} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full mb-4" 
                />
              ) : (
                <FaUserCircle className="text-gray-400 text-6xl mb-4" /> // Placeholder profile icon
              )}
              <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-700">Donor</p>
              <p className="text-gray-700">{user.address}</p>
            </div>

            {/* Right Section: Editable User Info */}
            <div className="w-2/3 ml-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full border ${isEditing ? 'bg-white' : 'bg-gray-100'} rounded p-2`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full border ${isEditing ? 'bg-white' : 'bg-gray-100'} rounded p-2`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full border ${isEditing ? 'bg-white' : 'bg-gray-100'} rounded p-2`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full border ${isEditing ? 'bg-white' : 'bg-gray-100'} rounded p-2`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full border ${isEditing ? 'bg-white' : 'bg-gray-100'} rounded p-2`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={user.pincode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full border ${isEditing ? 'bg-white' : 'bg-gray-100'} rounded p-2`}
                  />
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={handleEditClick}
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-200"
              >
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;