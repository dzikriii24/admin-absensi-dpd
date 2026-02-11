import React from 'react';
import { LayoutDashboard, Users, FileText, Settings, Bell, Search, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      
      {/* Sidebar - Clean White */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <span className="font-bold text-xl tracking-tight text-slate-800">DPD<span className="text-brand-600">Komeng</span></span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
          <NavItem icon={<Users size={20}/>} label="Data Petugas" />
          <NavItem icon={<FileText size={20}/>} label="Rekap Laporan" />
          <NavItem icon={<MapPin size={20}/>} label="Lokasi Kantor" />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <NavItem icon={<Settings size={20}/>} label="Pengaturan" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        
        {/* Top Header */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                <input type="text" placeholder="Cari petugas..." className="pl-10 pr-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 transition-all" />
             </div>
             <button className="p-2 text-slate-500 hover:text-brand-600 transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 bg-brand-500 rounded-full border border-white"></span>
             </button>
             <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                <img src="https://ui-avatars.com/api/?name=Admin&background=random" alt="Admin" />
             </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Petugas" value="12" sub="+2 baru" color="bg-blue-50 text-blue-600" />
            <StatCard title="Hadir Hari Ini" value="8" sub="2 belum hadir" color="bg-emerald-50 text-emerald-600" />
            <StatCard title="Izin / Sakit" value="1" sub="Deri (Sakit)" color="bg-orange-50 text-orange-600" />
            <StatCard title="Laporan Insiden" value="0" sub="Aman terkendali" color="bg-brand-50 text-brand-600" />
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-700">Absensi Terkini</h3>
              <button className="text-sm text-brand-600 font-medium hover:underline">Lihat Semua</button>
            </div>
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
                <TableRow name="Budi Santoso" time="06:55 WIB" loc="Pos Depan" status="Tepat Waktu" />
                <TableRow name="Siti Aminah" time="07:02 WIB" loc="Lobby Utama" status="Telat 2m" isLate />
                <TableRow name="Joko Anwar" time="-" loc="-" status="Belum Hadir" isPending />
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}

// Components
function NavItem({ icon, label, active }) {
  return (
    <button className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
      {icon}
      <span>{label}</span>
    </button>
  )
}

function StatCard({ title, value, sub, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-start">
        <div>
           <p className="text-slate-500 text-sm mb-1">{title}</p>
           <h4 className="text-3xl font-bold text-slate-800">{value}</h4>
        </div>
        <div className={`p-2 rounded-lg ${color}`}>
           <LayoutDashboard size={18} />
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-4">{sub}</p>
    </div>
  )
}

function TableRow({ name, time, loc, status, isLate, isPending }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 font-medium text-slate-800">{name}</td>
      <td className="px-6 py-4 text-slate-600">{time}</td>
      <td className="px-6 py-4 text-slate-500">{loc}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${isLate ? 'bg-orange-100 text-orange-700' : isPending ? 'bg-slate-100 text-slate-600' : 'bg-emerald-100 text-emerald-700'}`}>
          {status}
        </span>
      </td>
    </tr>
  )
}