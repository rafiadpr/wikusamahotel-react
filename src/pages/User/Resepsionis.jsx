import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiLogOut, FiBook } from "react-icons/fi";
import { toast } from "react-hot-toast";
import axios from "axios";

function Resepsionis() {
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/pemesanan/check", data).then((e) => {
      const message = e.data.message;

      if (message === "Room Available") {
        return toast.success("Room Available");
      } else {
        return toast.error("Room Not Available");
      }
    });
  };
  console.log(data);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value + " 12:00:00" });
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("resepsionis");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-row">
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
              href="Reservasii"
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
        <div className="container mx-auto p-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Check Availability</h3>
          <form
            action="post"
            onSubmit={(e) => handleSubmit(e)}
            className="mb-4"
          >
            <input
              type="date"
              name="tgl_check_in"
              id=""
              onChange={(e) => handleChange(e)}
              className="border border-gray-300 rounded p-2 mb-4"
            />
            <input
              type="date"
              name="tgl_check_out"
              id=""
              onChange={(e) => handleChange(e)}
              className="border border-gray-300 rounded p-2 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Check
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Resepsionis;
