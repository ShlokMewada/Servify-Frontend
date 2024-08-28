import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserProtectedRoute = () => {
  const user = useSelector((store) => store.user.user);
  if (user === null) {
    return <Navigate to="/login" replace />;
  }
  if (user !== null && user) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
};

export const EmployeeProtectedRoute = () => {
  const user = useSelector((store) => store.user.user);
  if (user === null || (user !== null && !user)) {
    return <Navigate to="/employee/login" replace />;
  }
  return <Outlet />;
};

export const AuthenticatedRoute = () => {
  const user = useSelector((store) => store.user.user);
  if (user !== null) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
