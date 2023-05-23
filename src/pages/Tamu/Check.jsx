import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Check() {
  const [data, setData] = useState();
  // const [messsage, setMessage] = useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value + " 12:00:00" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/pemesanan/check", data).then((e) => {
      const message = e.data.message;

      if (message === "Room Available") {
        return toast.success("Room Available");
      } else {
        return toast.error("Room Not Available");
      }
    });
  };
  console.log(data);
  return (
    <>
      <div className="container mx-auto p-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Check Availability</h3>
        <form action="post" onSubmit={(e) => handleSubmit(e)} className="mb-4">
          <input
            type="date"
            name="tgl_check_in"
            id=""
            onChange={(e) => handleChange(e)}
            className="border border-gray-300 rounded p-2 mb-4"
          />
          <input
            type="date"
            name="tgl_check_out"
            id=""
            onChange={(e) => handleChange(e)}
            className="border border-gray-300 rounded p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Check
          </button>
        </form>
      </div>
    </>
  );
}

export default Check;
