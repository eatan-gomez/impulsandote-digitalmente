"use client";

import { TrendingUp, Users, Shield, Zap } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "99.8%",
      label: "Uptime & Disponibilidad",
      detail: "Servidores cloud globales de máxima estabilidad.",
      icon: Shield,
      accent: "text-emerald-400",
    },
    {
      value: "< 1.0s",
      label: "Velocidad de Carga",
      detail: "Páginas optimizadas para no perder prospectos.",
      icon: Zap,
      accent: "text-cyan-400",
    },
    {
      value: "+10,000",
      label: "Pases QR & RSVPs",
      detail: "Invitados procesados en bodas y congresos.",
      icon: Users,
      accent: "text-purple-400",
    },
    {
      value: "100%",
      label: "Propiedad de tu Proyecto",
      detail: "Cero ataduras o rentas ocultas permanentes.",
      icon: TrendingUp,
      accent: "text-blue-400",
    },
  ];

  return (
    <section className="py-16 relative bg-[#060a16] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-cyan-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${item.accent}`} />
                </div>
                <div
                  className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white mb-1`}
                >
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 leading-tight">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
