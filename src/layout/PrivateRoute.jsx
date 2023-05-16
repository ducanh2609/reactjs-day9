import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const userLoggedIn = () => false;
  console.log(children);
  if (!userLoggedIn) {
    navigate("/login");
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
