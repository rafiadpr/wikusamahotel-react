import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User/User";
import Admin from "./pages/User/Admin";
import Resepsionis from "./pages/User/Resepsionis";
import Dashboard from "./pages/User/Dashboard";
import Reservations from "./pages/Tamu/Reservations";
import Rooms from "./pages/Tamu/Rooms";
import Check from "./pages/Tamu/Check";

function App() {
  const location = useLocation();
  const [role, setRole] = useState("");
  const handleLogin = (userRole) => {
    setRole(userRole);
  };

  return (
    <>
      <div className="App">
        {/* {role ? <Dashboard role={role} /> : <Login handleLogin={handleLogin} />} */}
        {location.pathname !== "/Login" &&
          location.pathname !== "/login" &&
          location.pathname !== "/User" &&
          location.pathname !== "/Admin" &&
          location.pathname !== "/Resepsionis" &&
          location.pathname !== "*" && <Navbar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/User" element={<User />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Resepsionis" element={<Resepsionis />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="Check" element={<Check />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reservations" element={<Reservations />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
