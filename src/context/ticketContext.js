
// import React, { createContext, useState } from 'react';

// const TicketContext = createContext();

// const TicketProvider = ({ children }) => {
//   const [tickets, setTickets] = useState([]);

//   const addTicket = (ticketData) => {
//     // Generate a unique id for the new ticket
//     const newTicket = { ...ticketData, id: tickets.length + 1, resolved: false };
//     setTickets([...tickets, newTicket]);
//   };

//   const resolveTicket = (ticketId) => {
//     // Your logic to resolve a ticket here
//     setTickets(tickets.map(ticket => 
//       ticket.id === ticketId ? { ...ticket, resolved: true } : ticket
//     ));
//   };

//   const assignTechSupport = (ticketId, techSupportId) => {
//     // Find the ticket in the tickets array by its ID
//     const updatedTickets = tickets.map(ticket => {
//         // If the ticket ID matches the provided ticketId, update the tech support ID
//         if (ticket.id === ticketId) {
//             return {
//                 ...ticket,
//                 techSupportId: techSupportId, // Assign the provided techSupportId to the ticket
//                 assignedTo: techSupportId // Update the assignedTo field with the techSupportId
//             };
//         }
//         // If the ticket ID doesn't match, return the ticket unchanged
//         return ticket;
//     });

//     // Update the tickets state with the updated array
//     setTickets(updatedTickets);
// };



//   return (
//     <TicketContext.Provider value={{ tickets, addTicket, resolveTicket , assignTechSupport}}>
//       {children}
//     </TicketContext.Provider>
//   );
// };

// export { TicketProvider, TicketContext };


// TicketProvider.js
import React, { createContext, useState } from 'react';

const TicketContext = createContext();

const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticketData) => {
    // Generate a unique id for the new ticket
    const newTicket = { ...ticketData, id: tickets.length + 1, resolved: false, reply: '' };
    setTickets([...tickets, newTicket]);
  };

  const resolveTicket = (ticketId) => {
    // Your logic to resolve a ticket here
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, resolved: true } : ticket
    ));
  };

  const assignTechSupport = (ticketId, techSupportId) => {
    // Find the ticket in the tickets array by its ID
    const updatedTickets = tickets.map(ticket => {
        // If the ticket ID matches the provided ticketId, update the tech support ID
        if (ticket.id === ticketId) {
            return {
                ...ticket,
                techSupportId: techSupportId, // Assign the provided techSupportId to the ticket
                assignedTo: techSupportId // Update the assignedTo field with the techSupportId
            };
        }
        // If the ticket ID doesn't match, return the ticket unchanged
        return ticket;
    });

    // Update the tickets state with the updated array
    setTickets(updatedTickets);
  };

  const replyToTicket = (ticketId, replyText) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          reply: replyText
        };
      }
      return ticket;
    });
    setTickets(updatedTickets);
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, resolveTicket, assignTechSupport, replyToTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export { TicketProvider, TicketContext };
