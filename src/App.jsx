import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Kamar from "./pages/User/Kamar";
import Reservasi from "./pages/User/Reservasi";
import TipeKamar from "./pages/User/TipeKamar";
import User from "./pages/User/User";
import Admin from "./pages/User/Admin";
import Resepsionis from "./pages/User/Resepsionis";
import Dashboard from "./pages/User/Dashboard";
import Reservations from "./pages/Tamu/Reservations";
import Rooms from "./pages/Tamu/Rooms";
import Check from "./pages/Tamu/Check";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        {location.pathname !== "/Login" &&
          location.pathname !== "/login" &&
          location.pathname !== "/User" &&
          location.pathname !== "/Kamar" &&
          location.pathname !== "/Reservasi" &&
          location.pathname !== "/TipeKamar" &&
          location.pathname !== "/Admin" &&
          location.pathname !== "/Resepsionis" &&
          location.pathname !== "*" && <Navbar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Kamar" element={<Kamar />} />
          <Route path="/Reservasi" element={<Reservasi />} />
          <Route path="/TipeKamar" element={<TipeKamar />} />
          <Route path="/User" element={<User />} />
          <Route path="/Resepsionis" element={<Resepsionis />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="Check" element={<Check />} />
          <Route path="/Reservations" element={<Reservations />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
