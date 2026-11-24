export default function ProcessSection() {
  return (
    <section
      className="section bg-halo"
      id="proceso"
      style={{ ['--h' as string]: 2 }}
      data-moment="pinned-chapters"
      aria-labelledby="proceso-h"
    >
      <div className="wrap mo-pc__grid">
        <div className="mo-pc__text">
          <h2 id="proceso-h">Proceso para crear tu web, aplicación o invitación</h2>
          <ol className="mo-pc__steps">
            <li className="mo-pc__step">
              <h3>Plan estratégico del proyecto digital</h3>
              <p>
                Definimos qué necesita lograr tu negocio o evento antes de diseñar, evitando
                funciones que no aportan valor.
              </p>
              <figure className="mo-pc__visual">
                <img
                  src="/assets/img/photo-d183-960.jpg"
                  srcSet="/assets/img/photo-d183-500.jpg 500w, /assets/img/photo-d183-960.jpg 960w, /assets/img/photo-d183.jpg 1280w"
                  sizes="(max-width: 900px) 92vw, 44vw"
                  alt="Cuaderno de planeación y lápiz sobre escritorio de madera"
                  width={1280}
                  height={853}
                  loading="lazy"
                />
              </figure>
            </li>

            <li className="mo-pc__step">
              <h3>Diseño y desarrollo web o de aplicación</h3>
              <p>
                Construimos páginas web rápidas, aplicaciones claras y pases digitales responsivos
                adaptados a tu identidad.
              </p>
              <figure className="mo-pc__visual">
                <img
                  src="/assets/img/photo-f186069734-960.jpg"
                  srcSet="/assets/img/photo-f186069734-500.jpg 500w, /assets/img/photo-f186069734-960.jpg 960w"
                  sizes="(max-width: 900px) 92vw, 44vw"
                  alt="Desarrollo web y pruebas de interfaz en laptop"
                  width={960}
                  height={1433}
                  loading="lazy"
                />
              </figure>
            </li>

            <li className="mo-pc__step">
              <h3>Publicación del sitio o invitación</h3>
              <p>
                Entregamos tu proyecto verificado en celular y escritorio, con enlaces listos para
                compartir o comenzar a operar.
              </p>
              <div className="mo-pc__visual mo-pc__visual--lit">
                <div className="ui ui-panel ui-checks" data-ui="checklist">
                  <div className="ui-checks__head">
                    <div className="ui-title">Lista de entrega</div>
                    <span className="ui-spacer" />
                    <div className="ui-meta" data-checks-count="">
                      3 de 5
                    </div>
                  </div>
                  <div className="ui-checks__bar">
                    <i data-checks-bar="" style={{ ['--k' as string]: 0.6 }} />
                  </div>
                  <ul className="ui-checks__list">
                    <li className="ui-check is-done">
                      <span className="ui-check__box">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                        </svg>
                      </span>
                      <span className="ui-check__label">Dominio y certificado SSL</span>
                    </li>
                    <li className="ui-check is-done">
                      <span className="ui-check__box">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                        </svg>
                      </span>
                      <span className="ui-check__label">Diseño adaptable verificado</span>
                    </li>
                    <li className="ui-check is-done">
                      <span className="ui-check__box">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                        </svg>
                      </span>
                      <span className="ui-check__label">Formulario o pase QR activo</span>
                    </li>
                    <li className="ui-check">
                      <span className="ui-check__box">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                        </svg>
                      </span>
                      <span className="ui-check__label">Pruebas de carga y enlaces</span>
                    </li>
                    <li className="ui-check">
                      <span className="ui-check__box">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                        </svg>
                      </span>
                      <span className="ui-check__label">Capacitación y entrega final</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="mo-pc__visuals frame" />
      </div>
    </section>
  );
}
