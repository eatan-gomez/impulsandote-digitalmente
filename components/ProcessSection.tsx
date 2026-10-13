"use client";

import { Search, PenTool, Code, Rocket, Check } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico & Estrategia",
      subtitle: "Entendemos a fondo tu objetivo",
      description:
        "Analizamos tu modelo de negocio, tu público objetivo o la temática de tu evento. Definimos metas claras para que cada botón y cada pantalla tenga una razón comercial o estética.",
      icon: Search,
      highlight: "Briefing estratégico",
    },
    {
      number: "02",
      title: "Arquitectura & Prototipado UI/UX",
      subtitle: "Visualizas el resultado antes de programar",
      description:
        "Diseñamos interfaces tecnológicas elegantes, fáciles de usar y optimizadas para celulares. Aseguramos que la experiencia del usuario sea intuitiva y memorable.",
      icon: PenTool,
      highlight: "Prototipo interactivo",
    },
    {
      number: "03",
      title: "Desarrollo de Alto Rendimiento",
      subtitle: "Código moderno, veloz y seguro",
      description:
        "Construimos tu sitio, aplicación o invitación con las mejores tecnologías del mercado (Next.js, React, Tailwind). Cero lentitud, máxima seguridad y optimización extrema.",
      icon: Code,
      highlight: "Pruebas de calidad (QA)",
    },
    {
      number: "04",
      title: "Lanzamiento & Acompañamiento",
      subtitle: "Puesta en marcha con resultados tangibles",
      description:
        "Desplegamos en servidores cloud globales, conectamos tu dominio y te capacitamos para que administres o compartas tu solución con total tranquilidad y respaldo.",
      icon: Rocket,
      highlight: "Soporte post-lanzamiento",
    },
  ];

  return (
    <section id="metodologia" className="py-24 relative bg-[#050811] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>METODOLOGÍA ÁGIL & TRANSPARENTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Cómo transformamos tu visión en <span className="text-gradient-cyan">realidad</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Un proceso sin complicaciones técnicas para ti. Nos encargamos de toda la complejidad tecnológica mientras tú ves los avances paso a paso.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl glass-panel p-6 border border-white/10 flex flex-col justify-between group glass-panel-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-300 text-[11px] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    {step.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
