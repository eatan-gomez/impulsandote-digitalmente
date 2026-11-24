const HUB_DIAGRAM_SPEC = JSON.stringify({
  layout: "hub",
  alt: "Tu sistema central conectado con WhatsApp, Gmail, Google Sheets, Stripe, Notion y GitHub.",
  center: { label: "Plataforma", icon: "ui:bot" },
  spokes: [
    { label: "WhatsApp", icon: "whatsapp" },
    { label: "Gmail", icon: "gmail" },
    { label: "Sheets", icon: "google-sheets" },
    { label: "Stripe", icon: "stripe" },
    { label: "Notion", icon: "notion" },
    { label: "GitHub", icon: "github" },
  ],
});

export default function ServicesSection() {
  return (
    <section
      className="section g2 g2m"
      id="servicios"
      style={{ "--h": 2 } as React.CSSProperties}
      aria-labelledby="servicios-h"
    >
      <div className="wrap">
        {/* Screen 1 of 2 */}
        <div className="group">
          <div className="section-head">
            <h2 id="servicios-h">
              Servicios web, aplicaciones e invitaciones.{" "}
              <span className="muted">Tecnología accesible con alcance definido.</span>
            </h2>
          </div>

          <div className="grid">
            {/* Card 1: Websites for Lead Generation */}
            <article className="card card--open card--row span-6">
              <h3>Páginas web para captar clientes</h3>
              <p>
                Sitios rápidos, claros en celular y estructurados para convertir visitas en mensajes o solicitudes reales.
              </p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b">
                  <div
                    className="at-rise fit to-edge"
                    style={
                      {
                        "--fit-max": "390px",
                        "--ax": "max(24px, 50% - 195px)",
                        "--ay": "40px",
                        "--ay-sm": "32px",
                      } as React.CSSProperties
                    }
                    data-ui-loop=""
                  >
                    <div
                      className="ui ui-panel ui-stat"
                      data-ui="stat"
                      data-from="42"
                      data-to="68"
                      data-suffix="%"
                    >
                      <div className="ui-stat__head">
                        <div className="ui-stat__top">
                          <span className="ui-stat__label">
                            Solicitudes desde móvil
                          </span>
                          <span className="ui-stat__range">Últimos 14 días</span>
                        </div>
                        <div className="ui-stat__line">
                          <span className="ui-stat__num" data-stat-num="">
                            68%
                          </span>
                          <span className="ui-chip ui-chip--plain ui-stat__delta">
                            +26 pts
                          </span>
                          <span className="ui-stat__sub">
                            sobre el periodo previo
                          </span>
                        </div>
                      </div>
                      <div className="ui-stat__chart">
                        <svg
                          className="ui-stat__svg"
                          viewBox="0 0 400 120"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                          <path
                            className="ui-stat__grid"
                            d="M0 30.5H400M0 60.5H400M0 90.5H400"
                          />
                          <path
                            className="ui-stat__cover"
                            fillRule="evenodd"
                            d=""
                          />
                          <g className="ui-stat__bars">
                            <rect rx="3" x="0" y="54" width="21" height="66" />
                            <rect rx="3" x="29" y="48" width="21" height="72" />
                            <rect rx="3" x="58" y="51" width="21" height="69" />
                            <rect rx="3" x="87" y="40" width="21" height="80" />
                            <rect rx="3" x="116" y="44" width="21" height="76" />
                            <rect rx="3" x="145" y="34" width="21" height="86" />
                            <rect rx="3" x="174" y="39" width="21" height="81" />
                            <rect rx="3" x="204" y="30" width="21" height="90" />
                            <rect rx="3" x="233" y="35" width="21" height="85" />
                            <rect rx="3" x="262" y="26" width="21" height="94" />
                            <rect rx="3" x="291" y="31" width="21" height="89" />
                            <rect rx="3" x="320" y="23" width="21" height="97" />
                            <rect rx="3" x="349" y="27" width="21" height="93" />
                            <rect rx="3" x="378" y="16" width="21" height="104" />
                          </g>
                        </svg>
                        <div className="ui-stat__axis" aria-hidden="true">
                          <span>Día 1</span>
                          <span>Día 7</span>
                          <span>Hoy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2: Process Optimization Applications */}
            <article className="card card--open card--row span-6">
              <h3>Aplicaciones que optimizan procesos</h3>
              <p>
                Sistemas internos con reglas automáticas para pedidos, citas, cobros y control operativo diario.
              </p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b">
                  <div
                    className="at-right to-edge"
                    style={
                      {
                        "--ax": "32px",
                        "--ay": "44px",
                        "--ay-sm": "28px",
                      } as React.CSSProperties
                    }
                  >
                    <div className="ui ui-panel ui-toggles" data-ui="toggles">
                      <div className="ui-head">
                        <div className="ui-title">Reglas del sistema</div>
                        <span className="ui-spacer" />
                        <div className="ui-meta" data-tg-count="">
                          3 de 4 activas
                        </div>
                      </div>
                      <ul className="ui-toggles__list">
                        <li className="ui-tg">
                          <span className="ui-tg__text">
                            <span className="ui-tg__label">
                              Confirmación por WhatsApp
                            </span>
                            <span className="ui-tg__sub">
                              Envío al registrar pedido o cita
                            </span>
                          </span>
                          <button
                            className="ui-switch is-on"
                            type="button"
                            role="switch"
                            aria-checked="true"
                            aria-label="Confirmación por WhatsApp"
                          >
                            <i />
                          </button>
                        </li>
                        <li className="ui-tg">
                          <span className="ui-tg__text">
                            <span className="ui-tg__label">
                              Descuento automático de stock
                            </span>
                            <span className="ui-tg__sub">
                              Actualiza sucursales al instante
                            </span>
                          </span>
                          <button
                            className="ui-switch is-on"
                            type="button"
                            role="switch"
                            aria-checked="true"
                            aria-label="Descuento automático de stock"
                          >
                            <i />
                          </button>
                        </li>
                        <li className="ui-tg">
                          <span className="ui-tg__text">
                            <span className="ui-tg__label">
                              Aprobación manual de descuentos
                            </span>
                            <span className="ui-tg__sub">
                              Solo en montos mayores al límite
                            </span>
                          </span>
                          <button
                            className="ui-switch"
                            type="button"
                            role="switch"
                            aria-checked="false"
                            aria-label="Aprobación manual de descuentos"
                          >
                            <i />
                          </button>
                        </li>
                        <li className="ui-tg">
                          <span className="ui-tg__text">
                            <span className="ui-tg__label">
                              Respaldo diario en la nube
                            </span>
                            <span className="ui-tg__sub">
                              Copia cifrada cada madrugada
                            </span>
                          </span>
                          <button
                            className="ui-switch is-on"
                            type="button"
                            role="switch"
                            aria-checked="true"
                            aria-label="Respaldo diario en la nube"
                          >
                            <i />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Screen 2 of 2 */}
        <div className="group">
          <div className="grid">
            {/* Card 3: Hub Tools Diagram */}
            <article className="card card--open card--row span-6">
              <h3>Aplicaciones web integradas a tus herramientas</h3>
              <p>
                Integramos tu web o sistema con correo, hojas de cálculo, pasarelas de pago y mensajería en un solo flujo.
              </p>
              <div className="panel panel--flush">
                <div
                  className="dg"
                  data-diagram={HUB_DIAGRAM_SPEC}
                  data-icon-base="/assets/icons"
                  suppressHydrationWarning
                />
              </div>
            </article>

            {/* Card 4: Digital Invitations Live RSVP */}
            <article className="card card--open card--row span-6">
              <h3>Invitaciones digitales con RSVP</h3>
              <p>
                Experiencias web temáticas para bodas, XV años y galas con mapa GPS, itinerario y pases QR por invitado.
              </p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b">
                  <div
                    className="at-rise fit"
                    style={
                      {
                        "--fit-max": "390px",
                        "--ax": "max(24px, 50% - 195px)",
                        "--ay": "calc(100% - 210px)",
                        "--ay-sm": "24px",
                      } as React.CSSProperties
                    }
                  >
                    <div className="ui ui-notify" data-ui="notify">
                      <ul className="ui-notify__list" data-notify-list="">
                        <li className="ui-note">
                          <span
                            className="ui-avatar ui-note__av"
                            data-tone="1"
                          >
                            FR
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Familia Rodríguez confirmó <time>ahora</time>
                            </span>
                            <span className="ui-note__body">
                              2 pases asignados · Mesa 4 · Boda Sofía y Ale
                            </span>
                          </span>
                        </li>
                        <li className="ui-note">
                          <span
                            className="ui-avatar ui-note__av"
                            data-tone="4"
                          >
                            QR
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Pase VIP #042 emitido <time>3m</time>
                            </span>
                            <span className="ui-note__body">
                              Enviado con ruta de Google Maps y Waze
                            </span>
                          </span>
                        </li>
                        <li className="ui-note">
                          <span
                            className="ui-avatar ui-note__av"
                            data-tone="3"
                          >
                            LP
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Canción sugerida para XV <time>9m</time>
                            </span>
                            <span className="ui-note__body">
                              Lista musical actualizada para el evento
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
