import React from "react";
import Sidebar from "../../components/Sidebar";

export default function History() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar role="user" />

      <main className="flex-1 md:ml-64 p-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          Riwayat Absensi Kamu
        </h2>

        <div className="space-y-3">
          {/* Card History Item */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-slate-800">Senin, 20 Okt 2023</p>
                <p className="text-xs text-slate-500">
                  Masuk: 06:55 • Pulang: 17:00
                </p>
              </div>
              <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                Hadir
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
