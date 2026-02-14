import React from "react";
import Sidebar from "../../components/Sidebar";
import { LayoutDashboard, Bell, Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar role="admin" />

      <main className="flex-1 md:ml-64 p-8">
        {/* Header Dashboard */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Dashboard Overview
            </h2>
            <p className="text-slate-500 text-sm">
              Selamat datang kembali, Admin!
            </p>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=random"
              alt="Admin"
            />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm mb-1">Total Petugas</p>
            <h4 className="text-3xl font-bold text-slate-800">12</h4>
            <p className="text-xs text-blue-600 mt-2 bg-blue-50 inline-block px-2 py-1 rounded">
              +2 Pegawai Baru
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm mb-1">Hadir Hari Ini</p>
            <h4 className="text-3xl font-bold text-slate-800">8</h4>
            <p className="text-xs text-emerald-600 mt-2 bg-emerald-50 inline-block px-2 py-1 rounded">
              80% Kehadiran
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
