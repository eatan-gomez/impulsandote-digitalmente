"use client";

import { useState } from "react";
import {
  Calculator,
  CheckCircle,
  Clock,
  Sparkles,
  Zap,
  ArrowRight,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState<"web" | "app" | "invitacion">("web");
  const [scope, setScope] = useState<"starter" | "pro" | "elite">("pro");
  const [addons, setAddons] = useState<string[]>(["whatsapp", "seo"]);
  const [urgency, setUrgency] = useState<"standard" | "express">("standard");

  const projectTypes = [
    {
      id: "web",
      name: "Página Web de Alto Impacto",
      desc: "Captación de clientes, presencia corporativa y conversión",
      basePrice: { starter: 4500, pro: 8500, elite: 14500 },
      baseDays: { starter: 5, pro: 10, elite: 18 },
    },
    {
      id: "app",
      name: "Desarrollo de App / Software",
      desc: "Automatización de procesos, sistemas y paneles a medida",
      basePrice: { starter: 12000, pro: 24000, elite: 42000 },
      baseDays: { starter: 15, pro: 28, elite: 45 },
    },
    {
      id: "invitacion",
      name: "Invitación Digital Interactiva",
      desc: "Eventos, bodas, XV años con RSVP en vivo y GPS",
      basePrice: { starter: 1800, pro: 3200, elite: 4900 },
      baseDays: { starter: 2, pro: 4, elite: 7 },
    },
  ];

  const currentConfig = projectTypes.find((p) => p.id === projectType)!;

  const addonOptions = [
    {
      id: "whatsapp",
      name: "Integración Directa a WhatsApp & CRM",
      price: 800,
      applicable: ["web", "app", "invitacion"],
    },
    {
      id: "seo",
      name: "Optimización SEO Avanzada para Google",
      price: 1500,
      applicable: ["web"],
    },
    {
      id: "qr",
      name: "Generación de Pases de Acceso con Código QR",
      price: 900,
      applicable: ["invitacion", "app"],
    },
    {
      id: "payments",
      name: "Pasarela de Cobros en Línea (Stripe / Mercado Pago)",
      price: 2500,
      applicable: ["web", "app"],
    },
    {
      id: "domain",
      name: "Dominio .com + SSL + Hosting Cloud Anual",
      price: 1200,
      applicable: ["web", "app", "invitacion"],
    },
  ];

  const filteredAddons = addonOptions.filter((a) =>
    a.applicable.includes(projectType)
  );

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculation
  const basePrice = currentConfig.basePrice[scope];
  const addonsTotal = addons
    .filter((id) => filteredAddons.some((a) => a.id === id))
    .reduce((sum, id) => {
      const match = addonOptions.find((a) => a.id === id);
      return sum + (match ? match.price : 0);
    }, 0);

  const subtotal = basePrice + addonsTotal;
  const expressMultiplier = urgency === "express" ? 1.25 : 1;
  const finalPrice = Math.round(subtotal * expressMultiplier);

  const calculatedDays =
    urgency === "express"
      ? Math.max(2, Math.round(currentConfig.baseDays[scope] * 0.6))
      : currentConfig.baseDays[scope];

  // WhatsApp formatted message link
  const generateWhatsAppLink = () => {
    const selectedAddonNames = addons
      .map((id) => addonOptions.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = encodeURIComponent(
      `¡Hola Impulsándote Digitalmente! 👋 He calculado una cotización en su web:\n\n` +
        `📌 Servicio: ${currentConfig.name}\n` +
        `⚡ Alcance: ${scope.toUpperCase()}\n` +
        `📦 Adicionales: ${selectedAddonNames || "Ninguno"}\n` +
        `⏱ Modalidad: ${urgency === "express" ? "Entrega Exprés" : "Estándar"}\n` +
        `💰 Estimado aproximado: $${finalPrice.toLocaleString()} MXN\n` +
        `🗓 Tiempo estimado: ~${calculatedDays} días hábiles\n\n` +
        `¿Podemos revisar los detalles de mi proyecto?`
    );
    return `https://wa.me/5215500000000?text=${text}`;
  };

  return (
    <section id="cotizador" className="py-24 relative bg-[#060913] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENCIA & TECNOLOGÍA ACCESIBLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Calculadora de Inversión <span className="text-gradient-cyan">Estimada</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Sin precios ocultos ni cotizaciones eternas. Elige las especificaciones de tu proyecto y obtén un estimado al instante listo para consultar.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-8 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            {/* Step 1: Select Type */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-3">
                1. Selecciona el Tipo de Solución:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setProjectType(type.id as "web" | "app" | "invitacion");
                    }}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      projectType === type.id
                        ? "bg-cyan-500/15 border-cyan-400 shadow-md shadow-cyan-950/50"
                        : "bg-slate-900/60 border-white/10 hover:border-white/20 text-slate-400"
                    }`}
                  >
                    <div className="font-bold text-sm text-white mb-1">{type.name}</div>
                    <div className="text-[11px] text-slate-400 leading-snug">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope Level */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-3">
                2. Nivel de Alcance del Proyecto:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <button
                  onClick={() => setScope("starter")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    scope === "starter"
                      ? "bg-indigo-500/20 border-indigo-400 text-white"
                      : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm">Inicial / Esencial</div>
                  <div className="text-[10px] text-slate-400">Funcionalidad base</div>
                </button>

                <button
                  onClick={() => setScope("pro")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    scope === "pro"
                      ? "bg-indigo-500/20 border-indigo-400 text-white"
                      : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm text-cyan-300">Avanzado (Recomendado)</div>
                  <div className="text-[10px] text-slate-400">Alto impacto total</div>
                </button>

                <button
                  onClick={() => setScope("elite")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    scope === "elite"
                      ? "bg-indigo-500/20 border-indigo-400 text-white"
                      : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm">Personalizado / Élite</div>
                  <div className="text-[10px] text-slate-400">Escala completa</div>
                </button>
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-3">
                3. Módulos & Complementos Opcionales:
              </label>
              <div className="space-y-2">
                {filteredAddons.map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "bg-cyan-500/10 border-cyan-500/40 text-white"
                          : "bg-slate-900/40 border-white/10 text-slate-400 hover:bg-slate-900/70"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border ${
                            isChecked
                              ? "bg-cyan-500 border-cyan-400 text-white"
                              : "border-slate-600 bg-slate-900"
                          }`}
                        >
                          {isChecked && <CheckCircle className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-cyan-400">
                        +${addon.price.toLocaleString()} MXN
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Urgency */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-3">
                4. Tiempo de Entrega Deseado:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  onClick={() => setUrgency("standard")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    urgency === "standard"
                      ? "bg-slate-800 border-cyan-400 text-white"
                      : "bg-slate-900/50 border-white/10 text-slate-400"
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold">Tiempo Estándar</div>
                  <div className="text-[10px] text-slate-400">Cronograma regular optimizado</div>
                </button>
                <button
                  onClick={() => setUrgency("express")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    urgency === "express"
                      ? "bg-slate-800 border-amber-400 text-amber-300"
                      : "bg-slate-900/50 border-white/10 text-slate-400"
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold flex items-center justify-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Entrega Prioritaria Exprés</span>
                  </div>
                  <div className="text-[10px] text-slate-400">Doble velocidad de despliegue</div>
                </button>
              </div>
            </div>
          </div>

          {/* Result Card (Right) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-[#060c1d]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  RESUMEN DE ESTIMADO
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  Garantía de Satisfacción
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-300">Inversión Estimada:</span>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                      ${finalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 ml-1.5 font-mono">MXN*</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-slate-900/80 border border-white/10">
                  <span className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Tiempo de Entrega:</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-300">
                    Aprox. {calculatedDays} días hábiles
                  </span>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  *Los montos son estimados de referencia. Ajustamos planes a presupuestos flexibles con esquema de anticipo y entrega final garantizada.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Consultar esta Cotización por WhatsApp</span>
                </a>

                <a
                  href="#contacto"
                  className="w-full py-3 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-white/10 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Llenar Formulario de Contacto Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Reassurance pills */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>¿Por qué elegir Impulsándote Digitalmente?</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Sin plazos forzosos ni pagos de renta eterna. La web o aplicación te pertenece al 100%, con código limpio y soporte personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
