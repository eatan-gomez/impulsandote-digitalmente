'use client';

import { useState } from 'react';

const LINES = ['Sitio web', 'Aplicación a medida', 'Invitación digital', 'Plan integral'] as const;
const GOALS = [
  'Captar clientes',
  'Optimizar operación',
  'Invitados y QR',
  'Presencia completa',
] as const;
const TIMELINES = ['Ritmo estándar', 'Lanzamiento prioritario'] as const;

export default function QuoteSection() {
  const [line, setLine] = useState<(typeof LINES)[number]>('Sitio web');
  const [goal, setGoal] = useState<(typeof GOALS)[number]>('Captar clientes');
  const [timeline, setTimeline] = useState<(typeof TIMELINES)[number]>('Ritmo estándar');
  const [copied, setCopied] = useState(false);

  const summary = `${line} · ${goal} · ${timeline}`;

  function handleCopy() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(summary).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section
      className="section"
      id="cotizar"
      style={{ ['--h' as string]: 1 }}
      aria-labelledby="cotizar-h"
    >
      <div className="wrap grid">
        <div className="span-5 stack-4">
          <h2 id="cotizar-h">Cotización de web, aplicación o invitación</h2>
          <p className="t-body">
            Elige la solución, el enfoque y el ritmo de entrega para preparar tu propuesta de trabajo.
          </p>

          <figure className="cotizar-visual-card">
            <img
              src="/assets/img/photo-f186069734-960.jpg"
              srcSet="/assets/img/photo-f186069734-500.jpg 500w, /assets/img/photo-f186069734-960.jpg 960w"
              sizes="(max-width: 1023px) 92vw, 38vw"
              alt="Desarrollo web y seguimiento comercial en oficina"
              width={960}
              height={1433}
              loading="lazy"
            />
          </figure>

          <div className="config-box" aria-label="Configurador de proyecto">
            <div className="field">
              <label htmlFor="cfg-line">Línea de servicio</label>
              <select
                id="cfg-line"
                className="cotizar-select"
                value={line}
                onChange={(e) => setLine(e.target.value as (typeof LINES)[number])}
              >
                {LINES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="cfg-goal">Objetivo principal</label>
              <select
                id="cfg-goal"
                className="cotizar-select"
                value={goal}
                onChange={(e) => setGoal(e.target.value as (typeof GOALS)[number])}
              >
                {GOALS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="cfg-timeline">Tiempo de entrega</label>
              <select
                id="cfg-timeline"
                className="cotizar-select"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value as (typeof TIMELINES)[number])}
              >
                {TIMELINES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="config-summary">
              <div className="stack-2">
                <span className="t-label">Selección actual</span>
                <strong style={{ fontSize: 'var(--t-small)' }}>{summary}</strong>
              </div>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={handleCopy}
              >
                {copied ? 'Resumen copiado' : 'Copiar resumen'}
              </button>
            </div>
          </div>
        </div>

        <div className="span-6 start-7 intake-panel">
          <form
            className="form"
            action="mailto:contacto@impulsandotedigitalmente.example"
            method="post"
            encType="text/plain"
            noValidate
          >
            <input type="hidden" name="plan_configurado" value={summary} />

            <div className="field">
              <label htmlFor="q-name">Nombre completo</label>
              <input
                id="q-name"
                name="nombre"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                required
              />
              <span className="field__error" hidden>
                Ingresa tu nombre para dirigir la propuesta.
              </span>
            </div>

            <div className="field">
              <label htmlFor="q-email">Correo electrónico</label>
              <input
                id="q-email"
                name="correo"
                type="email"
                autoComplete="email"
                placeholder="nombre@tuempresa.com"
                required
              />
              <span className="field__error" hidden>
                Ingresa un correo válido para responderte.
              </span>
            </div>

            <div className="field">
              <label htmlFor="q-company">Empresa o evento</label>
              <input
                id="q-company"
                name="empresa_o_evento"
                type="text"
                placeholder="Nombre de tu negocio o celebración"
              />
            </div>

            <div className="field">
              <label htmlFor="q-notes">Detalles del proyecto</label>
              <textarea
                id="q-notes"
                name="detalles"
                rows={4}
                placeholder="Cuéntanos qué proceso quieres mejorar, qué páginas necesitas o la fecha de tu evento."
                required
              />
              <span className="field__error" hidden>
                Describe brevemente lo que necesitas construir.
              </span>
            </div>

            <div className="btn-row">
              <button type="submit" className="btn btn--primary">
                Solicitar propuesta
              </button>
            </div>

            <p className="form__status" role="status" data-form-status="" />
          </form>
        </div>
      </div>
    </section>
  );
}
