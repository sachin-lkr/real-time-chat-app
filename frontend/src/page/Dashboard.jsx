import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar";
import FeatureCard from "../components/Dashboard/FeatureCard"

const Dashboard = () => {
  const featuresData = [
    {
      id: 1,
      icon: "⚡",
      title: "Socket.IO WebSockets",
      description:
        "Bi-directional, low-latency communication allowing messages to deliver instantly without page refreshes.",
      color: "cyan",
    },
    {
      id: 2,
      icon: "🔒",
      title: "JWT Authentication",
      description:
        "Secure HTTP-only cookie token management ensuring user privacy and protected API endpoints.",
      color: "indigo",
    },
    {
      id: 3,
      icon: "🟢",
      title: "Live Online Status",
      description:
        "Real-time socket broadcasting to track when users connect or disconnect from the platform.",
      color: "emerald",
    },
  ];
  return (
    <div className="min-h-full bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950">
      {/* TOP NAVBAR */}
      <Navbar />
      {/*  HERO SECTION */}
      <main className="max-w-6xl mx-auto px-6 py-16 flex-1 flex flex-col items-center justify-center text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium text-slate-300">
            Built with React, Node.js & Socket.IO
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-6">
          Real-time messaging for modern web applications with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            zero latency.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Experience instant 1-on-1 chatting, live user online state indicators,
          and JWT-secured API routes built with clean MERN stack architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Link
            to="/signup"
            className="w-full sm:w-auto px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-cyan-500/20 text-center"
          >
            Start Chatting Now
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded-xl transition text-center"
          >
            Log In to Account
          </Link>
        </div>

        {/* FEATURE HIGHLIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-slate-800/80 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Sachin kumar — MERN Stack Project
      </footer>
    </div>
  );
};

export default Dashboard;
