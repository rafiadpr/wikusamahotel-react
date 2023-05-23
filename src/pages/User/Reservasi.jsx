import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import {
  FiHome,
  FiUser,
  FiUsers,
  FiLogOut,
  FiBook,
  FiLayers,
} from "react-icons/fi";

function Reservasi() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [pemesanan, setPemesanan] = useState();
  const [nomorPemesanan, setNomorPemesanan] = useState("");
  const [namaPemesan, setNamaPemesan] = useState("");
  const [emailPemesan, setEmailPemesan] = useState("");
  const [tglPemesanan, setTglPemesanan] = useState("");
  const [tglCheckIn, setTglCheckIn] = useState("");
  const [tglCheckOut, setTglCheckOut] = useState("");
  const [namaTamu, setNamaTamu] = useState("");
  const [jumlahKamar, setJumlahKamar] = useState("");
  const [idTipeKamar, setIdTipeKamar] = useState("");
  const [statusPemesanan, setStatusPemesanan] = useState("");
  const [idUser, setIdUser] = useState("");
  // const url = "http://localhost:8000/foto/";

  useEffect(() => {
    axios
      .get("http://localhost:8000/pemesanan")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/pemesanan/${id}`)
      .then((res) => {
        console.log(res.data.message);
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleAdd = () => {
    axios
      .post("http://localhost:8000/pemesanan", {
        nomor_pemesanan: nomorPemesanan,
        nama_pemesan: namaPemesan,
        email_pemesan: emailPemesan,
        tgl_pemesanan: tglPemesanan,
        tgl_check_in: tglCheckIn,
        tgl_check_out: tglCheckOut,
        nama_tamu: namaTamu,
        jumlah_kamar: jumlahKamar,
        id_tipe_kamar: idTipeKamar,
        status_pemesanan: statusPemesanan,
        id_user: idUser,
      })
      .then((res) => {
        console.log(res.data.message);
        setModalOpen(false);
        setSelectedItem(null);
        setNomorPemesanan("");
        setNamaPemesan("");
        setEmailPemesan("");
        setTglPemesanan("");
        setTglCheckIn("");
        setTglCheckOut("");
        setNamaTamu("");
        setJumlahKamar("");
        setIdTipeKamar("");
        setStatusPemesanan("");
        setIdUser("");
        setData([...data, res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    axios
      .put(`http://localhost:8000/pemesanan/${selectedItem.id}`, {
        nomor_pemesanan: nomorPemesanan,
        nama_pemesan: namaPemesan,
        email_pemesan: emailPemesan,
        tgl_pemesanan: tglPemesanan,
        tgl_check_in: tglCheckIn,
        tgl_check_out: tglCheckOut,
        nama_tamu: namaTamu,
        jumlah_kamar: jumlahKamar,
        id_tipe_kamar: idTipeKamar,
        status_pemesanan: statusPemesanan,
        id_user: idUser,
      })
      .then((res) => {
        console.log(res.data.message);
        setModalOpen(false);
        setSelectedItem(null);
        setNomorPemesanan("");
        setNamaPemesan("");
        setEmailPemesan("");
        setTglPemesanan("");
        setTglCheckIn("");
        setTglCheckOut("");
        setNamaTamu("");
        setJumlahKamar("");
        setIdTipeKamar("");
        setStatusPemesanan("");
        setIdUser("");
        setData(
          data.map((item) => {
            if (item.id === selectedItem.id) {
              return {
                ...item,
                nomor_pemesanan: nomorPemesanan,
                nama_pemesan: namaPemesan,
                email_pemesan: emailPemesan,
                tgl_pemesanan: tglPemesanan,
                tgl_check_in: tglCheckIn,
                tgl_check_out: tglCheckOut,
                nama_tamu: namaTamu,
                jumlah_kamar: jumlahKamar,
                id_tipe_kamar: idTipeKamar,
                status_pemesanan: statusPemesanan,
                id_user: idUser,
              };
            }
            return item;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
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
            <div className="container mx-auto my-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        ID
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Nomor Pemesanan
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Nama Pemesan
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Email Pemesan
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Tgl Pemesanan
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Tgl Check In
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Tgl Check Out
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Nama Tamu
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Jumlah Kamar
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Id Tipe Kamar
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Status Pemesanan
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Id User
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {data.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {item.id}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {item.nomor_pemesanan}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.nama_pemesan}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.email_pemesan}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.tgl_pemesanan}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.tgl_check_in}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.tgl_check_out}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.nama_tamu}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.jumlah_kamar}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.id_tipe_kamar}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.status_pemesanan}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.id_user}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
                              <button
                                className="inline-block rounded-md px-4 py-2 text-sm text-yellow-500 hover:text-gray-700 focus:relative"
                                onClick={() => {
                                  setSelectedItem(item);
                                  setNomorPemesanan(item.nomor_pemesanan);
                                  setNamaPemesan(item.nama_pemesan);
                                  setEmailPemesan(item.email_pemesan);
                                  setTglPemesanan(item.tgl_pemesanan);
                                  setTglCheckIn(item.tgl_check_in);
                                  setTglCheckOut(item.tgl_check_out);
                                  setNamaTamu(item.nama_tamu);
                                  setJumlahKamar(item.jumlah_kamar);
                                  setIdTipeKamar(item.id_tipe_kamar);
                                  setStatusPemesanan(item.status_pemesanan);
                                  setIdUser(item.id_user);
                                  setModalOpen(true);
                                }}
                              >
                                Edit
                              </button>

                              <button
                                className="inline-block rounded-md bg-white px-4 py-2 text-sm text-red-500 shadow-sm focus:relative"
                                onClick={() => {
                                  handleDelete(item.id);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <button
                  className="inline-block rounded-md bg-blue-500 text-white px-4 py-2 text-sm shadow-sm focus:relative"
                  onClick={() => setModalOpen(true)}
                >
                  Add Reservasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <Dialog
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedItem(null);
            setNomorPemesanan("");
            setNamaPemesan("");
            setEmailPemesan("");
            setTglPemesanan("");
            setTglCheckIn("");
            setTglCheckOut("");
            setNamaTamu("");
            setJumlahKamar("");
            setIdTipeKamar("");
            setStatusPemesanan("");
            setIdUser("");
          }}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {selectedItem ? "Edit Reservasi" : "Add Reservasi"}
              </Dialog.Title>

              <div className="mt-4">
                <input
                  type="hidden"
                  name="nomor_pemesanan"
                  id="nomor_pemesanan"
                  value={nomorPemesanan}
                  onChange={(e) => setNomorPemesanan(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="nama_pemesan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Pemesan
                </label>
                <input
                  type="text"
                  name="nama_pemesan"
                  id="nama_pemesan"
                  value={namaPemesan}
                  onChange={(e) => setNamaPemesan(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email_pemesan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email pemesan
                </label>
                <input
                  type="text"
                  name="email_pemesan"
                  id="email_pemesan"
                  value={emailPemesan}
                  onChange={(e) => setEmailPemesan(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="tglPemesanan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tgl Pemesanan
                </label>
                <input
                  type="text"
                  name="tgl_pemesanan"
                  id="tglPemesanan"
                  value={tglPemesanan}
                  onChange={(e) => setTglPemesanan(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="nama_tamu"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Tamu
                </label>
                <input
                  type="text"
                  name="nama_tamu"
                  id="nama_tamu"
                  value={namaTamu}
                  onChange={(e) => setNamaTamu(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="jumlah_kamar"
                  className="block text-sm font-medium text-gray-700"
                >
                  Jumlah Kamar
                </label>
                <input
                  type="number"
                  name="jumlah_kamar"
                  id="jumlah_kamar"
                  value={jumlahKamar}
                  onChange={(e) => setJumlahKamar(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="id_tipe_kamar"
                  className="block text-sm font-medium text-gray-700"
                >
                  ID Tipe Kamar
                </label>
                <input
                  type="number"
                  name="id_tipe_kamar"
                  id="id_tipe_kamar"
                  value={idTipeKamar}
                  onChange={(e) => setIdTipeKamar(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="status_pemesanan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status Pemesanan
                </label>
                <input
                  type="text"
                  name="status_pemesanan"
                  id="status_pemesanan"
                  value={statusPemesanan}
                  onChange={(e) => setStatusPemesanan(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="id_user"
                  className="block text-sm font-medium text-gray-700"
                >
                  ID User
                </label>
                <input
                  type="text"
                  name="id_user"
                  id="id_user"
                  value={idUser}
                  onChange={(e) => setIdUser(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-6">
                <button
                  className="inline-block rounded-md bg-blue-500 text-white px-4 py-2 text-sm shadow-sm focus:relative mr-2"
                  onClick={selectedItem ? handleEdit : handleAdd}
                >
                  {selectedItem ? "Update" : "Add"}
                </button>
                <button
                  className="inline-block rounded-md bg-red-500 text-white px-4 py-2 text-sm shadow-sm focus:relative"
                  onClick={() => {
                    setModalOpen(false);
                    setSelectedItem(null);
                    setNomorPemesanan("");
                    setNamaPemesan("");
                    setEmailPemesan("");
                    setTglPemesanan("");
                    setTglCheckIn("");
                    setTglCheckOut("");
                    setNamaTamu("");
                    setJumlahKamar("");
                    setIdTipeKamar("");
                    setStatusPemesanan("");
                    setIdUser("");
                  }}
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}

export default Reservasi;
