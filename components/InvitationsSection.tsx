"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Gift,
  Copy,
  Check,
  QrCode,
  Volume2,
  Maximize2,
  X,
  Compass,
  Heart,
  Crown,
  Briefcase,
} from "lucide-react";

type EventThemeKey = "boda" | "xv" | "corp";
type DeviceViewKey = "portada" | "lugar" | "rsvp";

interface EventThemeSpec {
  id: EventThemeKey;
  tabLabel: string;
  eyebrow: string;
  headline: string;
  description: string;
  specs: { label: string; value: string }[];
  photo: {
    src: string;
    srcSet: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  quote: string;
  hosts: string;
  dateLabel: string;
  schedule: { time: string; title: string; detail: string }[];
  places: { role: string; name: string; address: string }[];
  dressTitle: string;
  dressDesc: string;
  palette: string[];
  registry: { label: string; value: string }[];
  clabe: string;
  rsvpTitle: string;
}

const EVENT_THEMES: Record<EventThemeKey, EventThemeSpec> = {
  boda: {
    id: "boda",
    tabLabel: "Boda elegante",
    eyebrow: "Edición Ceremonia y Gala",
    headline: "Invitación digital de boda en marfil y dorado.",
    description:
      "Incluye historia de los novios, ceremonia y recepción por separado en Waze y Google Maps, mesa de regalos con cuenta CLABE copiable y confirmación por familia.",
    specs: [
      { label: "Confirmación RSVP", value: "Por familia o pase individual" },
      { label: "Mesa de regalos", value: "Tiendas + copia de CLABE" },
      { label: "Control en puerta", value: "Pase QR nominativo" },
    ],
    photo: {
      src: "/assets/img/photo-f61711770-960.jpg",
      srcSet:
        "/assets/img/photo-f61711770-960.jpg 960w, /assets/img/photo-f61711770.jpg 1280w",
      alt: "Ramo nupcial de peonías rosadas y rosas sostenido frente a vestido de encaje",
      width: 1280,
      height: 853,
    },
    title: "Sofía & Alejandro",
    quote:
      "Con la bendición de Dios y de nuestros padres, te invitamos a celebrar el inicio de nuestra vida juntos.",
    hosts: "Padres: Roberto y Carmen · Fernando y Patricia",
    dateLabel: "Sábado 28 de noviembre · 16:00 hrs",
    schedule: [
      { time: "16:00 hrs", title: "Ceremonia religiosa", detail: "Parroquia San Jerónimo" },
      { time: "17:30 hrs", title: "Cóctel de bienvenida", detail: "Jardín Los Encinos" },
      { time: "19:00 hrs", title: "Banquete y brindis", detail: "Salón Hacienda San José" },
      { time: "21:00 hrs", title: "Primer baile y fiesta", detail: "Música en vivo" },
    ],
    places: [
      {
        role: "Ceremonia religiosa",
        name: "Parroquia San Jerónimo",
        address: "Col. San Jerónimo Lídice",
      },
      {
        role: "Recepción y banquete",
        name: "Hacienda San José, Salón Los Encinos",
        address: "Zona Jardines del Sur",
      },
    ],
    dressTitle: "Rigurosa etiqueta",
    dressDesc:
      "Damas: vestido largo de noche. Caballeros: traje oscuro. Blanco y marfil reservados para la novia.",
    palette: ["#111827", "#1e293b", "#6f4e37", "#7c2d3b"],
    registry: [
      { label: "Mesa Liverpool", value: "Evento 5129482" },
      { label: "Mesa Amazon", value: "Lista Sofía y Ale" },
    ],
    clabe: "012180004567891234",
    rsvpTitle: "Confirmar asistencia",
  },
  xv: {
    id: "xv",
    tabLabel: "XV Años",
    eyebrow: "Edición Gala Juvenil",
    headline: "Invitación digital de XV años con buzón musical.",
    description:
      "Pensada para quinceañeras y sus familias: incluye misa, vals, códigos de vestimenta reservados, lluvia de sobres y sugerencias musicales en el registro.",
    specs: [
      { label: "Lista musical", value: "Tus invitados sugieren canciones" },
      { label: "Vestimenta", value: "Muestra paleta reservada" },
      { label: "Acceso VIP", value: "Código QR al confirmar" },
    ],
    photo: {
      src: "/assets/img/photo-f189923665-960.jpg",
      srcSet: "/assets/img/photo-f189923665-960.jpg 960w",
      alt: "Mesa de gala con centro floral, velas blancas y cristalería",
      width: 960,
      height: 1433,
    },
    title: "Mis XV · Valentina",
    quote:
      "Hay momentos en la vida que se recuerdan para siempre. Gracias por acompañarme a celebrar mis quince años.",
    hosts: "Mis padres: Carlos y Mónica · Padrinos: Eduardo y Laura",
    dateLabel: "Viernes 16 de octubre · 17:00 hrs",
    schedule: [
      { time: "17:00 hrs", title: "Misa de acción de gracias", detail: "Capilla del Rosario" },
      { time: "18:30 hrs", title: "Recepción y fotografías", detail: "Terraza Crystal" },
      { time: "20:00 hrs", title: "Entrada y vals de honor", detail: "Pista principal" },
      { time: "21:30 hrs", title: "Cena y fiesta DJ", detail: "Barra juvenil" },
    ],
    places: [
      {
        role: "Misa y recepción",
        name: "Salón Crystal Palace, Terraza VIP",
        address: "Av. Jacarandas, Jardines del Sol",
      },
    ],
    dressTitle: "Formal de gala",
    dressDesc:
      "Vestido formal o traje oscuro. El color rosa palo y borgoña queda reservado para Valentina.",
    palette: ["#0f172a", "#1e3a5f", "#2d6a56", "#8c6418"],
    registry: [
      { label: "Lluvia de sobres", value: "Buzón en recepción" },
      { label: "Mesa departamental", value: "Evento 7729103" },
    ],
    clabe: "072180009876543210",
    rsvpTitle: "Confirmar pases",
  },
  corp: {
    id: "corp",
    tabLabel: "Gala corporativa",
    eyebrow: "Edición Cumbre y Networking",
    headline: "Invitación digital corporativa con registro y QR.",
    description:
      "Diseñada para congresos, premiaciones y cenas anuales: registro por empresa y cargo, horarios de ponencias, mapa con valet parking y credencial QR.",
    specs: [
      { label: "Registro B2B", value: "Captura empresa y puesto" },
      { label: "Agenda", value: "Bloques de ponencias y cóctel" },
      { label: "Aforo", value: "Credencial QR única por asistente" },
    ],
    photo: {
      src: "/assets/img/photo-f73783761-960.jpg",
      srcSet: "/assets/img/photo-f73783761-960.jpg 960w",
      alt: "Salón principal de eventos con candelabros de cristal y piso de madera",
      width: 960,
      height: 722,
    },
    title: "Cumbre Empresarial 2026",
    quote:
      "Encuentro anual de dirección, tecnología aplicada y vinculación estratégica para líderes de industria.",
    hosts: "Convoca: Consejo Directivo e Impulsándote Digitalmente",
    dateLabel: "Jueves 10 de diciembre · 09:00 hrs",
    schedule: [
      { time: "09:00 hrs", title: "Acreditación y desayuno", detail: "Vestíbulo principal" },
      { time: "10:30 hrs", title: "Ponencia inaugural", detail: "Gran Salón St. Regis" },
      { time: "13:30 hrs", title: "Almuerzo ejecutivo", detail: "Terraza panorámica" },
      { time: "18:00 hrs", title: "Premiación y cóctel VIP", detail: "Salón Ejecutivo" },
    ],
    places: [
      {
        role: "Sede del encuentro",
        name: "Grand Ballroom · Hotel St. Regis",
        address: "Paseo de la Reforma, Zona Centro",
      },
    ],
    dressTitle: "Formal de negocios",
    dressDesc:
      "Traje sastre o de etiqueta opcional. Servicio de valet parking disponible desde las 08:30 hrs.",
    palette: ["#0e2238", "#1c2f44", "#2d6a56", "#4c5c6b"],
    registry: [
      { label: "Acceso incluido", value: "Credencial digital nominativa" },
      { label: "Facturación", value: "Disponible en registro" },
    ],
    clabe: "021180001234567890",
    rsvpTitle: "Registrar asistencia",
  },
};

function InvitationDevice({
  theme,
  deviceView,
  setDeviceView,
  isModal = false,
  countdown,
  isPlaying,
  onToggleMusic,
  copiedClabe,
  onCopyClabe,
  rsvpConfirmed,
  onConfirmRsvp,
  onResetRsvp,
  guestName,
  setGuestName,
  guestCount,
  setGuestCount,
  extraField,
  setExtraField,
}: {
  theme: EventThemeSpec;
  deviceView: DeviceViewKey;
  setDeviceView: (v: DeviceViewKey) => void;
  isModal?: boolean;
  countdown: { days: number; hours: number; minutes: number; seconds: number };
  isPlaying: boolean;
  onToggleMusic: () => void;
  copiedClabe: boolean;
  onCopyClabe: (clabe: string) => void;
  rsvpConfirmed: boolean;
  onConfirmRsvp: (e: React.FormEvent) => void;
  onResetRsvp: () => void;
  guestName: string;
  setGuestName: (v: string) => void;
  guestCount: number;
  setGuestCount: (v: number) => void;
  extraField: string;
  setExtraField: (v: string) => void;
}) {
  const Icon =
    theme.id === "boda" ? Heart : theme.id === "xv" ? Crown : Briefcase;

  const showPortada = isModal || deviceView === "portada";
  const showLugar = isModal || deviceView === "lugar";
  const showRsvp = isModal || deviceView === "rsvp";

  return (
    <div
      className="invite-device ui ui-device"
      data-theme={theme.id}
    >
      {/* Top Audio Bar */}
      <div className="inv-topbar">
        <button
          type="button"
          className="inv-audio-btn"
          onClick={onToggleMusic}
          aria-pressed={isPlaying}
        >
          <Volume2 size={14} />
          <span>{isPlaying ? "Música activa" : "Silencio"}</span>
        </button>
        <span style={{ color: "var(--inv-muted)", fontFamily: "var(--font-mono)" }}>
          Invitación web
        </span>
      </div>

      {!isModal && (
        <div
          className="inv-device-tabs"
          role="tablist"
          aria-label="Secciones de la invitación"
        >
          <button
            type="button"
            role="tab"
            className="inv-subtab"
            aria-selected={deviceView === "portada"}
            onClick={() => setDeviceView("portada")}
          >
            Portada
          </button>
          <button
            type="button"
            role="tab"
            className="inv-subtab"
            aria-selected={deviceView === "lugar"}
            onClick={() => setDeviceView("lugar")}
          >
            Sede y regalos
          </button>
          <button
            type="button"
            role="tab"
            className="inv-subtab"
            aria-selected={deviceView === "rsvp"}
            onClick={() => setDeviceView("rsvp")}
          >
            Pase RSVP
          </button>
        </div>
      )}

      <div className="invite-scroll">
        {showPortada && (
          <>
            <div className="inv-photo">
              <img
                src={theme.photo.src}
                srcSet={theme.photo.srcSet}
                sizes="(max-width: 639px) 92vw, 400px"
                width={theme.photo.width}
                height={theme.photo.height}
                alt={theme.photo.alt}
                data-source="stand-in"
                data-subject="stand-in"
              />
            </div>

            <div className="inv-block inv-hero-block">
              <span className="inv-emblem">
                <Icon size={13} />
                <span>{theme.eyebrow}</span>
              </span>
              <p className="inv-title">{theme.title}</p>
              <p className="inv-quote">&ldquo;{theme.quote}&rdquo;</p>
              <div style={{ fontSize: "12px", color: "var(--inv-muted)" }}>
                {theme.hosts}
              </div>
              <div className="inv-date-pill">
                <Calendar size={13} />
                <span>{theme.dateLabel}</span>
              </div>
            </div>

            <div className="inv-block" style={{ borderBottom: isModal ? undefined : 0 }}>
              <div className="inv-heading">
                <Clock size={14} />
                <span>Cuenta regresiva</span>
              </div>
              <div className="inv-countdown">
                <div className="inv-cd-box">
                  <strong>{countdown.days}</strong>
                  <span>DÍAS</span>
                </div>
                <div className="inv-cd-box">
                  <strong>{countdown.hours}</strong>
                  <span>HRS</span>
                </div>
                <div className="inv-cd-box">
                  <strong>{countdown.minutes}</strong>
                  <span>MIN</span>
                </div>
                <div className="inv-cd-box">
                  <strong>{String(countdown.seconds).padStart(2, "0")}</strong>
                  <span>SEG</span>
                </div>
              </div>
            </div>
          </>
        )}

        {showLugar && (
          <>
            <div className="inv-block">
              <div className="inv-heading">
                <Clock size={14} />
                <span>Itinerario del evento</span>
              </div>
              <div className="inv-timeline">
                {theme.schedule.map((row, idx) => (
                  <div key={idx} className="inv-tl-row">
                    <span className="inv-tl-time">{row.time}</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>{row.title}</div>
                      <div style={{ color: "var(--inv-muted)" }}>{row.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="inv-block">
              <div className="inv-heading">
                <MapPin size={14} />
                <span>Ubicaciones y ruta GPS</span>
              </div>
              {theme.places.map((place, idx) => (
                <div key={idx} className="inv-place">
                  <span style={{ color: "var(--inv-accent)", fontWeight: 600 }}>
                    {place.role}
                  </span>
                  <strong style={{ fontSize: "13px" }}>{place.name}</strong>
                  <span style={{ color: "var(--inv-muted)" }}>{place.address}</span>
                  <div className="inv-gps-row">
                    <a
                      href={`https://waze.com/ul?q=${encodeURIComponent(place.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inv-gps-btn"
                    >
                      <Compass size={13} />
                      <span>Waze</span>
                    </a>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(place.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inv-gps-btn"
                    >
                      <MapPin size={13} />
                      <span>Google Maps</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="inv-block" style={{ borderBottom: isModal ? undefined : 0 }}>
              <div className="inv-heading">
                <Gift size={14} />
                <span>
                  {theme.id === "corp" ? "Registro y vestimenta" : "Mesa de regalos"}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "var(--inv-muted)", lineHeight: 1.45 }}>
                {theme.dressTitle}: {theme.dressDesc}
              </p>
              {theme.registry.map((item) => (
                <div key={item.label} className="inv-gift-row">
                  <span style={{ color: "var(--inv-muted)" }}>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
              {theme.id !== "corp" && (
                <div className="inv-gift-row">
                  <div>
                    <div style={{ fontSize: "11px", color: "var(--inv-muted)" }}>
                      Sobre digital (CLABE)
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                      {theme.clabe}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="inv-copy-btn"
                    onClick={() => onCopyClabe(theme.clabe)}
                  >
                    {copiedClabe ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedClabe ? "Copiada" : "Copiar"}</span>
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {showRsvp && (
          <div className="inv-block" style={{ borderBottom: 0 }}>
            <div className="inv-heading">
              <QrCode size={14} />
              <span>{theme.rsvpTitle}</span>
            </div>

            {!rsvpConfirmed ? (
              <form className="inv-rsvp-form" onSubmit={onConfirmRsvp}>
                <div>
                  <label
                    htmlFor={`guest-name-${theme.id}-${isModal ? "modal" : "inline"}`}
                    style={{ fontSize: "12px", display: "block", marginBottom: "4px" }}
                  >
                    Nombre del invitado
                  </label>
                  <input
                    id={`guest-name-${theme.id}-${isModal ? "modal" : "inline"}`}
                    type="text"
                    className="inv-input"
                    placeholder="Ej. Familia Hernández"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </div>

                {theme.id === "xv" && (
                  <div>
                    <label
                      htmlFor={`xv-song-${isModal ? "modal" : "inline"}`}
                      style={{ fontSize: "12px", display: "block", marginBottom: "4px" }}
                    >
                      Canción para bailar en la fiesta
                    </label>
                    <input
                      id={`xv-song-${isModal ? "modal" : "inline"}`}
                      type="text"
                      className="inv-input"
                      placeholder="Escribe título y artista"
                      value={extraField}
                      onChange={(e) => setExtraField(e.target.value)}
                    />
                  </div>
                )}

                {theme.id === "corp" && (
                  <div>
                    <label
                      htmlFor={`corp-role-${isModal ? "modal" : "inline"}`}
                      style={{ fontSize: "12px", display: "block", marginBottom: "4px" }}
                    >
                      Empresa y puesto
                    </label>
                    <input
                      id={`corp-role-${isModal ? "modal" : "inline"}`}
                      type="text"
                      className="inv-input"
                      placeholder="Ej. Dirección de Operaciones"
                      value={extraField}
                      onChange={(e) => setExtraField(e.target.value)}
                    />
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                  }}
                >
                  <span>Lugares confirmados</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <button
                      type="button"
                      className="inv-copy-btn"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      aria-label="Restar un lugar"
                    >
                      -
                    </button>
                    <strong style={{ fontFamily: "var(--font-mono)" }}>
                      {guestCount}
                    </strong>
                    <button
                      type="button"
                      className="inv-copy-btn"
                      onClick={() => setGuestCount(Math.min(6, guestCount + 1))}
                      aria-label="Sumar un lugar"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button type="submit" className="inv-submit">
                  Confirmar y generar pase QR
                </button>
              </form>
            ) : (
              <div className="inv-pass">
                <strong style={{ fontSize: "13px", color: "var(--inv-accent)" }}>
                  Asistencia registrada
                </strong>
                <span style={{ fontSize: "12px" }}>
                  {guestName.trim() || "Invitado de honor"} · {guestCount}{" "}
                  {guestCount === 1 ? "lugar" : "lugares"}
                </span>
                {extraField.trim() && (
                  <span style={{ fontSize: "11px", color: "var(--inv-muted)" }}>
                    {theme.id === "xv" ? "Canción: " : "Cargo: "}
                    {extraField}
                  </span>
                )}
                <div className="inv-qr-box">
                  <QrCode size={68} color="#0e2238" />
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                  FOLIO: ID-2026-084
                </span>
                <button
                  type="button"
                  className="inv-copy-btn"
                  onClick={onResetRsvp}
                >
                  Probar otro registro
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function InvitationsSection() {
  const [activeKey, setActiveKey] = useState<EventThemeKey>("boda");
  const [deviceView, setDeviceView] = useState<DeviceViewKey>("portada");
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedClabe, setCopiedClabe] = useState(false);
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState(2);
  const [extraField, setExtraField] = useState("");
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const [countdown, setCountdown] = useState({
    days: 42,
    hours: 11,
    minutes: 28,
    seconds: 15,
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

  const current = EVENT_THEMES[activeKey];

  const switchTheme = (key: EventThemeKey) => {
    setActiveKey(key);
    setDeviceView("portada");
    setRsvpConfirmed(false);
    setExtraField("");
  };

  const handleCopyClabe = (clabe: string) => {
    navigator.clipboard.writeText(clabe);
    setCopiedClabe(true);
    setTimeout(() => setCopiedClabe(false), 2000);
  };

  const handleConfirmRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpConfirmed(true);
  };

  return (
    <section
      className="section"
      id="invitaciones"
      aria-labelledby="invitaciones-h"
    >
      <div className="wrap grid grid--top">
        {/* Left column: Tabs & Specs */}
        <div className="span-5 stack-5">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <h2 id="invitaciones-h">
              Invitaciones digitales por evento.{" "}
              <span className="muted">Prueba cada diseño en vivo.</span>
            </h2>
          </div>

          <div className="tabs" role="tablist" aria-label="Estilos de invitación">
            {(["boda", "xv", "corp"] as EventThemeKey[]).map((key) => {
              const item = EVENT_THEMES[key];
              const selected = activeKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  className="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${key}`}
                  onClick={() => switchTheme(key)}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>

          <div className="invite-tabs-content">
            <div
              id={`panel-${current.id}`}
              role="tabpanel"
              className="invite-tabpanel"
            >
              <h3 className="t-card" style={{ fontWeight: 500 }}>
                {current.headline}
              </h3>
              <p className="t-body">{current.description}</p>

              <ul className="rows invite-specs">
                {current.specs.map((spec) => (
                  <li key={spec.label}>
                    <span className="rows__name">{spec.label}</span>
                    <span className="rows__value">{spec.value}</span>
                  </li>
                ))}
              </ul>

              <div className="btn-row" style={{ marginTop: "8px" }}>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => setFullscreenOpen(true)}
                >
                  <Maximize2 size={16} />
                  <span>Abrir vista completa</span>
                </button>
                <a className="link" href="#cotizar">
                  Cotizar invitación
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Thematic Invitation Device */}
        <div className="frame frame--split span-6 start-7">
          <InvitationDevice
            theme={current}
            deviceView={deviceView}
            setDeviceView={setDeviceView}
            countdown={countdown}
            isPlaying={isPlaying}
            onToggleMusic={() => setIsPlaying((p) => !p)}
            copiedClabe={copiedClabe}
            onCopyClabe={handleCopyClabe}
            rsvpConfirmed={rsvpConfirmed}
            onConfirmRsvp={handleConfirmRsvp}
            onResetRsvp={() => setRsvpConfirmed(false)}
            guestName={guestName}
            setGuestName={setGuestName}
            guestCount={guestCount}
            setGuestCount={setGuestCount}
            extraField={extraField}
            setExtraField={setExtraField}
          />
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      {fullscreenOpen && (
        <div
          className="inv-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista previa completa: ${current.tabLabel}`}
        >
          <div className="inv-modal-dialog">
            <div className="inv-modal-bar">
              <span>Vista previa · {current.tabLabel}</span>
              <button
                type="button"
                className="inv-modal-close"
                onClick={() => setFullscreenOpen(false)}
                aria-label="Cerrar vista previa"
              >
                <X size={18} />
              </button>
            </div>
            <InvitationDevice
              theme={current}
              deviceView={deviceView}
              setDeviceView={setDeviceView}
              isModal
              countdown={countdown}
              isPlaying={isPlaying}
              onToggleMusic={() => setIsPlaying((p) => !p)}
              copiedClabe={copiedClabe}
              onCopyClabe={handleCopyClabe}
              rsvpConfirmed={rsvpConfirmed}
              onConfirmRsvp={handleConfirmRsvp}
              onResetRsvp={() => setRsvpConfirmed(false)}
              guestName={guestName}
              setGuestName={setGuestName}
              guestCount={guestCount}
              setGuestCount={setGuestCount}
              extraField={extraField}
              setExtraField={setExtraField}
            />
          </div>
        </div>
      )}
    </section>
  );
}
