// // TicketList.js
// import React, { useContext } from 'react';
// import { TicketContext } from '../context/ticketContext';

// const TicketList = () => {
//   const { tickets, resolveTicket } = useContext(TicketContext);

//   const handleResolve = (ticketId) => {
//     // Call the resolveTicket function from the context to mark the ticket as resolved
//     resolveTicket(ticketId);
//   };

//   return (
//     <div>
//       <h2>Ticket List</h2>
//       <ul>
//         {tickets.map((ticket) => (
//           <li key={ticket.id} className="border-b border-gray-200 py-4">
//             <div>
//               <h3 className="text-lg font-semibold">{ticket.title}</h3>
//               <p className="text-gray-600">{ticket.description}</p>
//               <p>Status: <span className={ticket.resolved ? "text-green-600" : "text-yellow-600"}>{ticket.resolved ? 'Resolved' : 'Pending'}</span></p>
//               {!ticket.resolved && (
//                 <button onClick={() => handleResolve(ticket.id)} className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Resolve</button>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TicketList;


// TicketList.js
import React, { useContext } from 'react';
import { TicketContext } from '../context/ticketContext';

const TicketList = () => {
  const { tickets, resolveTicket } = useContext(TicketContext);

  const handleResolve = (ticketId) => {
    resolveTicket(ticketId);
  };

  return (
    <div>
      <h2>Ticket List</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} className="border-b border-gray-200 py-4">
            <div>
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <p className="text-gray-600">{ticket.description}</p>

              <p>Status: <span className={ticket.resolved ? "text-green-600" : "text-yellow-600"}>{ticket.resolved ? 'Resolved' : 'Pending'}</span></p>
              {!ticket.resolved && (
                <div>
                  <button onClick={() => handleResolve(ticket.id)} className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Resolve</button>
                  <p>Reply: {ticket.reply}</p> {/* Display the reply text here */}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
