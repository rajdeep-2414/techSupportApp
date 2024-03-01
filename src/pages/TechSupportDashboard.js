


// import React, { useContext, useState } from 'react';
// import { TicketContext } from '../context/ticketContext';

// const TechSupportDashboard = ({ loggedInTechSupport }) => {
//   const { tickets, resolveTicket } = useContext(TicketContext);
//   const [selectedTechSupport, setSelectedTechSupport] = useState(loggedInTechSupport);

//   const handleResolve = (ticketId) => {
//     resolveTicket(ticketId);
//   };

//   const filteredTickets = tickets.filter(ticket => ticket.assignedTo === selectedTechSupport);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl flex justify-center  font-bold mb-4">Tech Support Dashboard</h2>
//       <select value={selectedTechSupport} onChange={(e) => setSelectedTechSupport(e.target.value)} className="mb-4 justify-center ">
//         {['Tech Support 1', 'Tech Support 2', 'Tech Support 3'].map((techSupport, index) => (
//           <option key={index} value={techSupport}>{techSupport}</option>
//         ))}
//       </select>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredTickets.map((ticket) => (
//           <div key={ticket.id} className="border border-gray-200 p-4">
//             <h3 className="text-xl font-semibold mb-2">{ticket.title}</h3>
//             <p className="text-gray-600 mb-2">{ticket.description}</p>
//             <p>Comment: {ticket.reply}</p> {/* Display the reply text here */}

//             <p className={`text-sm ${ticket.resolved ? 'text-green-600' : 'text-yellow-600'}`}>
//               Status: {ticket.resolved ? 'Resolved' : 'Pending'}
//             </p>
//             {!ticket.resolved && (
//               <button
//                 onClick={() => handleResolve(ticket.id)}
//                 className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
//               >
//                 Resolve
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechSupportDashboard;


import React, { useContext, useState } from 'react';
import { TicketContext } from '../context/ticketContext';

const TechSupportDashboard = ({ loggedInTechSupport }) => {
  const { tickets, resolveTicket } = useContext(TicketContext);
  const [selectedTechSupport, setSelectedTechSupport] = useState(loggedInTechSupport);

  const handleResolve = (ticketId) => {
    resolveTicket(ticketId);
  };

  const filteredTickets = tickets.filter(ticket => ticket.assignedTo === selectedTechSupport);

  return (
    <div className="p-4">
      <h2 className="text-2xl flex justify-center font-bold mb-4">Tech Support Dashboard</h2>
      <div className="flex justify-center mb-4"> {/* Apply justify-center to center the dropdown */}
        <select value={selectedTechSupport} onChange={(e) => setSelectedTechSupport(e.target.value)} className="">
          {['Tech Support 1', 'Tech Support 2', 'Tech Support 3'].map((techSupport, index) => (
            <option key={index} value={techSupport}>{techSupport}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTickets.map((ticket) => (
          <div key={ticket.id} className="border border-gray-200 p-4">
            <h3 className="text-xl font-semibold mb-2">{ticket.title}</h3>
            <p className="text-gray-600 mb-2">{ticket.description}</p>
            <p>Comment: {ticket.reply}</p> {/* Display the reply text here */}

            <p className={`text-sm ${ticket.resolved ? 'text-green-600' : 'text-yellow-600'}`}>
              Status: {ticket.resolved ? 'Resolved' : 'Pending'}
            </p>
            {!ticket.resolved && (
              <button
                onClick={() => handleResolve(ticket.id)}
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Resolve
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSupportDashboard;
