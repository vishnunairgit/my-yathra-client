import React from "react";
import { Navigate, Outlet, } from "react-router-dom";

export function AdminAuth() {
  const token = localStorage.getItem('token');
  const company = JSON.parse(localStorage.getItem('company'));
  return (token && company && company.Role === 1 ) ? <Outlet /> : <Navigate to="/" />;
}
