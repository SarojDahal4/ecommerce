import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenicated = localStorage.getItem("token");
  if (isAuthenicated) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default PrivateRoute;
