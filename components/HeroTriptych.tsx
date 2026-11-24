export default function HeroTriptych() {
  return (
    <section
      className="hero hero--triptych bg-field"
      data-enter=""
      aria-labelledby="hero-h"
    >
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="span-3">
            <h1 id="hero-h" suppressHydrationWarning>
              Webs, aplicaciones e invitaciones digitales
            </h1>
            <p className="hero__lead">
              Planes estratégicos para empresas y organizadores. Entregas claras desde 3 días hábiles.
            </p>
          </div>

          <div
            className="ly-collage span-6 start-4"
            role="img"
            aria-label="Muestra de tres entregables de Impulsándote Digitalmente: página web comercial, tablero operativo e invitación digital de boda"
            suppressHydrationWarning
          >
            {/* Set 1: Webs de alto impacto */}
            <div className="ly-collage__set is-on">
              <div
                className="ly-piece"
                style={{ left: "42%", top: "38%", width: "54%", height: "58%" }}
              >
                <img
                  src="/assets/img/photo-f186069734-960.jpg"
                  srcSet="/assets/img/photo-f186069734-500.jpg 500w, /assets/img/photo-f186069734-960.jpg 960w"
                  sizes="(max-width: 1023px) 60vw, 25vw"
                  width={960}
                  height={1433}
                  alt="Manos escribiendo en una computadora portátil en escritorio de oficina"
                  style={{ objectPosition: "50% 45%" }}
                  fetchPriority="high"
                  data-source="stand-in"
                  data-subject="stand-in"
                />
              </div>

              <div
                className="ly-piece pc-web"
                style={{ left: "4%", top: "6%", width: "52%" }}
              >
                <div className="pc-web__top">
                  <span className="pc-web__brand">Sitio comercial</span>
                  <span className="pc-web__tag">En línea</span>
                </div>
                <h4>Capta clientes desde el primer segundo</h4>
                <div className="pc-web__metrics">
                  <div className="pc-web__stat">
                    <strong>0.6 s</strong>
                    <span>Carga móvil</span>
                  </div>
                  <div className="pc-web__stat">
                    <strong>SSL</strong>
                    <span>Certificado activo</span>
                  </div>
                </div>
              </div>

              <div
                className="ly-piece pc-pill-card"
                style={{ left: "50%", top: "10%", width: "46%" }}
              >
                <div className="pc-pill-card__row">
                  <strong>Contacto directo</strong>
                  <small>WhatsApp y CRM</small>
                </div>
                <span className="muted">
                  Formulario validado con envío al instante
                </span>
              </div>
            </div>

            {/* Set 2: Aplicaciones de procesos */}
            <div className="ly-collage__set" aria-hidden="true">
              <div
                className="ly-piece"
                style={{ left: "40%", top: "38%", width: "56%", height: "58%" }}
              >
                <img
                  src="/assets/img/photo-d183.jpg"
                  srcSet="/assets/img/photo-d183-500.jpg 500w, /assets/img/photo-d183-960.jpg 960w, /assets/img/photo-d183.jpg 1280w"
                  sizes="(max-width: 1023px) 60vw, 25vw"
                  width={1280}
                  height={853}
                  alt="Cuaderno abierto con lápiz sobre mesa de madera oscura"
                  style={{ objectPosition: "50% 50%" }}
                  data-source="library-057"
                  data-subject="desk"
                />
              </div>

              <div
                className="ly-piece pc-ops"
                style={{ left: "4%", top: "6%", width: "54%" }}
              >
                <h4>Control de operación diaria</h4>
                <div className="pc-ops__row">
                  <span>Pedidos activos</span>
                  <em>18 hoy</em>
                </div>
                <div className="pc-ops__row">
                  <span>Citas agendadas</span>
                  <em>Confirmado</em>
                </div>
                <div className="pc-ops__row">
                  <span>Reportes de caja</span>
                  <em>Al día</em>
                </div>
              </div>

              <div
                className="ly-piece pc-pill-card"
                style={{ left: "50%", top: "12%", width: "46%" }}
              >
                <div className="pc-pill-card__row">
                  <strong>Flujo automatizado</strong>
                  <small>Activo</small>
                </div>
                <span className="muted">
                  Sin capturas dobles en hojas de cálculo
                </span>
              </div>
            </div>

            {/* Set 3: Invitaciones digitales para eventos */}
            <div className="ly-collage__set" aria-hidden="true">
              <div
                className="ly-piece"
                style={{ left: "40%", top: "38%", width: "56%", height: "58%" }}
              >
                <img
                  src="/assets/img/photo-f189923665-960.jpg"
                  srcSet="/assets/img/photo-f189923665-500.jpg 500w, /assets/img/photo-f189923665-960.jpg 960w"
                  sizes="(max-width: 1023px) 60vw, 25vw"
                  width={960}
                  height={1433}
                  alt="Mesa de recepción decorada con flores, velas blancas y servilletas verde esmeralda"
                  style={{ objectPosition: "50% 45%" }}
                  data-source="stand-in"
                  data-subject="stand-in"
                />
              </div>

              <div
                className="ly-piece pc-invite"
                style={{ left: "4%", top: "6%", width: "52%" }}
              >
                <small>Nuestra Boda</small>
                <h4>Sofía &amp; Alejandro</h4>
                <span>28 de noviembre · Jardín Los Encinos</span>
              </div>

              <div
                className="ly-piece pc-rsvp-chip"
                style={{ left: "50%", top: "14%", width: "46%" }}
              >
                <div className="pc-rsvp-chip__head">
                  <span>Pase VIP QR</span>
                  <span className="pc-rsvp-chip__badge">Confirmado</span>
                </div>
                <span className="muted">
                  2 lugares asignados · Mapa GPS incluido
                </span>
              </div>
            </div>
          </div>

          <div className="span-3 start-10 hero__cta">
            <a className="btn btn--primary" href="#cotizar">
              Cotizar proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
