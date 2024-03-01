// Login.js
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/authContext'; // Import the AuthContext
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = (props) => {
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isAuthenticated, setisAuthenticated] = useState(false);
  

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8090/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        const loggedInUsername = responseData.username;
        console.log("Username ",loggedInUsername);
        login({ loggedInUsername });
        navigate('/user');
        console.log('Login successful');
        props.onLoginSuccess(loggedInUsername); 
      } else {
        const errorResponse = await response.json();
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">Username:</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password:</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
