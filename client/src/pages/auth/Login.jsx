import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  // State untuk switch antara User dan Admin
  const [loginType, setLoginType] = useState("admin"); // default 'admin'

  const handleLogin = (e) => {
    e.preventDefault();

    // Logika Routing Berdasarkan Struktur Folder Kamu
    if (loginType === "admin") {
      console.log("Login as Admin");
      // Mengarah ke pages/admin/Dashboard.jsx
      navigate("/admin/dashboard");
    } else {
      console.log("Login as User");
      // Mengarah ke pages/user/Dashboard.jsx (SEBELUMNYA /user/home)
      navigate("/user/dashboard");
    }
  };

  return (
    <div className="flex h-screen w-full bg-white font-sans overflow-hidden">
      {/* ======================= */}
      {/* KIRI: Form Section      */}
      {/* ======================= */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 lg:px-32 relative z-10 bg-white">
        <div className="w-full max-w-md mx-auto animate-fade-in-up">
          {/* Header Text */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight uppercase">
              {loginType === "admin" ? "Admin Portal" : "User Access"}
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              Please enter your{" "}
              {loginType === "admin" ? "admin credentials" : "NRP and password"}
              .
            </p>
          </div>

          {/* === SWITCHER USER / ADMIN === */}
          <div className="bg-slate-100 p-1.5 rounded-xl flex mb-8 relative">
            <button
              type="button"
              onClick={() => setLoginType("user")}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                loginType === "user"
                  ? "bg-white text-blue-600 shadow-md transform scale-[1.02]"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              User / Staff
            </button>
            <button
              type="button"
              onClick={() => setLoginType("admin")}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                loginType === "admin"
                  ? "bg-white text-blue-600 shadow-md transform scale-[1.02]"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Administrator
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {loginType === "admin" ? "Email Address" : "NRP / User ID"}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                placeholder={
                  loginType === "admin" ? "admin@pampamres.id" : "Ex: 12345678"
                }
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {loginType === "admin" ? "Login to Dashboard" : "Sign In"}
            </button>
          </form>

          <p className="mt-12 text-xs text-center text-slate-400">
            System issue?{" "}
            <span className="text-blue-600 font-bold cursor-pointer hover:underline">
              Contact IT Support
            </span>
          </p>
        </div>
      </div>

      {/* ======================= */}
      {/* KANAN: Branding Section */}
      {/* ======================= */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 relative items-center justify-center flex-col overflow-hidden">
        {/* === 🎨 THE ART: DETAILED TOPOGRAPHIC WAVES === */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 900 900"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* LAYER 1: Big Fill */}
            <path
              d="M0,500 C150,600 350,400 500,550 C650,700 800,600 900,650 L900,900 L0,900 Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M0,300 C200,450 400,200 600,350 C800,500 850,200 900,300 L900,0 L0,0 Z"
              fill="white"
              fillOpacity="0.03"
            />

            {/* LAYER 2: Contour Lines */}
            <g
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.15"
            >
              <path d="M-50,600 C150,750 350,550 550,650 C750,750 850,600 950,700" />
              <path
                d="M-50,580 C150,730 350,530 550,630 C750,730 850,580 950,680"
                opacity="0.8"
              />
              <path
                d="M-50,560 C150,710 350,510 550,610 C750,710 850,560 950,660"
                opacity="0.6"
              />
            </g>

            {/* LAYER 3: Upper Organic Abstract */}
            <path
              d="M0,0 C300,0 400,300 900,100 L900,0 Z"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M0,100 C250,200 500,50 900,200 L900,0 L0,0 Z"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.1"
            />

            {/* LAYER 4: Accents */}
            <circle cx="80%" cy="20%" r="150" fill="url(#gradText)" />
            <circle cx="10%" cy="90%" r="200" fill="url(#gradText)" />

            {/* Grid Pattern */}
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-transparent to-blue-600/20 pointer-events-none"></div>

        <div className="relative z-10 p-10 rounded-[3rem] border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl mb-12 flex flex-col items-center justify-center transform transition-transform hover:scale-105 duration-500">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
          <img
            src="https://i.pinimg.com/1200x/1c/c7/07/1cc70794090bfed9f902a0de548f5be7.jpg"
            alt="Logo"
            className="w-40 h-auto drop-shadow-2xl relative z-10 rounded-full"
          />
        </div>

        <div className="text-center relative z-10">
          <h2 className="text-3xl font-black text-white tracking-wider uppercase drop-shadow-sm mb-1">
            PAMPAMRES DAILY
          </h2>
          <div className="h-1 w-24 bg-white/50 mx-auto rounded-full"></div>
          <p className="text-white/80 text-sm mt-3 font-medium tracking-wide">
            SECURE • INTEGRATED • RELIABLE
          </p>
        </div>
      </div>
    </div>
  );
}
