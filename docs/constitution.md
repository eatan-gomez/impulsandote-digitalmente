# Constitución del Proyecto — Impulsándote Digitalmente

**Versión**: 1.0  
**Ámbito**: Repositorio web de **Impulsándote Digitalmente**  
**Jerarquía normativa**: Este documento define los principios permanentes e innegociables del proyecto dentro de la metodología **SDD (Spec-Driven Development)**. Ninguna especificación (`specs/NNN-*/`), plan técnico ni cambio de código puede contradecir esta Constitución sin una enmienda aprobada explícitamente.

> **Relación entre documentos**  
> - `docs/constitution.md` *(este archivo)*: **qué es innegociable y por qué** (principios permanentes).  
> - `AGENTS.md`: **cómo operar en este repositorio** (estructura, comandos, trampas técnicas y flujo diario).  
> - `MEMORY.md`: **estado vivo entre sesiones** (avances, decisiones recientes y próximos pasos).

Las palabras **DEBE**, **NO DEBE** y **DEBERÍA** se interpretan como requisitos estrictos (obligatorio, prohibido y recomendado con justificación si se omite).

---

## Artículo I — Identidad del Producto y Voz de Marca

1. **Enfoque comercial claro**: el sitio existe para representar con credibilidad a **Impulsándote Digitalmente** y convertir visitas en conversaciones de proyecto para sus tres líneas de negocio: **páginas web comerciales**, **aplicaciones web a medida** e **invitaciones digitales interactivas**.
2. **Demostración real por encima del adorno**: las vistas previas interactivas (tablero operativo, invitaciones temáticas y configurador de cotización) DEBEN mostrar valor comprensible y funcional en segundos, conduciendo sin fricción al flujo de cotización (`#cotizar`).
3. **Voz en español de México (`es_MX`)**: toda interfaz, copia comercial, metadata, etiqueta ARIA, texto `alt` y mensaje de error DEBE redactarse en español de México claro, directo y profesional, evitando relleno genérico, promesas inverificables o anglicismos innecesarios.

---

## Artículo II — Sistema Visual Único e Integridad de Diseño

1. **Un solo sistema de diseño**: el proyecto DEBE mantener una única cuadrícula (`.wrap`), una sola escala de espaciado (`--s-1` a `--s-10`), una sola escala tipográfica (`Funnel Display`, `Funnel Sans`, `DM Mono`), una sola escala de radios y un único lenguaje de controles. NO DEBE introducirse un sistema visual paralelo.
2. **Jerarquía, ritmo y consistencia**: cada página DEBE conservar jerarquía tipográfica inequívoca (`h1 > h2 > h3`), alturas uniformes de botones (`44px` en acciones estándar, `>= 60px` en CTA de cierre) y lectura limpia sin scroll horizontal, recortes ni solapamientos en móvil (`390px`), tablet (`1024px`) y escritorio (`1440px`).
3. **Respeto a la cascada y al kit base**: los ajustes de marca, contraste y encuadre se gobiernan en la capa final (`public/brand.css`) y estilos de aplicación (`app/globals.css`). NO DEBEN modificarse los archivos base de `public/assets/` ni abusar de `!important` para resolver problemas de diseño.
4. **Integridad de medios y licencias**: toda imagen DEBE declarar dimensiones (`width`/`height`), usar recursos optimizados y mantener atribución legal al día en `public/credits.html` siempre que su licencia lo requiera.

---

## Artículo III — Arquitectura e Ingeniería (Next.js 16 + React 19 + TypeScript)

1. **Server Components por defecto**: todo nuevo componente DEBE diseñarse como React Server Component. La directiva `"use client"` DEBE reservarse exclusivamente para nodos que requieran estado interactivo, manejadores de eventos o APIs del navegador, manteniendo el límite de cliente lo más acotado posible.
2. **Alineación con Next.js 16**: toda implementación DEBE respetar las capacidades y cambios de Next.js 16 (App Router, Turbopack, `cacheComponents`, `partialPrefetching`), consultando la documentación local en `node_modules/next/dist/docs/` antes de introducir nuevas APIs del framework.
3. **Tipado estricto y contratos explícitos**: el código TypeScript DEBE compilar bajo `strict: true` sin errores. NO DEBE usarse `any`, `@ts-ignore` ni desactivaciones de ESLint para ocultar fallos de diseño o tipos.
4. **Sobriedad en dependencias**: NO DEBEN agregarse paquetes externos cuando la plataforma web, React, Next.js o el sistema visual existente resuelvan el requerimiento de forma limpia y mantenible.
5. **Frontera limpia de hidratación**: los scripts del kit cliente (`KitRunner.tsx` y clases iniciales en `app/layout.tsx`) operan fuera del ciclo de render de React; cualquier cambio en secciones animadas o montadas dinámicamente DEBE preservar cero warnings de hidratación.

---

## Artículo IV — Seguridad, Privacidad y Manejo de Datos (OWASP)

1. **Separación absoluta entre demos y datos reales**: los clientes, folios, rutas y CLABEs mostrados en demos interactivas DEBEN ser estrictamente ficticios. NO DEBEN existir datos reales de clientes, cuentas bancarias ni información personal identificable (PII) en el repositorio.
2. **Cero secretos en el repositorio**: llaves de API, tokens, webhooks privados y credenciales NO DEBEN escribirse en código fuente, specs ni `MEMORY.md`. DEBEN gestionarse únicamente mediante variables de entorno del servidor (`.env.local`, documentando solo nombres en `.env.example`) y jamás exponerse con prefijo `NEXT_PUBLIC_`.
3. **Validación en frontera y defensa en profundidad**: toda mutación o captura real de datos (Route Handlers, Server Actions, envío de cotizaciones o RSVP persistente) DEBE validar y sanitizar entradas en servidor mediante esquemas estrictos, aplicar protección anti-spam y limitación de tasa (rate limiting), y devolver errores seguros sin filtrar detalles internos.
4. **Prevención de XSS y cabeceras de seguridad**: NO DEBE introducirse `dangerouslySetInnerHTML` con contenido dinámico o proveniente de usuarios. Todo enlace externo con `target="_blank"` DEBE incluir `rel="noopener noreferrer"`. Al operar con backend en producción, DEBEN configurarse cabeceras HTTP de seguridad (`Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`) y auditarse dependencias con `npm audit`.

---

## Artículo V — Accesibilidad (WCAG 2.2 AA), SEO y Rendimiento

1. **Estándar WCAG 2.2 AA**: toda vista pública e interactiva DEBE cumplir con HTML semántico, un único `<h1>` por ruta, contraste mínimo `>= 4.5:1` en texto normal (`>= 3:1` en texto grande y controles), `skip-link` funcional y atributos ARIA válidos en tabs, switches y diálogos.
2. **Operabilidad total por teclado**: todo flujo interactivo (menú, filtros, pestañas, formularios y modales) DEBE poder operarse completamente con teclado (`Tab`, `Enter`, `Space`, `Escape` para cerrar diálogos) con foco visible y predecible.
3. **SEO técnico de primera clase**: toda ruta DEBE definir metadata precisa en `es_MX` (título, descripción, OpenGraph y Twitter), contenido principal renderizado en servidor y anclas/enlaces internos sin destinos rotos.
4. **Disciplina de Core Web Vitals**: `fetchPriority="high"` DEBE reservarse solo para el elemento LCP principal sobre el fold; las imágenes fuera del fold DEBEN cargarse con `loading="lazy"`, evitando trabajo innecesario de JavaScript en el hilo principal.

---

## Artículo VI — Disciplina SDD, Verificación y Pruebas

1. **Especificación antes de código**: ninguna funcionalidad nueva, ruta adicional ni integración con terceros DEBE implementarse sin una especificación aprobada en `specs/NNN-nombre-feature/` que incluya problema, criterios de aceptación verificables y *No-objetivos* explícitos. Solo los micro-cambios triviales (typos, enlaces rotos, ajustes menores de CSS) quedan exentos de spec.
2. **Definición de terminado (Definition of Done)**: ningún cambio puede darse por concluido sin cumplir simultáneamente:
   - `npm run lint` con 0 errores.
   - `npx tsc --noEmit` con 0 errores.
   - `npm run build` exitoso.
   - Verificación en navegador real (consola y red limpias, sin warnings de hidratación ni `404`, flujos interactivos probados y diseño intacto en `390px`, `1024px` y `1440px`).
3. **Pruebas automatizadas proporcionales al riesgo**: toda spec que agregue lógica de negocio no trivial, Server Actions, Route Handlers, validaciones o persistencia de datos DEBE introducir y mantener pruebas automatizadas (unitarias y/o E2E) cubriendo casos exitosos, de validación y de fallo.

---

## Artículo VII — Gobierno, Excepciones y Enmiendas

1. **Estabilidad constitucional**: esta Constitución evoluciona de forma deliberada y poco frecuente. Los aprendizajes tácticos viven primero en `MEMORY.md` y solo se promueven aquí cuando pasan a ser principios permanentes.
2. **Excepciones controladas**: cualquier desviación temporal respecto a un artículo DEBE justificarse por escrito dentro de la spec afectada, indicando alcance exacto y condición de retiro.
3. **Proceso de enmienda**: modificar o derogar un artículo requiere aprobación explícita del responsable del proyecto, incremento de versión en el encabezado de este archivo y registro breve del cambio en `MEMORY.md` cuando afecte trabajo activo.
