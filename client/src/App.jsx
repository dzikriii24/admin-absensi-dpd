import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import ScanQR from "./pages/auth/ScanQR";
import AdminDashboard from "./pages/admin/Dashboard";
import DataPetugas from "./pages/admin/DataPetugas";
import UserDashboard from "./pages/user/Dashboard";
import UserHistory from "./pages/user/History";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route Auth */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Route Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/petugas" element={<DataPetugas />} />

        {/* Route User */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/scan" element={<ScanQR />} />
        <Route path="/user/history" element={<UserHistory />} />
      </Routes>
    </Router>
  );
}
