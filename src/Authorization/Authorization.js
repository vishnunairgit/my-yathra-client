import React from "react";
import { Navigate, Outlet, } from "react-router-dom";

export function AdminAuth() {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  return (token && user && user.Role === 1 ) ? <Outlet /> : <Navigate to="/" />;
}
