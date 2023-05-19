import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiUsers, FiLogOut, FiBook, FiLayers } from "react-icons/fi";

function Admin() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("admin");
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
          <a
            href="Pengguna"
            className="text-gray-300 hover:text-white py-2 flex items-center"
          >
            <FiUser className="mr-2" />
            <span>Pengguna</span>
          </a>
          <a
            href="Kamar"
            className="text-gray-300 hover:text-white py-2 flex items-center"
          >
            <FiLayers className="mr-2" />
            <span>Kamar</span>
          </a>
          <a
            href="Tipe Kamar"
            className="text-gray-300 hover:text-white py-2 flex items-center"
          >
            <FiUsers className="mr-2" />
            <span>Tipe Kamar</span>
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

export default Admin