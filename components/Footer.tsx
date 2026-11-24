export function ActionBar() {
  return (
    <nav className="actionbar" aria-label="Acción rápida">
      <a className="btn btn--primary" href="#cotizar">
        Cotizar proyecto
      </a>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="footer closing" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Cotiza tu sitio web, aplicación o invitación digital.</h2>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href="#cotizar">
            Cotizar proyecto
            <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
              <path className="m-arrow__stem" d="M1 6h8" />
              <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
            </svg>
          </a>
        </div>

        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-5">
              <a className="nav__logo" href="#top">
                <img
                  src="/logo-transparent.png"
                  alt="Logo de Impulsándote Digitalmente"
                  width={30}
                  height={30}
                />
                <span>Impulsándote Digitalmente</span>
              </a>
              <p className="footer__lede">
                Firma tecnológica especializada en sitios web estratégicos, aplicaciones para
                procesos e invitaciones digitales temáticas con tecnología accesible.
              </p>
            </div>

            <div className="span-2 footer__col">
              <h4>Soluciones</h4>
              <a href="#aplicaciones">Aplicaciones</a>
              <a href="#servicios">Sitios web</a>
              <a href="#servicios">Arquitectura</a>
            </div>

            <div className="span-2 footer__col">
              <h4>Invitaciones</h4>
              <a href="#invitaciones">Boda elegante</a>
              <a href="#invitaciones">XV Años</a>
              <a href="#invitaciones">Gala corporativa</a>
            </div>

            <div className="span-2 footer__col">
              <h4>Método</h4>
              <a href="#proceso">Cómo trabajamos</a>
              <a href="#compromiso">Nuestro enfoque</a>
              <a href="#preguntas">Preguntas frecuentes</a>
            </div>

            <div className="span-2 footer__col">
              <h4>Proyecto</h4>
              <a href="#cotizar">Cotizar proyecto</a>
              <a href="#cotizar">Plan integral</a>
            </div>
          </div>

          <div className="footer__legal">
            <span>© 2026 Impulsándote Digitalmente</span>
            <a href="/credits.html">Fotografías vía Wikimedia Commons y Unsplash</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
