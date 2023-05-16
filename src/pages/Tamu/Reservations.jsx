import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reservations() {
  const [nomor_pemesanan, setNomor_pemesanan] = useState("");
  const [nama_pemesan, setNama_pemesan] = useState("");
  const [email_pemesan, setEmail_pemesan] = useState("");
  const [nama_tamu, setNama_tamu] = useState("");
  const [tgl_check_in, setTgl_check_in] = useState("");
  const [tgl_check_out, setTgl_check_out] = useState("");
  const [jumlah_kamar, setJumlah_kamar] = useState(1);
  const [id_tipe_kamar, setId_tipe_kamar] = useState("single");
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/pemesanan?tgl_check_in=${tgl_check_in}&tgl_check_out=${tgl_check_out}`
      );
      setAvailableRooms(response.data);
    } catch (error) {
      alert("Failed to check availability. Please try again later.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const reservationData = {
        nomor_pemesanan,
        nama_pemesan,
        email_pemesan,
        nama_tamu,
        tgl_check_in,
        tgl_check_out,
        jumlah_kamar,
        id_tipe_kamar,
      };
      const response = await axios.post(
        "http://localhost:8000/pemesanan",
        reservationData
      );
      alert(
        `Reservation created successfully! Reservation number: ${response.data.nomor_pemesanan}`
      );
      setNomor_pemesanan("");
      setNama_pemesan("");
      setNama_tamu("");
      setEmail_pemesan("");
      setTgl_check_in("");
      setTgl_check_out("");
      setJumlah_kamar(1);
      setId_tipe_kamar("");
    } catch (error) {
      alert("Failed to create reservation. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex items-center mx-auto justify-center px-8 py-2 dark:bg-gray-100 dark:text-gray-00 container">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          <div>
            <span>
              Get up to 50% off your first order + free shipping,&nbsp;
            </span>
            <a href="#" rel="noopener noreferrer" className="underline">
              sign up
            </a>
            today!
          </div>
          <a
            href="#"
            rel="noopener noreferrer"
            className="items-center gap-2 hidden md:flex"
          >
            <svg
              role="img"
              viewBox="0 0 22 22"
              className="fill-current h-4 w-4"
            >
              <path
                clipRule="evenodd"
                d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="hover:underline focus-visible:underline">
              Gift Cards
            </span>
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={nama_pemesan}
            onChange={(event) => setNama_pemesan(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email_pemesan}
            onChange={(event) => setEmail_pemesan(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Guest's Name:
          </label>
          <input
            type="text"
            id="name"
            value={nama_tamu}
            onChange={(event) => setNama_tamu(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="checkInDate"
            className="block text-gray-700 font-bold mb-2"
          >
            Check-in Date:
          </label>
          <input
            type="date"
            id="checkInDate"
            value={tgl_check_in}
            onChange={(event) => setTgl_check_in(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="checkOutDate"
            className="block text-gray-700 font-bold mb-2"
          >
            Check-out Date:
          </label>
          <input
            type="date"
            id="checkOutDate"
            value={tgl_check_out}
            onChange={(event) => setTgl_check_out(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="roomCount"
            className="block text-gray-700 font-bold mb-2"
          >
            Number of Rooms:
          </label>
          <input
            type="number"
            id="roomCount"
            value={jumlah_kamar}
            onChange={(event) => setJumlah_kamar(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="roomType"
            className="block text-gray-700 font-bold mb-2"
          >
            Room Type:
          </label>
          <select
            id="roomType"
            value={id_tipe_kamar}
            onChange={(event) => setId_tipe_kamar(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          >
            <option value="">Pilih Tipe Kamar</option>
            <option value="1">Single Room</option>
            <option value="2">Double Room</option>
            <option value="3">Family Room</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Reservation
        </button>
      </form>
    </>
  );
}

export default Reservations;
