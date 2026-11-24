export default function Navbar() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Ir al contenido
        </a>
        <a className="nav__logo" href="#top">
          <img
            src="/logo-transparent.png"
            alt="Logo de Impulsándote Digitalmente"
            width={28}
            height={28}
          />
          <span>
            Impulsándote<span className="nav__logo__full"> Digitalmente</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Principal">
          <div className="nav__item">
            <a className="nav__link" href="#servicios">
              Servicios{" "}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M3 4.5l3 3 3-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Para empresas</p>
                  <a href="#servicios">
                    Páginas web
                    <span>Sitios enfocados en captar clientes</span>
                  </a>
                  <a href="#aplicaciones">
                    Aplicaciones a medida
                    <span>Sistemas para agilizar procesos diarios</span>
                  </a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Para eventos</p>
                  <a href="#invitaciones">
                    Invitaciones de boda
                    <span>Diseño formal con pase QR y mapa</span>
                  </a>
                  <a href="#invitaciones">
                    XV años y galas
                    <span>Confirmación RSVP y mesa de regalos</span>
                  </a>
                </div>
                <a className="menu-card span-3 start-10" href="#invitaciones">
                  <div className="panel">
                    <img
                      className="frame__img"
                      src="/assets/img/photo-f189923665-500.jpg"
                      alt="Mesa decorada con arreglos florales y velas blancas"
                    />
                  </div>
                  <span className="t-card">Invitaciones interactivas</span>
                  <span className="t-small muted">Tres estilos listos para probar</span>
                </a>
              </div>
            </div>
          </div>

          <div className="nav__item">
            <a className="nav__link" href="#aplicaciones">
              Aplicaciones
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#invitaciones">
              Invitaciones
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#preguntas">
              Preguntas
            </a>
          </div>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary" href="#cotizar">
            Cotizar proyecto
          </a>
        </div>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded="false"
          aria-label="Menú"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M2 5h14M2 13h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
