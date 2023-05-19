import React, { useState } from "react";
import axios from "axios";

function Check() {
  const [tgl_check_in, setTgl_check_in] = useState("");
  const [tgl_check_out, setTgl_check_out] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/pemesanan/check",
        { tgl_check_in, tgl_check_out }
      );
      // if (response.data !== null) {
      //   alert("Room Not Available");
      // } else {
      //   alert("Room Available");
      // }
      if (response.data === null || response.data.length === 0) {
        alert("Room Available");
      } else {
        alert("Room Not Available");
      }
    } catch (error) {
      alert("Failed to check availability. Please try again later.");
    }
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Check Room Availability</h2>
      <form onSubmit={handleCheckAvailability}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="check-in-date">
            Check-in date:
          </label>
          <input
            id="check-in-date"
            type="date"
            value={tgl_check_in}
            onChange={(e) => setTgl_check_in(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="check-out-date">
            Check-out date:
          </label>
          <input
            id="check-out-date"
            type="date"
            value={tgl_check_out}
            onChange={(e) => setTgl_check_out(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
}

export default Check;
