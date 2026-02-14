import React from "react";
import { ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";

export default function ScanQR() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header Transparan */}
      <div className="p-4 flex items-center gap-4 z-10">
        <Link
          to="/user/dashboard"
          className="p-2 bg-white/10 rounded-full backdrop-blur-md"
        >
          <ArrowLeft size={24} />
        </Link>
        <span className="font-medium text-lg">Scan QR Code</span>
      </div>

      {/* Area Kamera Dummy */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="w-64 h-64 border-2 border-brand-500 rounded-2xl relative z-10 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-brand-500/10 animate-pulse rounded-2xl"></div>
          <Camera size={48} className="text-brand-500 mb-2 opacity-50" />
          <p className="text-xs text-brand-200">Arahkan kamera ke QR Code</p>
        </div>
        <p className="absolute bottom-20 text-slate-400 text-sm">
          Pastikan QR Code terlihat jelas
        </p>
      </div>
    </div>
  );
}
