import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const userLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) return true;
    return false;
  };

  if (!userLoggedIn()) {
    return <Navigate to={"login"} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
