import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function TipeKamar() {
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
    <>
    </>
  )
}

export default TipeKamar