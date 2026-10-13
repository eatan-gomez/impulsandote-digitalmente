"use client";

import { Cpu, Zap, Database, Server, Terminal, Lock } from "lucide-react";

export default function TechStack() {
  const technologies = [
    {
      name: "Next.js & React 19",
      role: "Framework de Última Generación",
      desc: "Renderizado híbrido ultrarrápido y SEO de nivel mundial.",
      icon: Terminal,
    },
    {
      name: "Tailwind CSS & Modern UI",
      role: "Diseño & Micro-interacciones",
      desc: "Interfaces visuales fluidas, responsivas y atractivas.",
      icon: Zap,
    },
    {
      name: "TypeScript & Clean Code",
      role: "Calidad y Robustez de Software",
      desc: "Arquitectura tipada libre de errores en producción.",
      icon: Cpu,
    },
    {
      name: "Cloud Edge & Global CDN",
      role: "Infraestructura Cloud",
      desc: "Distribución en servidores cercanos al usuario para carga instantánea.",
      icon: Server,
    },
    {
      name: "PostgreSQL & Secure Storage",
      role: "Bases de Datos & Persistencia",
      desc: "Almacenamiento encriptado de asistentes, clientes y pedidos.",
      icon: Database,
    },
    {
      name: "Seguridad SSL & Cifrado",
      role: "Protección de Datos",
      desc: "Certificados de seguridad bancaria y protección contra ataques.",
      icon: Lock,
    },
  ];

  return (
    <section className="py-20 relative bg-[#040711] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARQUITECTURA DE VANGUARDIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            La ingeniería detrás de <span className="text-gradient-cyan">cada proyecto</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            No usamos plantillas lentas o desactualizadas. Construimos sobre los mismos estándares tecnológicos que utilizan las mayores empresas del mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">{tech.name}</h3>
                  <span className="text-xs font-mono text-cyan-400/90 block mb-2">{tech.role}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
