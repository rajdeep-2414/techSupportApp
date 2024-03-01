
// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { TicketContext } from '../context/ticketContext';
// import TicketForm from '../components/user/TicketForm';

// const UserDashboard = () => {
//   const { tickets, resolveTicket, replyToTicket } = useContext(TicketContext);
//   const [replyText, setReplyText] = useState({});

//   const handleResolve = (ticketId) => {
//     resolveTicket(ticketId);
//   };

//   const handleReply = (ticketId) => {
//     replyToTicket(ticketId, replyText[ticketId]);
//     setReplyText({ ...replyText, [ticketId]: '' }); 
//   };

//   const handleReplyChange = (ticketId, text) => {
//     setReplyText({ ...replyText, [ticketId]: text });
//   };

//   return (
//     <div className="container mx-auto py-8 ml-2">
//       <h2 className="text-2xl font-semibold mb-4">UserDashboard</h2>
//       <h4 className="text-1xl  mb-4">Click here to Create ticket</h4>

//       <Link to="/create-ticket">
//         <button className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Create Ticket</button>
//       </Link>
//       <ul>
//         {tickets.map((ticket) => (
//           <li key={ticket.id} className="border-b border-gray-200 py-4">
//             <div>
//               <h3 className="text-lg font-semibold">{ticket.title}</h3>
//               <p className="text-gray-600">{ticket.description}</p>
//               <p>Status: <span className={ticket.resolved ? "text-green-600" : "text-yellow-600"}>{ticket.resolved ? 'Resolved' : 'Pending'}</span></p>
//               <br />
//               <p>Comment: {ticket.reply}</p> {/* Display the reply text here */}

//                   <input
//                     type="text"
//                     value={replyText[ticket.id] || ''}
//                     onChange={(e) => handleReplyChange(ticket.id, e.target.value)}
//                     placeholder="Type your reply here"
//                   />
//                   <button onClick={() => handleReply(ticket.id)} className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-indigo-600 mx-2">Reply</button>
//               {!ticket.resolved && (
//                 <>
//                   <button onClick={() => handleResolve(ticket.id)} className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600">Resolve</button>
                
//                 </>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//       {/* Additional functionality for users can be added here */}
//     </div>
//   );
// };

// export default UserDashboard;

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TicketContext } from '../context/ticketContext';
import TicketForm from '../components/user/TicketForm';

const UserDashboard = () => {
  const { tickets, resolveTicket, replyToTicket } = useContext(TicketContext);
  const [replyText, setReplyText] = useState({});

  const handleResolve = (ticketId) => {
    resolveTicket(ticketId);
  };

  const handleReply = (ticketId) => {
    replyToTicket(ticketId, replyText[ticketId]);
    setReplyText({ ...replyText, [ticketId]: '' });
  };

  const handleReplyChange = (ticketId, text) => {
    setReplyText({ ...replyText, [ticketId]: text });
  };

  return (
    <div className="container mx-auto py-8 ml-2">
      <h2 className="text-2xl flex justify-center font-semibold mb-4">UserDashboard</h2>
      <h4 className="text-1xl flex justify-center mb-4">Click here to Create ticket</h4>

      <div className="flex justify-center mb-4">
        <Link to="/create-ticket">
          <button className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Create Ticket</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tickets.map((ticket, index) => (
          <div key={ticket.id} className="border border-gray-200 p-4">
            <h3 className="text-lg font-semibold">{index + 1}. {ticket.title}</h3>
            <p className="text-gray-600">{ticket.description}</p>
            <p>Status: <span className={ticket.resolved ? "text-green-600" : "text-yellow-600"}>{ticket.resolved ? 'Resolved' : 'Pending'}</span></p>
            <p>Comment: {ticket.reply}</p> {/* Display the reply text here */}

            <input
              type="text"
              value={replyText[ticket.id] || ''}
              onChange={(e) => handleReplyChange(ticket.id, e.target.value)}
              placeholder="Type your reply here"
            />
            <button onClick={() => handleReply(ticket.id)} className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-indigo-600 mx-2">Reply</button>
            {!ticket.resolved && (
              <>
                <button onClick={() => handleResolve(ticket.id)} className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600">Resolve</button>
              </>
            )}
          </div>
        ))}
      </div>
      {/* Additional functionality for users can be added here */}
    </div>
  );
};

export default UserDashboard;


