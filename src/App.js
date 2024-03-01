// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/authContext';
// import { TicketProvider } from './context/ticketContext';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import UserDashboard from './pages/UserDashboard';
// import TechSupportDashboard from './pages/TechSupportDashboard';
// import AdminDashboard from './pages/AdminDashboard';
// import Header from './components/common/Header'; 
// import TicketForm from './components/user/TicketForm';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <TicketProvider> 
//           <div> 
//             <Header />
//             <Routes>
//               <Route exact path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/user" element={<UserDashboard />} />
//               <Route path="/tech-support" element={<TechSupportDashboard />} />
//               <Route path="/admin" element={<AdminDashboard />} />
//               <Route path="/create-ticket" element={<TicketForm />} />
//             </Routes>
//           </div>
//         </TicketProvider>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

import React ,{ useState }from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/authContext';
import { TicketProvider } from './context/ticketContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import TechSupportDashboard from './pages/TechSupportDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Header from './components/common/Header'; 
import TicketForm from './components/user/TicketForm';

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

    const handleLoginSuccess = (loggedInUsername) => {
      setisAuthenticated(true);
  }; 

  const handleLogout = () => {
    setisAuthenticated(false);
  };
  
  const UnauthenticatedMessage = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold text-center">Please log in to access this page.</h1>
      </div>
    );
  };
  

  return (
    <Router>
      <AuthProvider>
      <TicketProvider>
        <div> 
          <Header logout={handleLogout} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={<Register />} />
            {(isAuthenticated === true) ? (<>
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/tech-support" element={<TechSupportDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/create-ticket" element={<TicketForm />} />
            </>):(<Route path="*" element={<UnauthenticatedMessage />} />)}
          </Routes>
        </div>
         </TicketProvider>
      </AuthProvider>
    </Router>
  );
}


export default App;

