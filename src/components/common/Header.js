// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ logout }) => { // Destructure the logout function from props
  const handleLogout = () => {
    logout(); // Call the logout function when the button is clicked
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Support System</Link>
        <ul className="flex space-x-4">
          <li><Link to="/register" className="text-white">Register</Link></li>
          <li><Link to="/login" className="text-white">Login</Link></li>
          <li><Link to="/user" className="text-white">User Dashboard</Link></li>
          <li><Link to="/tech-support" className="text-white">Tech Support Dashboard</Link></li>
          <li><Link to="/admin" className="text-white">Admin Dashboard</Link></li>
          <li><button className="text-red-500" onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
