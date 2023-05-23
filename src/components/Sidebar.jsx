import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiUsers,
  FiLogOut,
  FiBook,
  FiLayers,
} from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>

    </>
  );
}

export default Sidebar;
