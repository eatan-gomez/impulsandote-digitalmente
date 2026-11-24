"use client";

import { useState } from "react";

interface WorkflowItem {
  id: string;
  initials: string;
  tone: string;
  client: string;
  subject: string;
  status: string;
  statusType: "open" | "work" | "done";
  age: string;
  summary: string;
  steps: { label: string; meta: string; done: boolean }[];
}

const INITIAL_ITEMS: WorkflowItem[] = [
  {
    id: "pedidos",
    initials: "SM",
    tone: "1",
    client: "Sofía Méndez",
    subject: "Pedidos web · Sucursal Norte",
    status: "En curso",
    statusType: "work",
    age: "3m",
    summary:
      "Cada pedido entrante desde el sitio web descuenta inventario y avisa al área de empaque por WhatsApp.",
    steps: [
      { label: "Captura automática desde formulario web", meta: "Completado", done: true },
      { label: "Descuento en inventario central", meta: "Completado", done: true },
      { label: "Confirmación de guía al cliente", meta: "Pendiente", done: false },
    ],
  },
  {
    id: "rsvp",
    initials: "BM",
    tone: "3",
    client: "Boda Morales",
    subject: "Control RSVP · 148 invitados",
    status: "Activo",
    statusType: "open",
    age: "8m",
    summary:
      "Lista de invitados sincronizada con la invitación digital: confirma acompañantes y genera pases QR al instante.",
    steps: [
      { label: "Registro de 2 lugares por familia", meta: "Validado", done: true },
      { label: "Emisión de código QR único", meta: "Generado", done: true },
      { label: "Asignación en mesa de recepción", meta: "Mesa 4", done: true },
    ],
  },
  {
    id: "citas",
    initials: "CN",
    tone: "4",
    client: "Clínica Dental",
    subject: "Agenda diaria · 12 citas",
    status: "Confirmado",
    statusType: "done",
    age: "14m",
    summary:
      "Calendario en línea para pacientes que envía recordatorio 24 horas antes y evita citas empalmadas.",
    steps: [
      { label: "Reserva de horario disponible", meta: "09:30 h", done: true },
      { label: "Recordatorio automático previo", meta: "Enviado", done: true },
      { label: "Historial de visita registrado", meta: "Al día", done: true },
    ],
  },
  {
    id: "cotizaciones",
    initials: "DS",
    tone: "2",
    client: "Distribuidora Sur",
    subject: "Cotizador B2B · Envío PDF",
    status: "En curso",
    statusType: "work",
    age: "21m",
    summary:
      "Calcula precios por volumen en segundos y guarda cada propuesta con seguimiento comercial.",
    steps: [
      { label: "Selección de partidas y descuentos", meta: "4 líneas", done: true },
      { label: "Cálculo automático de impuestos", meta: "Listo", done: true },
      { label: "Aprobación por parte del cliente", meta: "En espera", done: false },
    ],
  },
  {
    id: "inventario",
    initials: "NB",
    tone: "2",
    client: "Almacén Norte",
    subject: "Alertas de stock mínimo",
    status: "En curso",
    statusType: "work",
    age: "49m",
    summary:
      "Notificación inmediata al encargado cuando un insumo baja del umbral configurado.",
    steps: [
      { label: "Conteo diario actualizado", meta: "3 alertas", done: true },
      { label: "Orden de reposición sugerida", meta: "Generada", done: true },
      { label: "Confirmación de proveedor", meta: "Pendiente", done: false },
    ],
  },
];

export default function AppFrameSection() {
  const [items, setItems] = useState<WorkflowItem[]>(INITIAL_ITEMS);
  const [selectedId, setSelectedId] = useState<string>("pedidos");
  const [filterMode, setFilterMode] = useState<"all" | "open" | "done">("all");

  const visibleItems = items.filter((item) => {
    if (filterMode === "all") return true;
    if (filterMode === "open") return item.statusType !== "done";
    return item.statusType === "done";
  });

  const activeItem =
    items.find((it) => it.id === selectedId) || visibleItems[0] || items[0];

  const handleCompleteSelected = () => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== activeItem.id) return item;
        const nextDone = item.statusType !== "done";
        return {
          ...item,
          status: nextDone ? "Completado" : "En curso",
          statusType: nextDone ? "done" : "work",
          steps: item.steps.map((s) => ({
            ...s,
            done: nextDone ? true : s.done,
            meta: nextDone ? "Completado" : s.meta,
          })),
        };
      })
    );
  };

  return (
    <section className="section" id="aplicaciones" aria-labelledby="apps-h">
      <div className="wrap">
        <div className="grid grid--top">
          <div className="span-5">
            <h2 id="apps-h">
              Aplicaciones web para ordenar procesos.{" "}
              <span className="muted">Tu operación en una pantalla.</span>
            </h2>
          </div>
          <div className="span-6 start-7 stack-4">
            <p className="t-lead">
              Centraliza pedidos, citas, inventario o invitados sin depender de archivos dispersos. Selecciona una fila del tablero para revisar su flujo en vivo.
            </p>
            <a className="link" href="#cotizar">
              Solicitar sistema a medida
            </a>
          </div>
        </div>

        <div
          className="ui app fill"
          data-ui="window"
          role="region"
          aria-label="Demostración interactiva de tablero operativo"
        >
          {/* Left Pane: Window list */}
          <div className="app__pane app__pane--list">
            <div className="ui-panel ui-win">
              <div className="ui-win__bar">
                <span className="ui-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ui-win__crumb">
                  Operación <i>/</i> <b>Tablero activo</b>
                </span>
                <span className="ui-spacer" />
              </div>

              <div className="ui-win__body">
                <nav className="ui-win__side" aria-label="Filtros del tablero">
                  <button
                    type="button"
                    className={`ui-win__nav ${filterMode === "all" ? "is-on" : ""}`}
                    onClick={() => setFilterMode("all")}
                  >
                    Todos <em>{items.length}</em>
                  </button>
                  <button
                    type="button"
                    className={`ui-win__nav ${filterMode === "open" ? "is-on" : ""}`}
                    onClick={() => setFilterMode("open")}
                  >
                    Activos <em>{items.filter((i) => i.statusType !== "done").length}</em>
                  </button>
                  <button
                    type="button"
                    className={`ui-win__nav ${filterMode === "done" ? "is-on" : ""}`}
                    onClick={() => setFilterMode("done")}
                  >
                    Cerrados <em>{items.filter((i) => i.statusType === "done").length}</em>
                  </button>
                </nav>

                <div className="ui-win__main">
                  <div className="ui-win__cols" aria-hidden="true">
                    <span>Cliente</span>
                    <span>Flujo</span>
                    <span>Estado</span>
                    <span>Hace</span>
                  </div>

                  <ul className="ui-win__rows">
                    {visibleItems.map((item) => {
                      const isSelected = item.id === activeItem.id;
                      const chipClass =
                        item.statusType === "done"
                          ? "ui-win__st is-done"
                          : item.statusType === "work"
                          ? "ui-win__st is-you"
                          : "ui-win__st";
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            className={`ui-win__row app-row-btn ${
                              isSelected ? "is-selected" : ""
                            }`}
                            onClick={() => setSelectedId(item.id)}
                          >
                            <span className="ui-avatar" data-tone={item.tone}>
                              {item.initials}
                            </span>
                            <span className="ui-win__who">{item.client}</span>
                            <span className="ui-win__sub">{item.subject}</span>
                            <span className={chipClass}>{item.status}</span>
                            <span className="ui-win__age">{item.age}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane: Open Interactive Workflow Detail */}
          <div className="app__pane app__pane--open">
            <div className="app-detail">
              <div className="app-detail__head">
                <div>
                  <div className="app-detail__title">{activeItem.subject}</div>
                  <div className="app-detail__sub">
                    Cuenta: {activeItem.client} · Actualizado hace {activeItem.age}
                  </div>
                </div>
                <span
                  className={`ui-chip ${
                    activeItem.statusType === "done"
                      ? "ui-chip--ink"
                      : "ui-chip--accent ui-chip--live"
                  }`}
                >
                  {activeItem.status}
                </span>
              </div>

              <p className="t-body" style={{ fontSize: "14px", lineHeight: 1.55 }}>
                {activeItem.summary}
              </p>

              <div className="app-detail__steps">
                {activeItem.steps.map((step, index) => (
                  <div key={index} className="app-detail__step">
                    <span>{step.label}</span>
                    <span className="app-detail__step-meta">{step.meta}</span>
                  </div>
                ))}
              </div>

              <div className="app-detail__actions">
                <span className="ui-meta">
                  Vista previa interactiva de un panel a medida
                </span>
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={handleCompleteSelected}
                >
                  {activeItem.statusType === "done"
                    ? "Reabrir flujo"
                    : "Marcar como completado"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
