import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Dialog } from "@headlessui/react";

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
  const [dataPemesanan, setDataPemesanan] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPemesanan, setSelectedPemesanan] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/tipekamar").then((res) => {
      setTipeKamar(res.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/pemesanan").then((res) => {
      setDataPemesanan(res.data.data);
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
        toast.success("Pemesanan Sukses");
        // Reset form
        setReservasi({
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
        setShowModal(false);
      } else {
        toast.error("Pemesanan Gagal");
      }
    });
  };

  const handleEdit = (pemesanan) => {
    setSelectedPemesanan(pemesanan);
    setShowModal(true);
  };

  const handleDelete = (pemesanan) => {
    axios.delete(`http://localhost:8000/pemesanan/${pemesanan.id}`).then((res) => {
      toast.success("Data Pemesanan berhasil dihapus");
      // Refresh data pemesanan setelah penghapusan
      axios.get("http://localhost:8000/pemesanan").then((res) => {
        setDataPemesanan(res.data.data);
      });
    });
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold mb-4 flex justify-center">Reservasi</h3>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setShowModal(true)}
      >
        Tambah Reservasi
      </button>

      <div className="mt-8">
        <h3 className="text-3xl font-bold mb-4">Data Pemesanan</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">Nomor Pemesanan</th>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">Nama Pemesan</th>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">Email Pemesan</th>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">Tanggal Check-in</th>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">Tanggal Check-out</th>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">Nama Tamu</th>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">Jumlah Kamar</th>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">ID Tipe Kamar</th>
              <th className="py-2 px-4 bg-gray-200 font-bold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataPemesanan.map((pemesanan) => (
              <tr key={pemesanan.nomor_pemesanan} className="border-b">
                <td className="py-2 px-4">{pemesanan.nomor_pemesanan}</td>
                <td className="py-2 px-4">{pemesanan.nama_pemesan}</td>
                <td className="py-2 px-4">{pemesanan.email_pemesan}</td>
                <td className="py-2 px-4">{pemesanan.tgl_check_in}</td>
                <td className="py-2 px-4">{pemesanan.tgl_check_out}</td>
                <td className="py-2 px-4">{pemesanan.nama_tamu}</td>
                <td className="py-2 px-4">{pemesanan.jumlah_kamar}</td>
                <td className="py-2 px-4">{pemesanan.id_tipe_kamar}</td>
                <td className="py-2 px-4">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleEdit(pemesanan)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(pemesanan)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <Dialog open={showModal} onClose={() => setShowModal(false)}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white rounded shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Tambah Reservasi</h3>
              <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <input
                  type="text"
                  name="nomor_pemesanan"
                  value={reservasi.nomor_pemesanan}
                  onChange={handleChange}
                  placeholder="Nomor Pemesanan"
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="text"
                  name="nama_pemesan"
                  value={reservasi.nama_pemesan}
                  onChange={handleChange}
                  placeholder="Nama Pemesan"
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="email"
                  name="email_pemesan"
                  value={reservasi.email_pemesan}
                  onChange={handleChange}
                  placeholder="Email Pemesan"
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="date"
                  name="tgl_check_in"
                  value={reservasi.tgl_check_in}
                  onChange={handleChange}
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="date"
                  name="tgl_check_out"
                  value={reservasi.tgl_check_out}
                  onChange={handleChange}
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="text"
                  name="nama_tamu"
                  value={reservasi.nama_tamu}
                  onChange={handleChange}
                  placeholder="Nama Tamu"
                  className="border rounded p-2 mb-2 w-full"
                />
                <input
                  type="number"
                  name="jumlah_kamar"
                  value={reservasi.jumlah_kamar}
                  onChange={handleChange}
                  placeholder="Jumlah Kamar"
                  className="border rounded p-2 mb-2 w-full"
                />
                <select
                  name="id_tipe_kamar"
                  value={reservasi.id_tipe_kamar}
                  onChange={handleChange}
                  className="border rounded p-2 mb-2 w-full"
                >
                  {tipeKamar.map((tipe) => (
                    <option key={tipe.id} value={tipe.id}>
                      {tipe.nama_tipe_kamar}
                    </option>
                  ))}
                </select>

                {/* Buttons */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Simpan
                  </button>
                  <button
                    className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default Reservations;
