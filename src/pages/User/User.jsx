import React from "react";
// import Sidebar from "../../components/Sidebar";
import Admin from "./Admin";

const AdminPage = () => {
  return {Admin}
};

const UserPage = () => {
  return <h1>User Page</h1>;
};

const GuestPage = () => {
  return <h1>Guest Page</h1>;
};

const User = ({ role }) => {
  let pageComponent;

  if (role === "admin") {
    pageComponent = <AdminPage />;
  } else if (role === "user") {
    pageComponent = <UserPage />;
  } else {
    pageComponent = <GuestPage />;
  }

  return <div>{pageComponent}</div>;
};

export default User;
