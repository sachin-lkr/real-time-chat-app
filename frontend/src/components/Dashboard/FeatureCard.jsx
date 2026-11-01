import React from "react";

const colorStyles = {
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
};

const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition">
      <div
        className={`w-10 h-10 rounded-lg border flex items-center justify-center font-bold text-lg mb-4 ${colorStyles[color]}`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
