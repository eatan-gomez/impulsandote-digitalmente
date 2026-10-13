"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#03060e] text-slate-400 text-xs border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white p-1 shadow-lg shadow-cyan-500/20 border border-white/20 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo Impulsándote Digitalmente"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Impulsándote <span className="text-cyan-400">Digitalmente</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Firma tecnológica que ayuda a empresas y organizadores a destacar en el mundo digital. Diseñamos planes estratégicos con páginas web de alto impacto, desarrollo de aplicaciones para optimizar procesos y una línea especializada en invitaciones digitales para eventos.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 text-emerald-400 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Todos los servicios y servidores operativos (100%)</span>
            </div>
          </div>

          {/* Col 2: Soluciones */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Soluciones
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Páginas Web de Alto Impacto
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Desarrollo de Apps & Sistemas
                </a>
              </li>
              <li>
                <a href="#invitaciones" className="hover:text-cyan-400 transition-colors">
                  Invitaciones Digitales para Bodas
                </a>
              </li>
              <li>
                <a href="#invitaciones" className="hover:text-cyan-400 transition-colors">
                  Invitaciones para XV Años & Galas
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-cyan-400 transition-colors">
                  Calculadora de Inversión
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Compañía
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#metodologia" className="hover:text-cyan-400 transition-colors">
                  Metodología Ágil
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Casos de Éxito & Capacidades
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Atención & Contacto */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Contacto
            </h4>
            <p className="text-slate-400">
              ¿Listo para dar el siguiente paso?
            </p>
            <p className="text-slate-200 font-mono text-[11px]">
              contacto@impulsandotedigitalmente.com
            </p>
            <a
              href="#contacto"
              className="inline-block mt-2 py-2 px-3.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all font-semibold"
            >
              Iniciar Conversación
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Impulsándote Digitalmente. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Tecnología accesible y resultados tangibles</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
