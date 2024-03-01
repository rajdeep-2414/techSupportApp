

// import React, { useContext, useState } from 'react';
// import { TicketContext } from '../context/ticketContext';

// const AdminDashboard = () => {
//   const { tickets, resolveTicket, assignTechSupport } = useContext(TicketContext);
//   const [selectedTechSupports, setSelectedTechSupports] = useState({});

//   const handleAssignTechSupport = (ticketId, selectedTechSupport) => {
//     setSelectedTechSupports({ ...selectedTechSupports, [ticketId]: selectedTechSupport });
//     assignTechSupport(ticketId, selectedTechSupport);
// };


//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
//       <ul>
//         {tickets.map((ticket) => (
//           <li key={ticket.id} className="border border-gray-200 p-4 mb-4">
//             <div>
//               <h3 className="text-xl font-semibold mb-2">{ticket.title}</h3>
//               <p className="text-gray-600 mb-2">{ticket.description}</p>
//               <p className={`text-sm ${ticket.resolved ? 'text-green-600' : 'text-yellow-600'}`}>
//                 Status: {ticket.resolved ? 'Resolved' : 'Pending'}
//               </p>
//               <select
//                 value={selectedTechSupports[ticket.id] || ''}
//                 onChange={(e) => handleAssignTechSupport(ticket.id, e.target.value)}
//                 className="mb-2"
//               >
//                 <option value="">Assign Tech Support</option>
//                 {['Tech Support 1', 'Tech Support 2', 'Tech Support 3'].map((techSupport, index) => (
//                   <option key={index} value={techSupport}>{techSupport}</option>
//                 ))}
//               </select>
//               {!ticket.resolved && (
//                 <button onClick={() => resolveTicket(ticket.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Resolve Ticket
//                 </button>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useContext, useState } from 'react';
import { TicketContext } from '../context/ticketContext';

const AdminDashboard = () => {
  const { tickets, resolveTicket, assignTechSupport } = useContext(TicketContext);
  const [selectedTechSupports, setSelectedTechSupports] = useState({});

  const handleAssignTechSupport = (ticketId, selectedTechSupport) => {
    setSelectedTechSupports({ ...selectedTechSupports, [ticketId]: selectedTechSupport });
    assignTechSupport(ticketId, selectedTechSupport);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl flex justify-center  font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border border-gray-200 p-4">
            <h3 className="text-xl font-semibold mb-2">{ticket.title}</h3>
            <p className="text-gray-600 mb-2">{ticket.description}</p>
            <p className={`text-sm ${ticket.resolved ? 'text-green-600' : 'text-yellow-600'}`}>
              Status: {ticket.resolved ? 'Resolved' : 'Pending'}
            </p>
            <select
              value={selectedTechSupports[ticket.id] || ''}
              onChange={(e) => handleAssignTechSupport(ticket.id, e.target.value)}
              className="mb-2"
            >
              <option value="">Assign Tech Support</option>
              {['Tech Support 1', 'Tech Support 2', 'Tech Support 3'].map((techSupport, index) => (
                <option key={index} value={techSupport}>{techSupport}</option>
              ))}
            </select>
            {!ticket.resolved && (
              <button onClick={() => resolveTicket(ticket.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
                Resolve Ticket
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

