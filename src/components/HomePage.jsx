import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg"><Link to="/">ZeroHunger</Link></div>
      <div>
        <Link to="/" className="text-white mx-2 hover:underline hover: transition duration-200">Home</Link>
        <Link to="/about" className="text-white mx-2 hover:underline hover: transition duration-200">About</Link>
        <Link to="/contact" className="text-white mx-2 hover:underline hover: transition duration-200">Contact</Link>
        <Link to="/login" className="text-white mx-2 hover:bg-blue-400 transition duration-200 rounded-full px-4 py-2">Log in</Link>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {

  const images = [
    '/food.jpg',
    '/hunger.jpg',
    '/connect.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (nextImageIndex !== currentImageIndex) {
      const timer = setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
      }, 300); 

      return () => clearTimeout(timer);
    }
  }, [nextImageIndex, currentImageIndex]);

  const handleGetInvolved = () => {
    const roleSection = document.getElementById('role-selection');
    if (roleSection) {
      roleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-96 overflow-hidden bg-white">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white">Welcome to ZeroHunger</h1>
        <p className="mt-2 text-white">Tackling food wastage and feeding those in need with our decentralized initiative</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-400"
          onClick={handleGetInvolved}
        >
          Get Involved
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setNextImageIndex(index)}
            className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

// Donation Component
const Donation = () => {
  return (
    <div className="border p-4 rounded-lg text-center overflow-hidden w-96 h-112 bg-white">
      <Link to="/donor/signup" className="w-full">
        <img 
          src="/image-1.jpg" 
          alt="Donation" 
          className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105" 
        />
        <h2 className="text-2xl font-bold">Donor</h2>
        <p>Easily donate surplus food from your business, restaurant, or home.</p>
      </Link>
    </div>
  );
}

// Recipient Component
const Recipient = () => {
  return (
    <div className="border p-4 rounded-lg text-center overflow-hidden w-96 h-112 bg-white">
      <Link to="/recipient/signup" className="w-full">
        <img 
          src="/image-2.jpg" 
          alt="Recipient" 
          className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105" 
        />
        <h2 className="text-2xl font-bold">Recipient</h2>
        <p>Request food and receive timely donations for shelters, orphanages, and individuals in need.</p>
      </Link>
    </div>
  );
};

// Volunteer Component
const Volunteer = () => {
  return (
    <div className="border p-4 rounded-lg text-center overflow-hidden w-96 h-112 bg-white">
      <Link to="/volunteer/signup" className="w-full">
        <img 
          src="/image-3.jpg" 
          alt="Recipient" 
          className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105" 
        />
        <h2 className="text-2xl font-bold">Volunteer</h2>
        <p>Join our team of delivery partners and help deliver food to those in need.</p>
      </Link>
    </div>
  );
};

// Overview Component
const Overview = () => {
  return (
    <div className="flex flex-col items-center text-black rounded-xl shadow-xl p-8 mt-10">
      {/* Centered Heading */}
      <h2 className="text-5xl font-extrabold mb-8 tracking-wide text-center drop-shadow-md">
        Redefining Generosity with <span className="text-blue-500">ZeroHunger</span>
      </h2>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start lg:space-x-8">
        {/* Left side: Image */}
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center">
          <img 
            src="/logo.jpg" 
            alt="Overview of ZeroHunger" 
            className="w-[600px] h-[400px] rounded-xl transition-transform duration-300 hover:scale-105 object-cover"
          />
        </div>

        {/* Right side: Text Content */}
        <div className="lg:w-1/2 w-full">
          <p className="mb-6 text-xl leading-relaxed tracking-wide">
            <strong>ZeroHunger</strong> is a decentralized platform revolutionizing the way we reduce food waste 
            and combat hunger. We bridge the gap between donors and recipients—be it restaurants, businesses, 
            or individuals—with ease and efficiency.
          </p>

          <p className="mb-6 text-lg">
            Beyond donations, we empower communities through education on sustainable practices and the importance 
            of minimizing food waste. Shelters, orphanages, and other individuals in need can easily make requests, 
            ensuring that excess food finds the people who need it the most—on time.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            Together, we aspire to foster a culture of sharing and giving, ensuring that <em>everyone</em> has access 
            to nutritious meals. Let’s create a world where food is shared, not wasted.
          </p>

          <Link to="/about">
            <button className="w-full lg:w-auto bg-blue-500 hover:bg-blue-400 text-white text-xl font-bold px-8 py-4 rounded-lg shadow-md transition-all transform hover:scale-105 duration-300">
              Join Us Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  console.log("HomePage rendered");
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />

      {/* Role Section with ID to scroll into */}
      <section id="role-selection" className="mt-8">
        <h1 className="text-4xl font-bold text-left p-6">Select your role as:</h1>
        <div className="flex justify-around p-4">
          <Donation />
          <Recipient />
          <Volunteer />
        </div>
      </section>

      <Overview />
    </div>
  );
};

export default HomePage;