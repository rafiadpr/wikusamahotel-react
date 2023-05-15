import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reservations() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/pemesanan")
      .then((res) => {
        // console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  function handleChange(e) {
    // console.log(e.target.value);
    const { name, value } = e.target;
    console.log({ ...data, [name]: value });
    setData({ ...data, [name]: value });
  }

  function handleFileChange(e) {
    setFoto(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_pemesan", data.nama_pemesan);
    formData.append("email_pemesan", data.email_pemesan);
    formData.append("tgl_check_in", data.tgl_check_in);
    formData.append("tgl_check_out", data.tgl_check_out);
    formData.append("nama_tamu", data.nama_tamu);
    formData.append("jumlah_kamar", data.jumlah_kamar);
    formData.append("tipe_kamar", data.tipe_kamar);
    formData.append("foto", foto);

    axios
      .post("http://localhost:8000/book", formData)
      .then((res) => {
        console.log(res.data.message);
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

      {/* <section className="p-6  dark:text-gray-50 h-screen">
        <form
          method="POST"
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          onSubmit={(e) => handleSubmit(e)}
        >
          <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-500">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  Nama Pemesan
                </label>
                <input
                  id="nama_pemesan"
                  name="nama_pemesan"
                  type="number"
                  placeholder="Silahkan isi nama anda"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email_pemesan" className="text-sm">
                  Email_pemesan
                </label>
                <input
                  id="email_pemesan"
                  name="email_pemesan"
                  type="text"
                  placeholder="Email_pemesan"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="tgl_check_in" className="text-sm">
                  Tgl_check_in
                </label>
                <input
                  id="tgl_check_in"
                  name="tgl_check_in"
                  type="text"
                  placeholder="Tgl_check_in"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="tgl_check_out" className="text-sm">
                  Tgl_check_out
                </label>
                <input
                  id="tgl_check_out"
                  name="tgl_check_out"
                  type="text"
                  placeholder="Tgl_check_out"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="nama_tamu" className="text-sm">
                  Nama_tamu
                </label>
                <input
                  id="nama_tamu"
                  name="nama_tamu"
                  type="text"
                  placeholder="Nama_tamu"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="jumlah_kamar" className="text-sm">
                  Jumlah_kamar
                </label>
                <input
                  id="jumlah_kamar"
                  name="jumlah_kamar"
                  type="text"
                  placeholder="Jumlah_kamar"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="foto" className="text-sm">
                  Foto
                </label>
                <input
                  id="foto"
                  name="foto"
                  type="file"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  onChange={(e) => handleFileChange(e)}
                />
              </div>
              <button
                type="submit"
                className="flex justify-center px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section> */}

      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
          <h1 class="text-2xl font-bold sm:text-3xl">Reservation</h1>
        </div>

        <form
          action=""
          class="mx-auto mb-0 mt-8 max-w-md space-y-4"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="tgl_check_in">
                Check In
              </label>
              <input
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder=""
                type="date"
                id="tgl_check_in"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <label class="sr-only" for="tgl_check_out">
                Check Out
              </label>
              <input
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder=""
                type="date"
                id="tgl_check_out"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="inline-block rounded-lg bg-blue-500 px-12 py-3 text-sm font-medium text-white"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Reservations;
