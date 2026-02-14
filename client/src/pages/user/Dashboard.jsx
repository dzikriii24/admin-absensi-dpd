import React from "react";
import Sidebar from "../../components/Sidebar";
import { QrCode, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar role="user" />

      <main className="flex-1 md:ml-64 p-6">
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-6 text-white mb-6 shadow-lg shadow-brand-200">
          <h2 className="text-xl font-bold">Halo, Budi Santoso! 👋</h2>
          <p className="opacity-90 text-sm mt-1">
            Jangan lupa absen hari ini ya.
          </p>
          <div className="mt-6 flex gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-1">
              <p className="text-xs opacity-75">Jam Masuk</p>
              <p className="font-bold text-lg">08:00 WIB</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-1">
              <p className="text-xs opacity-75">Status Hari Ini</p>
              <p className="font-bold text-lg">Hadir</p>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-slate-700 mb-4">Aksi Cepat</h3>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/user/scan"
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center hover:border-brand-300 transition-all group"
          >
            <div className="p-3 bg-brand-50 text-brand-600 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <QrCode size={24} />
            </div>
            <span className="font-medium text-slate-700">Scan Absen</span>
          </Link>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center opacity-60">
            <div className="p-3 bg-slate-100 text-slate-500 rounded-full mb-3">
              <Clock size={24} />
            </div>
            <span className="font-medium text-slate-500">Izin / Cuti</span>
          </div>
        </div>
      </main>
    </div>
  );
}
