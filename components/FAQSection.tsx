const FAQS = [
  {
    q: '¿Qué incluye una página web para empresas?',
    a: 'Diseño enfocado en captar clientes, estructura clara de servicios, adaptación a celular, formulario funcional y carga veloz con certificado SSL.',
  },
  {
    q: '¿Qué aplicaciones desarrollan para optimizar procesos?',
    a: 'Tableros web a medida para cotizaciones, citas, pedidos, inventario y seguimiento de clientes sin depender de archivos dispersos.',
  },
  {
    q: '¿Cómo se personalizan las invitaciones digitales temáticas?',
    a: 'Diseñamos cada invitación según el evento: bodas elegantes, XV años o galas corporativas con cuenta regresiva, mapas GPS, mesa de regalos y confirmación RSVP.',
  },
  {
    q: '¿Las invitaciones digitales funcionan directo en el celular?',
    a: 'Sí. Tus invitados abren el enlace por WhatsApp desde cualquier navegador sin descargar aplicaciones, con vista responsiva y pase QR.',
  },
];

export default function FAQSection() {
  return (
    <section
      className="section"
      id="preguntas"
      style={{ ['--h' as string]: 1 }}
      aria-labelledby="faq-h"
    >
      <div className="wrap grid">
        <div className="span-5 stack-4">
          <h2 id="faq-h">Preguntas sobre web, apps e invitaciones</h2>
          <p className="t-body">
            Respuestas directas sobre tiempos, alcance y entrega antes de iniciar tu proyecto digital.
          </p>
          <div>
            <a className="link" href="#cotizar">
              Ir al configurador de cotización
            </a>
          </div>
        </div>

        <div className="span-6 start-7">
          <figure className="faq-photo">
            <img
              src="/assets/img/photo-d183-960.jpg"
              srcSet="/assets/img/photo-d183-500.jpg 500w, /assets/img/photo-d183-960.jpg 960w, /assets/img/photo-d183.jpg 1280w"
              sizes="(max-width: 1023px) 92vw, 44vw"
              alt="Cuaderno abierto para planeación de proyectos tecnológicos"
              width={1280}
              height={853}
              loading="lazy"
            />
          </figure>
          <div className="faq">
            {FAQS.map((item) => (
              <div key={item.q} className="faq__item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
