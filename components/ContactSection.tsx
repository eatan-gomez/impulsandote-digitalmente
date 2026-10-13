"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "web",
    budget: "medio",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real setup, this can submit to an API or webhook.
    // For instant satisfaction, we also generate the WhatsApp dispatch link:
    const serviceLabels: Record<string, string> = {
      web: "Página Web de Alto Impacto",
      apps: "Desarrollo de Apps & Automatización",
      invitacion: "Invitación Digital Interactiva para Eventos",
      consultoria: "Plan Estratégico Integral",
    };

    const text = encodeURIComponent(
      `¡Hola Impulsándote Digitalmente! 👋 Les escribo desde el formulario web:\n\n` +
        `👤 Nombre: ${formData.name}\n` +
        `🏢 Negocio / Evento: ${formData.company || "Particular"}\n` +
        `📧 Correo: ${formData.email}\n` +
        `📱 Teléfono: ${formData.phone}\n` +
        `🛠 Servicio de interés: ${serviceLabels[formData.service] || formData.service}\n` +
        `💬 Mensaje: ${formData.message}`
    );

    window.open(`https://wa.me/5215500000000?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 relative bg-[#040711] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>IMPULSO INMEDIATO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Comencemos a diseñar tu <span className="text-gradient-cyan">proyecto digital</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Cuéntanos sobre tu empresa, tu idea de app o tu próximo gran evento. Te respondemos el mismo día con una propuesta clara y sin rodeos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info & highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Canales Directos</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nos apasiona atender rápido. Si prefieres hablar de inmediato con un especialista, contáctanos directamente:
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5215500000000?text=Hola%20Impulsandote%20Digitalmente,%20deseo%20informes%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-4 hover:bg-emerald-900/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 block font-semibold">
                      WHATSAPP OFICIAL (RESPUESTA RÁPIDA)
                    </span>
                    <span className="text-sm font-bold text-white">+52 (55) 0000-0000</span>
                    <span className="text-[11px] text-slate-400 block">Atención personalizada</span>
                  </div>
                </a>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 block font-semibold">
                      CORREO ELECTRÓNICO
                    </span>
                    <span className="text-sm font-bold text-white">contacto@impulsandotedigitalmente.com</span>
                    <span className="text-[11px] text-slate-400 block">Cotizaciones y proyectos formales</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-indigo-400 block font-semibold">
                      HORARIO DE ATENCIÓN
                    </span>
                    <span className="text-sm font-bold text-white">Lunes a Sábado: 9:00 AM - 7:00 PM</span>
                    <span className="text-[11px] text-slate-400 block">Soporte para eventos activos 24/7</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tratamos tu información con estricta confidencialidad.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-cyan-500/30 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Hemos abierto la conversación directa para que te comuniques de inmediato. Un especialista de Impulsándote Digitalmente te atenderá enseguida.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Roberto Sánchez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Empresa o Tipo de Evento
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Clínica Dental / Boda 2026"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. +52 55 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      ¿Qué solución requieres? *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="web">Página Web de Alto Impacto para Captar Clientes</option>
                      <option value="apps">Desarrollo de Aplicaciones & Optimización de Procesos</option>
                      <option value="invitacion">Invitaciones Digitales Interactivas para Eventos</option>
                      <option value="consultoria">Plan Estratégico Digital Integral</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Cuéntanos sobre tu proyecto o fecha de evento
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe qué buscas lograr, cuántos invitados esperas o qué procesos necesitas optimizar..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje & Conectar con un Especialista</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
