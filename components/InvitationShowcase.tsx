"use client";

import { useState, useEffect } from "react";
import {
  PartyPopper,
  QrCode,
  MapPin,
  Clock,
  Check,
  Send,
  Sparkles,
  Gift,
  Calendar,
  Volume2,
  Copy,
  Heart,
  Crown,
  Briefcase,
  Maximize2,
  X,
  Compass,
} from "lucide-react";

export default function InvitationShowcase() {
  const [eventType, setEventType] = useState<"boda" | "xv" | "corp">("boda");
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const [guestName, setGuestName] = useState("");
  const [customSong, setCustomSong] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [copiedClabe, setCopiedClabe] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  // Dynamic countdown simulation
  const [countdown, setCountdown] = useState({
    days: 48,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyClabe = (clabe: string) => {
    navigator.clipboard.writeText(clabe);
    setCopiedClabe(true);
    setTimeout(() => setCopiedClabe(false), 2500);
  };

  const themes = {
    boda: {
      type: "boda",
      name: "Boda Sofía & Alejandro",
      pillBadge: "BODA DE LUJO & GALA",
      pillStyle: "bg-amber-950/60 text-amber-300 border-amber-500/40",
      accentGradient: "from-amber-200 via-yellow-100 to-amber-400",
      accentBorder: "border-amber-500/30",
      headerBg: "bg-gradient-to-b from-[#18130d] via-[#100c07] to-[#0c0905]",
      cardBg: "bg-[#140e08]/90",
      title: "Sofía & Alejandro",
      dateFormatted: "Sábado, 28 de Noviembre de 2026",
      quote:
        "El amor no se mira con los ojos, sino con el alma. Con la bendición de Dios y de nuestros padres, queremos que seas parte del inicio de nuestra vida juntos.",
      parents: "Padres de la Novia: Roberto & Carmen • Padres del Novio: Fernando & Patricia",
      schedule: [
        { time: "16:00 hrs", event: "Ceremonia Religiosa", detail: "Parroquia San Jerónimo Lídice" },
        { time: "17:30 hrs", event: "Cóctel de Bienvenida", detail: "Jardín Los Encinos" },
        { time: "19:00 hrs", event: "Banquete & Brindis", detail: "Salón Principal" },
        { time: "21:00 hrs", event: "Apertura de Pista & Fiesta", detail: "DJ & Grupo en Vivo" },
      ],
      places: [
        {
          role: "Ceremonia Religiosa",
          name: "Parroquia San Jerónimo Lídice",
          address: "Av. San Jerónimo 142, San Jerónimo",
        },
        {
          role: "Recepción & Fiesta",
          name: "Hacienda San José - Salón Los Encinos",
          address: "Km 24.5 Carretera Panamericana",
        },
      ],
      dressCodeTitle: "Rigurosa Etiqueta / Black Tie",
      dressCodeDesc:
        "Damas: Vestido largo de noche • Caballeros: Traje formal oscuro o esmoquin. (Color blanco y champagne reservados exclusivamente para la novia).",
      dressPalette: ["#111827", "#1e293b", "#78350f", "#831843"],
      giftRegistry: {
        liverpool: "Evento #5129482",
        amazon: "Mesa Digital Sofía & Ale",
        clabe: "012180004567891234",
        bank: "BBVA Bancomer (Sofía Reyes)",
      },
      icon: Heart,
    },
    xv: {
      type: "xv",
      name: "Mis XV Años Valentina",
      pillBadge: "XV AÑOS PRINCESS GLAM",
      pillStyle: "bg-purple-950/60 text-pink-300 border-purple-500/40",
      accentGradient: "from-pink-300 via-purple-200 to-indigo-300",
      accentBorder: "border-purple-500/30",
      headerBg: "bg-gradient-to-b from-[#1b0a2a] via-[#12061d] to-[#0a0311]",
      cardBg: "bg-[#150722]/90",
      title: "Valentina Isabel",
      dateFormatted: "Viernes, 16 de Octubre de 2026",
      quote:
        "Hay momentos en la vida que son mágicos e inolvidables. Doy gracias a Dios por mis 15 primaveras y quiero celebrar esta noche mágica a tu lado.",
      parents: "Mis Padres: Carlos Alberto & Mónica • Mis Padrinos: Eduardo & Laura",
      schedule: [
        { time: "17:00 hrs", event: "Misa de Acción de Gracias", detail: "Capilla de Nuestra Señora del Rosario" },
        { time: "18:30 hrs", event: "Recepción & Alfombra Rosa", detail: "Terraza Crystal Palace" },
        { time: "20:00 hrs", event: "Vals de Honor con mi Padre", detail: "Pista Central Iluminada" },
        { time: "21:30 hrs", event: "Show Sorpresa & DJ Party", detail: "Apertura de Barra de Mocktails" },
      ],
      places: [
        {
          role: "Misa de Acción de Gracias",
          name: "Capilla Nuestra Señora del Rosario",
          address: "Calzada de los Arcos #304",
        },
        {
          role: "Fiesta de Gala",
          name: "Salón Crystal Palace - Terraza VIP",
          address: "Av. Jacarandas #850, Jardines del Sol",
        },
      ],
      dressCodeTitle: "Formal de Gala & Glamour",
      dressCodeDesc:
        "Damas: Vestido de fiesta elegante • Caballeros: Traje formal. (Nota especial: El tono Lila / Morado Pastel está reservado únicamente para la Quinceañera).",
      dressPalette: ["#0f172a", "#1e1b4b", "#064e3b", "#831843"],
      giftRegistry: {
        liverpool: "Mesa Mis XV #7729103",
        amazon: "Wishlist Valentina",
        clabe: "072180009876543210",
        bank: "Banorte (Mónica Delgado)",
      },
      icon: Crown,
    },
    corp: {
      type: "corp",
      name: "Tech Summit & Gala Anual 2026",
      pillBadge: "GALA EMPRESARIAL & SUMMIT",
      pillStyle: "bg-cyan-950/60 text-cyan-300 border-cyan-500/40",
      accentGradient: "from-cyan-300 via-sky-200 to-blue-400",
      accentBorder: "border-cyan-500/30",
      headerBg: "bg-gradient-to-b from-[#09152b] via-[#060e1d] to-[#040812]",
      cardBg: "bg-[#071324]/90",
      title: "Tech Summit & Gala Anual",
      dateFormatted: "Jueves, 10 de Diciembre de 2026",
      quote:
        "El punto de encuentro anual que congrega a los líderes de la industria, directivos corporativos y visionarios de la transformación tecnológica.",
      parents: "Organiza: Impulsándote Digitalmente & Consejo de Innovación Empresarial",
      schedule: [
        { time: "09:00 hrs", event: "Acreditación & Desayuno de Networking", detail: "Foyer Principal The St. Regis" },
        { time: "10:30 hrs", event: "Conferencia Magistral: IA Aplicada", detail: "Grand Ballroom" },
        { time: "13:30 hrs", event: "Almuerzo Ejecutivo & Mesas Redondas", detail: "Terraza Panorámica" },
        { time: "18:00 hrs", event: "Gala de Premiación & Cóctel VIP", detail: "Networking Lounge Exclusivo" },
      ],
      places: [
        {
          role: "Sede de la Cumbre & Gala",
          name: "The St. Regis Hotel - Grand Ballroom",
          address: "Paseo de la Reforma 439 (Valet Parking Disponible)",
        },
      ],
      dressCodeTitle: "Business Formal / Black Tie Optional",
      dressCodeDesc:
        "Ejecutivos: Traje formal oscuro con corbata o esmoquin • Ejecutivas: Traje sastre de gala o vestido formal cóctel.",
      dressPalette: ["#09090b", "#1e293b", "#0f766e", "#1e3a8a"],
      giftRegistry: {
        liverpool: "Acreditación Incluida",
        amazon: "Donativo Fundación Tech",
        clabe: "021180001234567890",
        bank: "Santander (Impulsándote Corp)",
      },
      icon: Briefcase,
    },
  };

  const current = themes[eventType];
  const IconComponent = current.icon;

  return (
    <section id="invitaciones" className="py-24 relative bg-[#040711] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-4">
            <PartyPopper className="w-3.5 h-3.5" />
            <span>LÍNEA ESPECIALIZADA PARA ORGANIZADORES & ANFITRIONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Invitaciones Digitales <span className="text-gradient-cyan">Interactivas</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Personalizadas al 100% para cada estilo de celebración. Reemplaza el papel y los aburridos PDFs con una experiencia web memorable que incluye música, GPS, itinerario y confirmación en tiempo real.
          </p>
        </div>

        {/* Thematic Tab Switcher */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 gap-1.5 sm:gap-2 shadow-2xl">
            <button
              onClick={() => {
                setEventType("boda");
                setRsvpConfirmed(false);
              }}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                eventType === "boda"
                  ? "bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white shadow-lg shadow-amber-950/60"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
              <span>Boda Sofía & Alejandro</span>
            </button>

            <button
              onClick={() => {
                setEventType("xv");
                setRsvpConfirmed(false);
              }}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                eventType === "xv"
                  ? "bg-gradient-to-r from-purple-500 via-fuchsia-600 to-pink-600 text-white shadow-lg shadow-purple-950/60"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Crown className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>Mis XV Años Valentina</span>
            </button>

            <button
              onClick={() => {
                setEventType("corp");
                setRsvpConfirmed(false);
              }}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                eventType === "corp"
                  ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-950/60"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4 text-cyan-200" />
              <span>Tech Summit & Gala Anual</span>
            </button>
          </div>
        </div>

        {/* Content Section: Left Benefits & Right Thematic Phone Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Deep Customization */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                {current.pillBadge} • DISEÑO A LA MEDIDA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {eventType === "boda" && "La elegancia y romanticismo que tu boda merece"}
                {eventType === "xv" && "Una celebración mágica e inolvidable de XV primaveras"}
                {eventType === "corp" && "Sofisticación ejecutiva y tecnología de punta para tu empresa"}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Cada evento tiene su propia identidad. No usamos plantillas genéricas: adaptamos la paleta de colores, la música ambiental, el dress code y los accesos con código QR para que tus invitados queden impresionados desde el momento en que abren la invitación.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">RSVP Automatizado</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tus invitados confirman si van y con cuántos pases. Ahorras hasta un 30% en platillos no desperdiciados.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <QrCode className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Pases QR Nominativos</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pase digital intransferible para control de acceso ágil y seguro en la puerta del salón o recinto.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Waze & Google Maps</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ruta GPS en un solo toque para iglesia y salón. Nadie se perderá ni llegará tarde.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Gift className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Mesa de Regalos & CLABE</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enlaces a tiendas departamentales y botón para copiar cuenta bancaria en un solo clic.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsFullscreenOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-950/50 hover:opacity-95 transition-all cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Ver en Pantalla Completa</span>
              </button>

              <a
                href="#cotizador"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-white/15 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Cotizar esta Invitación</span>
              </a>
            </div>
          </div>

          {/* Right Column: Responsive Smartphone Frame Preview */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[44px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 shadow-2xl border-4 border-slate-700/60">
              {/* Speaker & Sensor Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-800 mr-2"></div>
                <div className="w-8 h-1.5 rounded-full bg-slate-800"></div>
              </div>

              {/* Smartphone Inner Screen */}
              <div className="relative rounded-[32px] overflow-hidden bg-[#070a14] border border-white/10 text-slate-100 flex flex-col max-h-[640px] overflow-y-auto no-scrollbar shadow-inner">
                {/* Audio & Status Header Bar */}
                <div className="sticky top-0 z-20 px-3.5 py-2.5 bg-black/80 backdrop-blur-md flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <button
                      onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                      className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1"
                      title="Música ambiental"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span className="text-[10px] text-slate-300">
                        {isPlayingMusic ? "Música activada" : "Silenciado"}
                      </span>
                    </button>
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">5G • Batería 100%</span>
                </div>

                {/* Thematic Hero inside Mockup */}
                <div className={`p-6 text-center relative overflow-hidden ${current.headerBg} border-b border-white/10`}>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider mb-3 border border-white/15">
                    <IconComponent className="w-3 h-3 text-amber-300" />
                    <span>{current.pillBadge}</span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r ${current.accentGradient} bg-clip-text text-transparent mb-2`}
                  >
                    {current.title}
                  </h3>

                  <p className="text-[11px] text-slate-300 italic mb-4 max-w-[260px] mx-auto leading-relaxed">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  <div className="text-[10px] text-slate-400 font-mono mb-2">
                    {current.parents}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold px-3 py-1 rounded-full bg-black/40 border border-amber-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{current.dateFormatted}</span>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="p-3.5 bg-black/80 border-b border-white/10 text-center">
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                    FALTAN PARA ESTE GRAN MOMENTO:
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 max-w-[270px] mx-auto">
                    <div className="bg-slate-900/90 p-1.5 rounded-lg border border-white/10">
                      <div className="text-sm font-bold text-white font-mono">{countdown.days}</div>
                      <div className="text-[8px] text-slate-400">DÍAS</div>
                    </div>
                    <div className="bg-slate-900/90 p-1.5 rounded-lg border border-white/10">
                      <div className="text-sm font-bold text-white font-mono">{countdown.hours}</div>
                      <div className="text-[8px] text-slate-400">HORAS</div>
                    </div>
                    <div className="bg-slate-900/90 p-1.5 rounded-lg border border-white/10">
                      <div className="text-sm font-bold text-white font-mono">{countdown.minutes}</div>
                      <div className="text-[8px] text-slate-400">MIN</div>
                    </div>
                    <div className="bg-slate-900/90 p-1.5 rounded-lg border border-white/10">
                      <div className="text-sm font-bold text-cyan-400 font-mono">{countdown.seconds}</div>
                      <div className="text-[8px] text-slate-400">SEG</div>
                    </div>
                  </div>
                </div>

                {/* Timeline / Itinerary */}
                <div className="p-4 bg-slate-950/70 border-b border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Itinerario del Evento</span>
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">Horarios</span>
                  </div>
                  <div className="space-y-2">
                    {current.schedule.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <span className="font-mono text-amber-300 font-semibold shrink-0 text-[10px] pt-0.5">
                          {item.time}
                        </span>
                        <div>
                          <div className="text-[11px] font-semibold text-slate-200">{item.event}</div>
                          <div className="text-[9px] text-slate-400">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Locations with GPS Buttons */}
                <div className="p-4 border-b border-white/10 space-y-3 bg-[#0a0e1c]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Ubicación & Cómo Llegar</span>
                  </div>
                  {current.places.map((place, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 space-y-1.5">
                      <span className="text-[10px] font-mono text-cyan-400 block font-semibold">
                        {place.role}
                      </span>
                      <div className="text-xs font-bold text-white">{place.name}</div>
                      <div className="text-[10px] text-slate-300">{place.address}</div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <a
                          href="https://waze.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 px-2 rounded-lg bg-sky-600/30 text-sky-200 border border-sky-500/30 text-[10px] font-semibold flex items-center justify-center gap-1 hover:bg-sky-600/50"
                        >
                          <Compass className="w-3 h-3" />
                          <span>Abrir Waze</span>
                        </a>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 px-2 rounded-lg bg-emerald-600/30 text-emerald-200 border border-emerald-500/30 text-[10px] font-semibold flex items-center justify-center gap-1 hover:bg-emerald-600/50"
                        >
                          <MapPin className="w-3 h-3" />
                          <span>Google Maps</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dress Code Palette */}
                <div className="p-4 bg-slate-950/80 border-b border-white/10 space-y-2">
                  <div className="text-xs font-bold text-white">Código de Vestimenta:</div>
                  <div className="text-[11px] font-semibold text-amber-300">
                    {current.dressCodeTitle}
                  </div>
                  <p className="text-[10px] text-slate-300 leading-relaxed">
                    {current.dressCodeDesc}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[9px] text-slate-400">Paleta sugerida:</span>
                    {current.dressPalette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-white/20 inline-block shadow-sm"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                </div>

                {/* Gift Registry / Mesa de Regalos */}
                <div className="p-4 bg-[#080d1a] border-b border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <Gift className="w-3.5 h-3.5 text-pink-400" />
                      <span>Mesa de Regalos & Sobre</span>
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Liverpool / Tiendas:</span>
                      <span className="font-semibold text-white">{current.giftRegistry.liverpool}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Amazon Wishlist:</span>
                      <span className="font-semibold text-white">{current.giftRegistry.amazon}</span>
                    </div>
                    <div className="pt-1.5 border-t border-white/10 flex justify-between items-center">
                      <div className="text-[10px]">
                        <span className="text-slate-400 block">Transferencia CLABE:</span>
                        <span className="font-mono text-cyan-300 font-semibold">{current.giftRegistry.clabe}</span>
                      </div>
                      <button
                        onClick={() => handleCopyClabe(current.giftRegistry.clabe)}
                        className="py-1 px-2.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-semibold flex items-center gap-1 hover:bg-cyan-500/30"
                      >
                        {copiedClabe ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedClabe ? "¡Copiada!" : "Copiar"}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive RSVP Simulator */}
                <div className="p-4 bg-slate-950/95 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <Send className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Confirmación de Asistencia (RSVP)</span>
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      En Vivo
                    </span>
                  </div>

                  {!rsvpConfirmed ? (
                    <div className="space-y-2.5">
                      <div>
                        <label className="text-[10px] text-slate-300 block mb-1">Nombre del invitado / familia:</label>
                        <input
                          type="text"
                          placeholder="Ej. Ing. Daniel & Esposa"
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-slate-900 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      {eventType === "xv" && (
                        <div>
                          <label className="text-[10px] text-slate-300 block mb-1">Canción para la fiesta:</label>
                          <input
                            type="text"
                            placeholder="¿Qué tema no puede faltar?"
                            value={customSong}
                            onChange={(e) => setCustomSong(e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-slate-900 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                      )}

                      {eventType === "corp" && (
                        <div>
                          <label className="text-[10px] text-slate-300 block mb-1">Empresa / Cargo:</label>
                          <input
                            type="text"
                            placeholder="Ej. Fintech Global / Director de TI"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-slate-900 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-[11px] text-slate-300">Pases reservados:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                            className="w-6 h-6 rounded bg-slate-800 text-white font-bold flex items-center justify-center hover:bg-slate-700"
                          >
                            -
                          </button>
                          <span className="font-mono font-bold text-white">{guestCount}</span>
                          <button
                            onClick={() => setGuestCount(Math.min(6, guestCount + 1))}
                            className="w-6 h-6 rounded bg-slate-800 text-white font-bold flex items-center justify-center hover:bg-slate-700"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => setRsvpConfirmed(true)}
                        className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Confirmar Asistencia Ahora</span>
                      </button>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-center space-y-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                        <Check className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-emerald-300">
                        ¡Asistencia Registrada con Éxito!
                      </div>
                      <p className="text-[10px] text-slate-300">
                        Invitado: {guestName || "Invitado de Honor"} ({guestCount} pases asignados).
                      </p>
                      {/* Generated Pass QR */}
                      <div className="bg-white p-2.5 rounded-xl inline-block my-1 shadow-md">
                        <QrCode className="w-16 h-16 text-slate-900" />
                      </div>
                      <div className="text-[9px] font-mono text-emerald-300 font-bold">
                        PASE VIP ID: #ID-2026-VIP-99
                      </div>
                      <button
                        onClick={() => setRsvpConfirmed(false)}
                        className="text-[10px] text-cyan-400 hover:underline block mx-auto pt-1 cursor-pointer"
                      >
                        Reiniciar simulación
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN REALISTIC INTERACTIVE DEMO MODAL */}
      {isFullscreenOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[92vh] bg-[#070b16] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Top Bar */}
            <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-white">
                  DEMO REAL: {current.name}
                </span>
              </div>
              <button
                onClick={() => setIsFullscreenOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Cerrar vista completa"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">
              {/* Cover Banner */}
              <div className={`p-8 rounded-2xl text-center ${current.headerBg} border ${current.accentBorder}`}>
                <span className={`inline-block text-xs font-mono px-3 py-1 rounded-full border mb-3 ${current.pillStyle}`}>
                  {current.pillBadge}
                </span>
                <h3 className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${current.accentGradient} bg-clip-text text-transparent mb-3`}>
                  {current.title}
                </h3>
                <p className="text-sm text-slate-300 italic max-w-md mx-auto leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="text-xs text-amber-300 font-semibold mt-4">
                  {current.dateFormatted}
                </div>
              </div>

              {/* Countdown */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 text-center">
                <div className="text-xs font-mono text-slate-400 mb-2">TIEMPO RESTANTE PARA EL EVENTO:</div>
                <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                  <div className="bg-slate-800 p-2 rounded-lg text-center">
                    <div className="text-lg font-bold font-mono text-white">{countdown.days}</div>
                    <div className="text-[9px] text-slate-400">DÍAS</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-lg text-center">
                    <div className="text-lg font-bold font-mono text-white">{countdown.hours}</div>
                    <div className="text-[9px] text-slate-400">HORAS</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-lg text-center">
                    <div className="text-lg font-bold font-mono text-white">{countdown.minutes}</div>
                    <div className="text-[9px] text-slate-400">MINUTOS</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-lg text-center">
                    <div className="text-lg font-bold font-mono text-cyan-400">{countdown.seconds}</div>
                    <div className="text-[9px] text-slate-400">SEGUNDOS</div>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Itinerario Completo del Evento</span>
                </h4>
                <div className="space-y-3">
                  {current.schedule.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                      <span className="font-mono text-amber-300 font-bold text-xs">{item.time}</span>
                      <div>
                        <div className="text-xs font-bold text-white">{item.event}</div>
                        <div className="text-[11px] text-slate-400">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Cards */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Ubicaciones & Navegación GPS</span>
                </h4>
                {current.places.map((place, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{place.role}</span>
                    <div className="text-sm font-bold text-white">{place.name}</div>
                    <div className="text-xs text-slate-300">{place.address}</div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <a
                        href="https://waze.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 rounded-xl bg-sky-600/30 text-sky-200 border border-sky-500/30 text-xs font-semibold flex items-center justify-center gap-1.5"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>Abrir Waze</span>
                      </a>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 rounded-xl bg-emerald-600/30 text-emerald-200 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-1.5"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dress Code & Gifts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-amber-300 font-semibold">Código de Vestimenta</span>
                  <div className="text-sm font-bold text-white">{current.dressCodeTitle}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{current.dressCodeDesc}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2">
                  <span className="text-xs font-mono text-pink-300 font-semibold">Mesa de Regalos & CLABE</span>
                  <div className="text-xs text-slate-300">
                    <div>{current.giftRegistry.liverpool}</div>
                    <div>{current.giftRegistry.amazon}</div>
                  </div>
                  <div className="pt-1 flex items-center justify-between text-xs">
                    <span className="font-mono text-cyan-300 text-[11px]">{current.giftRegistry.clabe}</span>
                    <button
                      onClick={() => handleCopyClabe(current.giftRegistry.clabe)}
                      className="py-1 px-2.5 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-semibold"
                    >
                      {copiedClabe ? "Copiada" : "Copiar"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                ¿Te gusta este diseño? Lo adaptamos con tus fotos, música y colores.
              </span>
              <a
                href="#cotizador"
                onClick={() => setIsFullscreenOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs text-center"
              >
                Cotizar esta Invitación
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
