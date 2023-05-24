import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLoginFailed = () => {
    Swal.fire({
      icon: "error",
      title: "Login Gagal",
      text: "Email atau password yang Anda masukkan salah",
    });
  };

  const handleLogin = () => {
    Swal.fire({
      icon: "success",
      title: "Login Berhasil",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth", {
        email,
        password,
      });
      console.log(response.data);
      if (response.data.logged) {
        localStorage.setItem("logged", response.data.logged);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        localStorage.setItem("token", response.data.token);
        // localStorage.setItem('email', email);
        if (response.data.data.role === "admin") {
          history("/Admin");
        } else if (response.data.data.role === "resepsionis") {
          history("/Resepsionis");
        }
        handleLogin();
      } else {
        console.log("LOGIN GAGAL");
        handleLoginFailed();
      }
    } catch (error) {
      console.log(error);
    }
  };

      return (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-gray-100 p-8 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Login Page</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Email:</label>
                <input
                  className="border border-gray-300 p-2 rounded w-full"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Password:</label>
                <input
                  className="border border-gray-300 p-2 rounded w-full"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }

export default Login;
