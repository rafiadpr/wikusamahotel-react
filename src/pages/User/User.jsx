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

function User() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [namaUser, setNamaUser] = useState("");
  const [User, setUser] = useState("");
  const [foto, setFoto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const url = "http://localhost:8000/foto/";

  useEffect(() => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/user/${id}`)
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
    formData.append("nama_user", namaUser);
    formData.append("foto", foto);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
  
    axios
      .post("http://localhost:8000/user", formData)
      .then((res) => {
        console.log(res.data.message);
        setModalOpen(false);
        setSelectedItem(null);
        setNamaUser("");
        setFoto(null);
        setEmail("");
        setPassword("");
        setRole("");
        setData([...data, res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    const formData = new FormData();
    formData.append("nama_user", namaUser);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("foto", foto);
    formData.append("role", role);
  
    axios
      .put(`http://localhost:8000/user/${selectedItem.id}`, formData)
      .then((res) => {
        console.log(res.data.message);
        setModalOpen(false);
        setSelectedItem(null);
        setNamaUser("");
        setFoto(null);
        setEmail("");
        setPassword("");
        setRole("");
        setData(
          data.map((item) => {
            if (item.id === selectedItem.id) {
              return {
                ...item,
                nama_user: namaUser,
                foto: foto,
                email: email,
                password: password,
                role: role,
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
                        Nama User
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Foto
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Email
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Password
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Role
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
                            {item.nama_user}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.foto}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.email}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.password}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            {item.role}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
                              <button
                                className="inline-block rounded-md px-4 py-2 text-sm text-yellow-500 hover:text-gray-700 focus:relative"
                                onClick={() => {
                                  setSelectedItem(item);
                                  setNamaUser(item.nama_user);
                                  setFoto(item.foto);
                                  setEmail(item.email);
                                  setPassword(item.password);
                                  setRole(item.role);
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
                  Add User
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
            setNamaUser("");
            setFoto("");
            setEmail("");
            setPassword("");
            setRole("");
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
                {selectedItem ? "Edit User" : "Add User"}
              </Dialog.Title>

              <div className="mt-4">
                <label
                  htmlFor="nama_user"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="nama_user"
                  id="nama_user"
                  value={namaUser}
                  onChange={(e) => setNamaUser(e.target.value)}
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

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
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
                    setNamaUser("");
                    setFoto(null);
                    setEmail("");
                    setPassword("");
                    setRole("");
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

export default User;
