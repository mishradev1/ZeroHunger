import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock Donation History Data
const mockDonationHistory = [
  {
    id: 1,
    date: '2024-10-01',
    foodType: 'Vegetables',
    quantity: '10 kg',
    status: 'Delivered',
  },
  {
    id: 2,
    date: '2024-09-25',
    foodType: 'Rice',
    quantity: '5 kg',
    status: 'In Transit',
  },
  {
    id: 3,
    date: '2024-09-20',
    foodType: 'Bread',
    quantity: '20 loaves',
    status: 'Delivered',
  },
];

const Sidebar = () => {
  return (
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
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-500 p-4 flex justify-between items-center z-30">
      <div className="text-white font-bold text-lg">
        ZeroHunger
      </div>
      <div>
        <Link to="/" className=" text-white px-4 py-2 rounded-full hover:text-black hover:bg-neutral-200 transition duration-200">
          Sign out as Donor
        </Link>
      </div>
    </nav>
  );
};

// DonationHistory Component
const DonationHistory = () => {
  const [donationHistory, setDonationHistory] = useState([]);

  // Simulating fetching data from backend
  useEffect(() => {
    setDonationHistory(mockDonationHistory);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar /> {/* Navbar at the top */}
      <div className="flex pt-16"> {/* Adjusts for fixed navbar */}
        <Sidebar /> {/* Sidebar on the left */}
        <div className="flex-grow p-6 ml-64"> {/* Ensures content is spaced to the right of the sidebar */}
          <h1 className="text-4xl font-bold mb-6 text-blue-500">Donation History</h1>
          <div className="bg-gray-50 shadow rounded-lg p-4">
            {donationHistory.length === 0 ? (
              <p>No donations found.</p>
            ) : (
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="text-left">
                    <th className="border-b py-2 px-4">Date</th>
                    <th className="border-b py-2 px-4">Food Type</th>
                    <th className="border-b py-2 px-4">Quantity</th>
                    <th className="border-b py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donationHistory.map((donation) => (
                    <tr key={donation.id} className="border-t">
                      <td className="py-2 px-4">{donation.date}</td>
                      <td className="py-2 px-4">{donation.foodType}</td>
                      <td className="py-2 px-4">{donation.quantity}</td>
                      <td className="py-2 px-4">{donation.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;