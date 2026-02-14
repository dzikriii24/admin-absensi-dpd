import React from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  MapPin,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ role = "admin" }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavItem = ({ to, icon, label }) => (
    <Link
      to={to}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(to) ? "bg-brand-50 text-brand-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3">
        <span className="font-bold text-xl tracking-tight text-slate-800">
          DPD<span className="text-brand-600">Komeng</span>
        </span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {role === "admin" ? (
          <>
            <NavItem
              to="/admin/dashboard"
              icon={<LayoutDashboard size={20} />}
              label="Dashboard"
            />
            <NavItem
              to="/admin/petugas"
              icon={<Users size={20} />}
              label="Data Petugas"
            />
            <NavItem
              to="/admin/rekap"
              icon={<FileText size={20} />}
              label="Rekap Laporan"
            />
          </>
        ) : (
          <>
            <NavItem
              to="/user/dashboard"
              icon={<LayoutDashboard size={20} />}
              label="Beranda"
            />
            <NavItem
              to="/user/scan"
              icon={<MapPin size={20} />}
              label="Scan Masuk"
            />
            <NavItem
              to="/user/history"
              icon={<FileText size={20} />}
              label="Riwayat"
            />
          </>
        )}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <Link
          to="/login"
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
        >
          <LogOut size={20} />
          <span>Keluar</span>
        </Link>
      </div>
    </aside>
  );
}
