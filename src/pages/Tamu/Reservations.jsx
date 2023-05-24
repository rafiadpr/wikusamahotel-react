import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// import { Dialog } from "@headlessui/react";

function Reservations() {
  const [tipeKamar, setTipeKamar] = useState([]);
  const [reservasi, setReservasi] = useState({
    nomor_pemesanan: "",
    nama_pemesan: "",
    email_pemesan: "",
    tgl_check_in: "",
    tgl_check_out: "",
    nama_tamu: "",
    jumlah_kamar: "",
    id_tipe_kamar: "1",
    detail_pemesanan: [
      {
        id_kamar: "",
        harga: "",
      },
    ],
  });

  useEffect(() => {
    axios.get("http://localhost:8000/tipekamar").then((res) => {
      setTipeKamar(res.data.data);
    });
  }, []);

  const handleChange = (e) => {
    setReservasi({ ...reservasi, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/pemesanan", reservasi).then((e) => {
      const message = e.data.message;

      if (message === "New pemesanan has been inserted with details.") {
        return toast.success("Pemesanan Sukses");
      } else {
        return toast.error("Pemesanan Gagal");
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold mb-4 flex justify-center">Reservasi</h3>
      <form
        className="max-w-md mx-auto p-6 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="nomor_pemesanan" />
        <input
          type="text"
          name="nama_pemesan"
          placeholder="Nama"
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        />
        <input
          type="email"
          name="email_pemesan"
          placeholder="Email"
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        />
        <input
          type="date"
          name="tgl_check_in"
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        />
        <input
          type="date"
          name="tgl_check_out"
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="nama_tamu"
          onChange={handleChange}
          placeholder="Nama Tamu"
          className="border rounded p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="jumlah_kamar"
          placeholder="Jumlah Kamar"
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        />
        <select
          name="id_tipe_kamar"
          onChange={handleChange}
          className="border rounded p-2 mb-2 w-full"
        >
          {tipeKamar.map((tipe) => (
            <option key={tipe.id} value={tipe.id}>
              {tipe.nama_tipe_kamar}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reservasi
        </button>
      </form>
    </div>
  );
}

export default Reservations;