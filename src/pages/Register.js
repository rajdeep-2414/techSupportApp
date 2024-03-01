import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the backend
      const response = await axios.post('http://localhost:8090/api/users', {
        username,
        password,
        type
      });

      console.log('Response from server:', response.data);
      setUsername('');
      setPassword('');
      setType('');
    } catch (error) {
      console.error('Error registering user:', error);
      // Optionally, you can handle error response here (e.g., show an error message to the user)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium">User Type:</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select User Type</option>
              <option value="user">User</option>
              <option value="tech support">Tech Support</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
