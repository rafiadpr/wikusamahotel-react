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

function TipeKamar() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [namaTipeKamar, setNamaTipeKamar] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState(null);
  const url = "http://localhost:8000/foto/";

  useEffect(() => {
    axios
      .get("http://localhost:8000/tipekamar")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/tipekamar/${id}`)
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
    const formData = new FormData();
    formData.append("nama_tipe_kamar", namaTipeKamar);
    formData.append("harga", harga);
    formData.append("deskripsi", deskripsi);
    formData.append("foto", foto);
  
    axios
      .post("http://localhost:8000/tipekamar", formData)
      .then((res) => {
        console.log(res.data.message);
        setModalOpen(false);
        setSelectedItem(null);
        setNamaTipeKamar("");
        setHarga("");
        setDeskripsi("");
        setFoto(null);
        setData([...data, res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleEdit = () => {
    const formData = new FormData();
    formData.append("nama_tipe_kamar", namaTipeKamar);
    formData.append("harga", harga);
    formData.append("deskripsi", deskripsi);
    formData.append("foto", foto);
  
    axios
      .put(`http://localhost:8000/tipekamar/${selectedItem.id}`, formData)
      .then((res) => {
        console.log(res.data.message);
        setModalOpen(false);
        setSelectedItem(null);
        setNamaTipeKamar("");
        setHarga("");
        setDeskripsi("");
        setFoto("");
        setData(
          data.map((item) => {
            if (item.id === selectedItem.id) {
              return {
                ...item,
                nama_tipe_kamar: namaTipeKamar,
                harga: harga,
                deskripsi: deskripsi,
                foto: foto,
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
                        Nama Tipe Kamar
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Harga
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Deskripsi
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Foto
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
                            {item.nama_tipe_kamar}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.harga}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.deskripsi}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.foto}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
                              <button
                                className="inline-block rounded-md px-4 py-2 text-sm text-yellow-500 hover:text-gray-700 focus:relative"
                                onClick={() => {
                                  setSelectedItem(item);
                                  setNamaTipeKamar(item.nama_tipe_kamar);
                                  setHarga(item.harga);
                                  setDeskripsi(item.deskripsi);
                                  setFoto(item.foto);
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
                  Add Tipe Kamar
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
            setNamaTipeKamar("");
            setHarga("");
            setDeskripsi("");
            setFoto("");
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
                {selectedItem ? "Edit Kamar" : "Add Kamar"}
              </Dialog.Title>

              <div className="mt-4">
                <label
                  htmlFor="nama_tipe_kamar"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Tipe Kamar
                </label>
                <input
                  type="text"
                  name="nama_tipe_kamar"
                  id="nama_tipe_kamar"
                  value={namaTipeKamar}
                  onChange={(e) => setNamaTipeKamar(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="harga"
                  className="block text-sm font-medium text-gray-700"
                >
                  Harga
                </label>
                <input
                  type="number"
                  name="harga"
                  id="harga"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="deskripsi"
                  className="block text-sm font-medium text-gray-700"
                >
                  Deskripsi
                </label>
                <input
                  type="text"
                  name="deskripsi"
                  id="deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="foto"
                  className="block text-sm font-medium text-gray-700"
                >
                  Foto
                </label>
                <input
                  type="file"
                  name="foto"
                  id="foto"
                  onChange={(e) => setFoto(e.target.files[0])}
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
                    setNamaTipeKamar("");
                    setHarga("");
                    setDeskripsi("");
                    setFoto(null);
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

export default TipeKamar;
