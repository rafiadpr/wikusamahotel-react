import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/User/Admin";
import Resepsionis from "./pages/User/Resepsionis";
import Dashboard from "./pages/User/Dashboard";
import AddPemesanan from "./pages/Tamu/AddPemesanan";
// import History from "./pages/Tamu/History";
// import Member from "./pages/Member";
// import Book from "./pages/Book";
// import Borrow from "./pages/Borrow";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        {location.pathname !== "/Login" &&
          location.pathname !== "/login" &&
          location.pathname !== "/Admin" &&
          location.pathname !== "/Resepsionis" &&
          location.pathname !== "*" && <Navbar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Resepsionis" element={<Resepsionis />} />
          {/* <Route path="Member" element={<Member />} />
          <Route path="Book" element={<Book />} />
          <Route path="Borrow" element={<Borrow />} /> */}
          {/* <Route path="History" element={<History />} />  */}
          <Route path="/Register" element={<Register />} />
          <Route path="/AddPemesanan" element={<AddPemesanan />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
