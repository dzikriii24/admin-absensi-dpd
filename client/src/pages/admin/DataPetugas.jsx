import React from "react";
import Sidebar from "../../components/Sidebar";

export default function DataPetugas() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar role="admin" />

      <main className="flex-1 md:ml-64 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Data Absensi Petugas
        </h2>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">Petugas</th>
                <th className="px-6 py-3">Jam Masuk</th>
                <th className="px-6 py-3">Lokasi</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">
                  Budi Santoso
                </td>
                <td className="px-6 py-4 text-slate-600">06:55 WIB</td>
                <td className="px-6 py-4 text-slate-500">Pos Depan</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                    Tepat Waktu
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-800">
                  Siti Aminah
                </td>
                <td className="px-6 py-4 text-slate-600">07:02 WIB</td>
                <td className="px-6 py-4 text-slate-500">Lobby Utama</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                    Telat 2m
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
