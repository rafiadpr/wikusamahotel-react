import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  FiHome,
  FiUser,
  FiUsers,
  FiLogOut,
  FiBook,
  FiLayers,
} from "react-icons/fi";

function Admin() {
  const [tipeKamar, setTipeKamar] = useState([]);
  const [Kamar, setKamar] = useState([]);
  const [reservasi, setReservasi] = useState({
    nomor_pemesanan: "",
    nama_pemesan: "",
    email_pemesan: "",
    tgl_check_in: "",
    tgl_check_out: "",
    nama_tamu: "",
    jumlah_kamar: "",
    id_tipe_kamar: "1",
    id_user: "",
    detail_pemesanan: [
      {
        id_kamar: "1",
        harga: "175000",
      },
    ],
  });

  useEffect(() => {
    getTipeKamar();
    getKamar();
  }, []);

  const getTipeKamar = () => {
    axios
      .get("http://localhost:8000/tipekamar")
      .then((response) => {
        // console.log(res.data);
        setTipeKamar(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getKamar = () => {
    axios
      .get("http://localhost:8000/kamar")
      .then((response) => {
        // console.log(res.data);
        setKamar(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("admin");
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
              href="Admin"
              className="text-gray-300 hover:text-white py-2 flex items-center"
            >
              <FiHome className="mr-2" />
              <span>Beranda</span>
            </a>
            <a
              href="Reservasi"
              className="text-gray-300 hover:text-white py-2 flex items-center"
            >
              <FiBook className="mr-2" />
              <span>Reservasi</span>
            </a>
            <a
              href="User"
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
              href="TipeKamar"
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

        <div className="flex-grow">

          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-4 flex justify-center">
              Reservasi
            </h3>
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
              <select
                name="id_kamar"
                onChange={handleChange}
                className="border rounded p-2 mb-2 w-full"
              >
                {Kamar.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.id}
                  </option>
                ))}
              </select>
              <select
                name="harga"
                onChange={handleChange}
                className="border rounded p-2 mb-2 w-full"
              >
                {tipeKamar.map((tipe) => (
                  <option key={tipe.id} value={tipe.id}>
                    {tipe.harga}
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
        </div>
      </div>
    </>
  );
}

export default Admin;
