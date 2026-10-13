"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Monitor,
  Smartphone,
  PartyPopper,
  Zap,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"web" | "app" | "invitacion">("web");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid bg-radial-glow">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[750px] h-[350px] bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          {/* Chip Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/40">
            <div className="w-5 h-5 rounded-md bg-white p-0.5 overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
              <Image src="/logo.png" alt="id" width={20} height={20} className="object-contain" priority />
            </div>
            <span>FIRMA TECNOLÓGICA DE ALTO RENDIMIENTO</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline">Impulsándote Digitalmente</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Convertimos Tecnología en{" "}
            <span className="text-gradient-cyan">Resultados Tangibles</span>{" "}
            para tu Negocio y Eventos.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal mb-8">
            Diseñamos planes estratégicos con{" "}
            <strong className="text-white font-semibold">páginas web de alto impacto</strong> para captar clientes,{" "}
            <strong className="text-white font-semibold">desarrollo de aplicaciones</strong> para optimizar procesos y una línea exclusiva de{" "}
            <strong className="text-white font-semibold">invitaciones digitales interactivas</strong> para eventos memorables.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#cotizador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-xl shadow-cyan-500/25 active:scale-95 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-cyan-200 fill-cyan-200" />
              <span>Cotizar Proyecto en Línea</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#invitaciones"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/30 transition-all text-sm font-medium backdrop-blur-md"
            >
              <PartyPopper className="w-4 h-4 text-purple-400" />
              <span>Ver Invitaciones Digitales</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Tecnología Accesible</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Desarrollo a Medida</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Resultados Tangibles</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Soporte Estratégico</span>
            </div>
          </div>
        </div>

        {/* Interactive Technological Console / Showcase Frame */}
        <div className="relative max-w-5xl mx-auto rounded-2xl glass-panel p-2 sm:p-4 shadow-2xl shadow-cyan-950/40 border border-white/15">
          {/* Console Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 border-b border-white/10 mb-4 bg-slate-950/60 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline-block">
                core.impulsandote.engine v2.6 // status: ready
              </span>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="flex items-center overflow-x-auto max-w-full no-scrollbar bg-slate-900/90 rounded-lg p-1 border border-white/10 text-xs gap-1">
              <button
                onClick={() => setActiveTab("web")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all shrink-0 ${
                  activeTab === "web"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Webs de Impacto</span>
              </button>

              <button
                onClick={() => setActiveTab("app")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all shrink-0 ${
                  activeTab === "app"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Apps & Sistemas</span>
              </button>

              <button
                onClick={() => setActiveTab("invitacion")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all shrink-0 ${
                  activeTab === "invitacion"
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <PartyPopper className="w-3.5 h-3.5" />
                <span>Invitaciones Digitales</span>
              </button>
            </div>
          </div>

          {/* Active Console Panel */}
          <div className="p-4 sm:p-6 bg-[#040814]/90 rounded-xl border border-white/5">
            {activeTab === "web" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Rendimiento Extremo & Conversión</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Páginas web diseñadas para captar clientes desde el primer segundo
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    No creamos simples páginas informativas: construimos herramientas comerciales veloces con arquitectura SEO técnica, diseño intuitivo y llamadas a la acción que aumentan tus ventas.
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-emerald-400 font-mono">99/100</div>
                      <div className="text-[11px] text-slate-400">Google Score</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-cyan-400 font-mono">0.6s</div>
                      <div className="text-[11px] text-slate-400">Carga Ultra Rápida</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-purple-400 font-mono">+40%</div>
                      <div className="text-[11px] text-slate-400">Más Conversión</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-4 border border-cyan-500/20 shadow-lg space-y-3">
                  <div className="text-xs font-mono text-cyan-300 flex items-center justify-between">
                    <span>STATUS: EN LÍNEA</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Arquitectura:</span>
                      <span className="text-slate-200 font-mono">Next.js & Cloud Edge</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Diseño UI/UX:</span>
                      <span className="text-slate-200 font-mono">100% Responsivo</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Integración:</span>
                      <span className="text-slate-200 font-mono">WhatsApp & CRM</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Certificación:</span>
                      <span className="text-emerald-400 font-mono">SSL & Alta Seguridad</span>
                    </div>
                  </div>
                  <a
                    href="#servicios"
                    className="block text-center w-full py-2 rounded-lg bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-semibold transition-colors"
                  >
                    Ver detalles del servicio
                  </a>
                </div>
              </div>
            )}

            {activeTab === "app" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Eficiencia Operativa & Automatización</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Aplicaciones y sistemas a medida que eliminan cuellos de botella
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Desarrollamos soluciones de software para optimizar inventarios, pedidos, gestión de citas, portales de clientes y automatizaciones que ahorran horas de trabajo repetitivo.
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-indigo-400 font-mono">-60%</div>
                      <div className="text-[11px] text-slate-400">Tiempo Manual</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-cyan-400 font-mono">100%</div>
                      <div className="text-[11px] text-slate-400">A tu Medida</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-emerald-400 font-mono">24/7</div>
                      <div className="text-[11px] text-slate-400">Disponibilidad</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-4 border border-indigo-500/20 shadow-lg space-y-3">
                  <div className="text-xs font-mono text-indigo-300 flex items-center justify-between">
                    <span>SISTEMA: FLUIDO</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Base de Datos:</span>
                      <span className="text-slate-200 font-mono">PostgreSQL / Cloud</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Seguridad:</span>
                      <span className="text-slate-200 font-mono">Roles & Permisos</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Accesibilidad:</span>
                      <span className="text-slate-200 font-mono">Móvil & Escritorio</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Automatización:</span>
                      <span className="text-cyan-400 font-mono">Webhooks / API</span>
                    </div>
                  </div>
                  <a
                    href="#servicios"
                    className="block text-center w-full py-2 rounded-lg bg-indigo-500/15 text-indigo-300 hover:bg-indigo-500/25 border border-indigo-500/30 text-xs font-semibold transition-colors"
                  >
                    Ver arquitectura de software
                  </a>
                </div>
              </div>
            )}

            {activeTab === "invitacion" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-2 text-pink-400 text-xs font-mono uppercase tracking-wider">
                    <PartyPopper className="w-3.5 h-3.5" />
                    <span>Línea Especializada en Eventos</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Invitaciones digitales interactivas con RSVP en tiempo real
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Olvídate de las invitaciones estáticas en PDF. Creamos experiencias web multimedia con pases de acceso QR, mapas GPS con Waze/Google Maps, mesa de regalos, itinerario y confirmación automática por WhatsApp.
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-pink-400 font-mono">RSVP</div>
                      <div className="text-[11px] text-slate-400">En Tiempo Real</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-purple-400 font-mono">Pases QR</div>
                      <div className="text-[11px] text-slate-400">Control de Acceso</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/10 text-center">
                      <div className="text-xl font-bold text-cyan-400 font-mono">GPS</div>
                      <div className="text-[11px] text-slate-400">Ubicación Waze/Maps</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-4 border border-pink-500/20 shadow-lg space-y-3">
                  <div className="text-xs font-mono text-pink-300 flex items-center justify-between">
                    <span>MÓDULO: EVENTOS VIP</span>
                    <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Tipos:</span>
                      <span className="text-slate-200 font-mono">Bodas, XV, Galas, Corp</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Interacción:</span>
                      <span className="text-slate-200 font-mono">Música, Galería, Regalos</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Confirmación:</span>
                      <span className="text-slate-200 font-mono">Panel + WhatsApp</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Entrega:</span>
                      <span className="text-pink-400 font-mono">Rápida y Lista para Enviar</span>
                    </div>
                  </div>
                  <a
                    href="#invitaciones"
                    className="block text-center w-full py-2 rounded-lg bg-pink-500/15 text-pink-300 hover:bg-pink-500/25 border border-pink-500/30 text-xs font-semibold transition-colors"
                  >
                    Ver demo interactivo
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
