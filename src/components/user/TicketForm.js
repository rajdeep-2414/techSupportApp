import React, { useState, useContext } from 'react';
import { TicketContext } from '../../context/ticketContext';
import { useNavigate } from 'react-router-dom';


const TicketForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const { addTicket } = useContext(TicketContext);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = { title, description, file };
    addTicket(newTicket);
    setTitle('');
    setDescription('');
    setFile(null);
    navigate('/user');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Create Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">File Attachment:</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
