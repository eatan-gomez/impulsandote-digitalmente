"use client";

import {
  Globe,
  PartyPopper,
  CheckCircle2,
  ArrowRight,
  Layers,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "web",
      tag: "CONVERSIÓN & VENTAS",
      title: "Páginas Web de Alto Impacto",
      subtitle: "Diseñadas para cautivar miradas y captar clientes calificados.",
      description:
        "Creamos sitios web de vanguardia técnica que no solo se ven espectaculares, sino que están estratégicamente estructurados para convertir visitantes en clientes reales. Rápido, seguro y posicionado en Google.",
      gradient: "from-cyan-500 to-blue-600",
      accentBg: "bg-cyan-500/10",
      accentBorder: "border-cyan-500/30",
      accentText: "text-cyan-400",
      icon: Globe,
      features: [
        "Arquitectura UI/UX moderna enfocada en conversión de leads",
        "Velocidad de carga relámpago (< 1 segundo)",
        "Optimización SEO para posicionar en Google local y global",
        "Integración directa con WhatsApp, CRM y analítica web",
        "Diseño 100% responsivo para móviles, tablets y monitores",
        "Certificado SSL de máxima seguridad y hosting de alta disponibilidad",
      ],
      idealFor: "Empresas, despachos, profesionistas, emprendedores y marcas personales.",
    },
    {
      id: "apps",
      tag: "OPERACIÓN & EFICIENCIA",
      title: "Desarrollo de Aplicaciones & Software",
      subtitle: "Optimiza procesos, elimina errores y automatiza tu operación.",
      description:
        "Desarrollamos sistemas digitales a la medida exacta de tus necesidades empresariales. Olvídate de hojas de cálculo desordenadas y softwares genéricos caros: creamos la herramienta que tu equipo realmente necesita.",
      gradient: "from-indigo-500 to-purple-600",
      accentBg: "bg-indigo-500/10",
      accentBorder: "border-indigo-500/30",
      accentText: "text-indigo-400",
      icon: Cpu,
      features: [
        "Paneles administrativos (dashboards) intuitivos con control de acceso",
        "Automatización de flujos repetitivos y gestión de pedidos o citas",
        "Bases de datos seguras, escalables y con respaldo automático",
        "Integración con pasarelas de pago (Stripe, Mercado Pago) y APIs",
        "Informes y métricas de desempeño del negocio en tiempo real",
        "Acceso desde cualquier dispositivo sin necesidad de descargas pesadas",
      ],
      idealFor: "Pymes en expansión, negocios de servicios, logística y comercios.",
    },
    {
      id: "invitaciones",
      tag: "LÍNEA EXCLUSIVA EVENTOS",
      title: "Invitaciones Digitales Interactivas",
      subtitle: "La experiencia premium que tus invitados recordarán desde el primer click.",
      description:
        "Revoluciona la organización de tus eventos con invitaciones web de alta tecnología. Muy superior a un archivo PDF o una imagen estática: ofrece interacción total con confirmación en vivo y control de acceso.",
      gradient: "from-purple-500 to-pink-600",
      accentBg: "bg-purple-500/10",
      accentBorder: "border-purple-500/30",
      accentText: "text-pink-400",
      icon: PartyPopper,
      features: [
        "Confirmación de asistencia (RSVP) en tiempo real con cupo de acompañantes",
        "Ubicación GPS con botones directos para Waze y Google Maps",
        "Pases de acceso exclusivos con código QR para recepción ordenada",
        "Cuenta regresiva dinámica hacia la fecha del evento",
        "Itinerario detallado, sugerencias de hospedaje y Dress Code interactivo",
        "Mesa de regalos con enlaces bancarios, Liverpool, Amazon o sobre virtual",
      ],
      idealFor: "Bodas, XV Años, Galas corporativas, Bautizos y Organizadores de Eventos.",
    },
  ];

  return (
    <section id="servicios" className="py-24 relative bg-[#060913] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NUESTRO CATÁLOGO ESTRATÉGICO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tecnología diseñada para <span className="text-gradient-cyan">transformar tu realidad</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Planes integrales diseñados a la medida para empresas que buscan clientes, negocios que buscan optimizar su operación y organizadores que buscan eventos extraordinarios.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="relative rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between glass-panel-hover group border border-white/10"
              >
                {/* Glow accent */}
                <div
                  className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-15 rounded-full blur-3xl pointer-events-none group-hover:opacity-30 transition-opacity`}
                ></div>

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg shadow-cyan-950/50 text-white`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-[11px] font-mono font-semibold tracking-wider px-3 py-1 rounded-full ${service.accentBg} ${service.accentBorder} ${service.accentText} border`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Capacidades Incluidas</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2
                            className={`w-4 h-4 mt-0.5 shrink-0 ${service.accentText}`}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with Target & Action */}
                <div className="pt-6 border-t border-white/10">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      Ideal para:
                    </span>
                    <span className="text-xs text-slate-200 font-medium">
                      {service.idealFor}
                    </span>
                  </div>

                  <a
                    href="#cotizador"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold border border-white/10 group-hover:border-cyan-500/40 transition-all"
                  >
                    <span>Cotizar este Servicio</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
