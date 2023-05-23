import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiUsers, FiLogOut, FiBook, FiLayers } from "react-icons/fi";

function Resepsionis() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("resepsionis");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex flex-col sm:w-64 sm:flex-shrink-0 bg-gray-800 sm:h-screen">
        <div className="flex items-center justify-center sm:h-20 border-b">
          <h1 className="text-white font-bold text-xl">Dashboard</h1>
        </div>
        <div className="flex flex-col p-4">
          <a
            href="/"
            className="text-gray-300 hover:text-white py-2 flex items-center"
          >
            <FiHome className="mr-2" />
            <span>Beranda</span>
          </a>
          <a
            href="Pemesanan"
            className="text-gray-300 hover:text-white py-2 flex items-center"
          >
            <FiBook className="mr-2" />
            <span>Reservasi</span>
          </a>
          <button
            className="text-gray-300 hover:text-white py-2 flex items-center"
            onClick={handleLogout}
          >
            <FiLogOut className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
  )
}

export default Resepsionis