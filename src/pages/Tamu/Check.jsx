import React, { useState } from "react";
import axios from "axios";

function Check() {
  const [tgl_check_in, setTglCheckIn] = useState("");
  const [tgl_check_out, setTglCheckOut] = useState("");
  const [availability, setAvailability] = useState("");

  const handleTglCheckInChange = (event) => {
    setTglCheckIn(event.target.value);
  };

  const handleTglCheckOutChange = (event) => {
    setTglCheckOut(event.target.value);
  };

  const handleCheckAvailability = () => {
    const modifiedTgl_check_in = tgl_check_in + " 12:00:00";
    const modifiedTgl_check_out = tgl_check_out + " 12:00:00";
    axios
      .post("http://localhost:8000/pemesanan/check", {
        tgl_check_in: modifiedTgl_check_in,
        tgl_check_out: modifiedTgl_check_out,
      })
      .then((response) => {
        const availability = response.data.available
          ? "Available"
          : "Not Available";
        setAvailability(availability);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Periksa Ketersediaan Kamar</h1>
      <div className="mb-4">
        <label className="block">Check-in Date:</label>
        <input
          type="date"
          value={tgl_check_in}
          onChange={handleTglCheckInChange}
          className="border rounded px-2 py-1 w-40"
        />
      </div>
      <div className="mb-4">
        <label className="block">Check-out Date:</label>
        <input
          type="date"
          value={tgl_check_out}
          onChange={handleTglCheckOutChange}
          className="border rounded px-2 py-1 w-40"
        />
      </div>
      <button
        onClick={handleCheckAvailability}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Periksa
      </button>
      {availability ? (
        <p className="mt-4">
          Kamar {availability} dari {tgl_check_in} hingga {tgl_check_out}
        </p>
      ) : null}
    </div>
  );
}

export default Check;
