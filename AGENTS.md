# AGENTS.md — Impulsándote Digitalmente

Sitio web corporativo e interactivo de **Impulsándote Digitalmente** (firma tecnológica en México, `es_MX`) dedicado a tres líneas de negocio: páginas web comerciales para captar clientes, aplicaciones web a medida para procesos operativos e invitaciones digitales interactivas para eventos (bodas, XV años y galas corporativas).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

## Metodología de trabajo: SDD (Spec-Driven Development)

Todo desarrollo de funcionalidades nuevas, integraciones o rediseños sigue un flujo dirigido por especificaciones — **nunca programes a ciegas ni inventes alcance**:

1. **Contexto obligatorio antes de tocar código**:
   - Lee `MEMORY.md` para conocer el estado actual, decisiones recientes y errores a evitar.
   - Lee `docs/constitution.md` (principios arquitectónicos y de calidad no negociables).
   - Lee la especificación activa en `specs/NNN-nombre-feature/` (`spec.md`, `plan.md`, `tasks.md`).
2. **Ciclo SDD para features o cambios medianos/grandes**:
   - **Especificar (`spec.md`)**: problema, objetivo, criterios de aceptación verificables y sección explícita de *No-objetivos* (fuera de alcance).
   - **Planificar (`plan.md`)**: diseño técnico, archivos a crear/modificar, impacto en RSC/Client, estilos, seguridad y accesibilidad. Espera aprobación antes de implementar.
   - **Desglosar (`tasks.md`)**: tareas atómicas, ordenadas y verificables.
   - **Implementar y verificar**: ejecuta tarea por tarea contra los criterios de aceptación y corre la lista de verificación completa.
3. **Excepción para micro-cambios**: correcciones puntuales (typos de copy, enlaces rotos, ajustes menores de CSS) no requieren crear una spec, pero sí respetar `docs/constitution.md`, las reglas de este archivo y los checks de verificación.
4. **Disciplina de cambios**:
   - Haz solo lo solicitado o especificado; no agregues librerías, secciones ni refactorizaciones fuera de alcance.
   - Cambios pequeños, enfocados y fáciles de revisar; no reescribas código estable que ya funciona.
   - Al terminar, entrega un resumen claro de archivos modificados, verificación ejecutada y decisiones abiertas.

---

## Stack y arquitectura real

- **Framework**: Next.js `16.4.6` (App Router, Turbopack, `cacheComponents: true`, `partialPrefetching: true` en `next.config.ts`).
- **UI y lenguaje**: React `19.3.0` + TypeScript `5` (`strict: true`, alias `@/*`).
- **Estilos**:
  - Sistema de tokens y kit visual estático en `public/assets/` (`system.css`, `ui/`, `diagrams/`, `motion/`, `backgrounds/`, `layout/`, `icons/`).
  - Estilos de aplicación en `app/globals.css` y Tailwind CSS v4 (`@tailwindcss/turbopack`).
  - Overrides finales de marca, tipografía, contraste y ritmo en `public/brand.css` (cargado **al final** en `app/layout.tsx`).
- **Iconos y fuentes**: `lucide-react` + SVGs locales en `public/assets/icons/`; fuentes Google `Funnel Display`, `Funnel Sans` y `DM Mono`.
- **Calidad de código**: ESLint `9` (`eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`).
- **Gestor de paquetes**: `npm` (lockfile: `package-lock.json`).

### Estructura del proyecto

- `app/layout.tsx`: metadata SEO/OpenGraph/Twitter (`es_MX`), carga de fuentes, hojas CSS del kit, `public/brand.css` y script inicial de clases de entrada (`m-enter`, `mo-js`).
- `app/page.tsx`: composición de la landing principal y sus secciones en orden.
- `app/globals.css`: tokens base y estilos específicos de secciones y demos interactivas.
- `components/`:
  - **Server Components (por defecto)**: `Navbar.tsx`, `HeroTriptych.tsx`, `ServicesSection.tsx`, `ProcessSection.tsx`, `StatementSection.tsx`, `FAQSection.tsx`, `Footer.tsx` (`Footer` y `ActionBar`).
  - **Client Components (`"use client"`)**: `AppFrameSection.tsx` (tablero operativo interactivo), `InvitationsSection.tsx` (preview interactivo de invitaciones con temas `boda`/`xv`/`corp`, countdown, RSVP y modal), `QuoteSection.tsx` (configurador de servicio y formulario), `KitRunner.tsx` (carga secuencial de módulos ES del kit en `public/assets/`).
- `public/`: `brand.css`, `credits.html` (atribución legal de fotografías), logos/favicons y `public/assets/` (kit visual e imágenes responsive `-500`/`-960`).
- `docs/constitution.md`: reglas permanentes de arquitectura, diseño, seguridad y calidad.
- `specs/`: carpeta de especificaciones SDD (`specs/NNN-nombre-feature/`).
- `MEMORY.md`: memoria viva del proyecto.

---

## Convenciones de ingeniería y diseño

- **Idioma y tono**: toda la interfaz, metadata, textos alternativos (`alt`), etiquetas ARIA y mensajes de error van en **español de México** claro, directo y profesional (sin anglicismos innecesarios ni relleno).
- **Server Components por defecto**: crea componentes como RSC; añade `"use client"` únicamente cuando necesiten estado, manejadores de eventos o APIs del navegador, manteniendo el límite de cliente lo más pequeño posible.
- **TypeScript estricto**: prohibido usar `any`; modela props, estados y contratos con `interface`/`type` explícitos y narrowings seguros.
- **Sistema visual consistente**: reutiliza los tokens CSS existentes (`--p-bg`, `--p-surface`, `--p-ink`, `--p-accent`, `--p-action`, `--brand-sage`, `--font-display`, `--font-text`, `--font-mono`), respeta la jerarquía tipográfica (`h1 > h2 > h3`), alturas uniformes de botones (`44px` estándar, `>= 60px` CTA de cierre) y diseño responsive limpio en móvil (`390px`), tablet (`1024px`) y escritorio (`1440px`).
- **Skills de diseño disponibles**: el repo cuenta con `.agents/skills/design-taste-frontend` y `.agents/skills/impeccable`; consúltalos cuando el trabajo involucre rediseño, pulido visual o auditoría de UI.

---

## Puntos críticos del proyecto (fácil equivocarse)

- **Orden de cascada CSS**: `public/brand.css` se carga después de `public/assets/*.css` para garantizar contraste, alturas de botones y encuadre de secciones (`--h`, `--hm`). Antes de agregar overrides nuevos, revisa si corresponde a `app/globals.css` o `public/brand.css` y evita peleas de especificidad con `!important` innecesarios.
- **Hidratación y `KitRunner.tsx`**: los scripts del kit (`system.js`, `motion.js`, `layout.js`, `diagrams/mount.js`) y el snippet de `app/layout.tsx` mutan atributos/DOM fuera de React (`m-enter`, `mo-js`, `[data-diagram]`, `ly-collage`, `pinned-chapters`, `word-highlight`). No elimines los `suppressHydrationWarning` necesarios en esos contenedores ni rompas el orden de arranque en `KitRunner.tsx`.
- **Formulario de cotización (`QuoteSection.tsx`)**: actualmente apunta a un `mailto:` de marcador de posición (`contacto@impulsandotedigitalmente.example`). Cualquier migración a envío real (Server Action, Route Handler, API de correo o WhatsApp) debe hacerse mediante spec SDD con validación en servidor y protección anti-spam.
- **Datos de demostración vs. datos reales**: los folios, nombres de clientes y CLABEs mostrados en `AppFrameSection.tsx` e `InvitationsSection.tsx` son estrictamente demostrativos; nunca pongas datos reales de clientes ni cuentas bancarias reales en el repositorio.
- **Atribución de imágenes (`public/credits.html`)**: varias fotografías usan licencias CC BY / CC BY-SA (Wikimedia Commons). Si agregas o reemplazas imágenes con licencia que exija crédito, actualiza `public/credits.html` y conserva versiones responsive (`srcSet`/`sizes`, `width`, `height`).

---

## Seguridad (OWASP / Next.js)

- **Cero secretos en el repositorio**: nunca hardcodees API keys, tokens, webhooks privados ni credenciales en código, specs ni `MEMORY.md`. Usa `.env.local` (ignorado por Git) y documenta solo nombres de variables en `.env.example`. Nunca expongas secretos con prefijo `NEXT_PUBLIC_`.
- **Validación en frontera**: toda entrada de usuario en formularios, Server Actions o Route Handlers futuros debe validarse en servidor con esquemas estrictos (por ejemplo, `zod`) además de la validación en cliente.
- **Prevención de XSS**: evita `dangerouslySetInnerHTML` en componentes (el único permitido es el script estático sin datos de usuario en `app/layout.tsx`). Sanitiza o escapa cualquier contenido externo antes de renderizarlo.
- **Enlaces externos seguros**: todo enlace con `target="_blank"` debe incluir `rel="noopener noreferrer"`.
- **Hardening al evolucionar a producción con backend**: al añadir endpoints o formularios reales, configurar protección anti-spam/rate limiting, cabeceras de seguridad HTTP (`Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`) en `next.config.ts` y revisar vulnerabilidades con `npm audit`.

---

## Accesibilidad, SEO y rendimiento

- **Accesibilidad (WCAG 2.2 AA)**:
  - HTML semántico (`<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`) y un único `<h1>` por página.
  - Contraste mínimo `>= 4.5:1` en texto normal (`>= 3:1` en texto grande y controles); conservar `skip-link`.
  - Navegación completa por teclado (`Tab`, `Enter`, `Space`, `Escape` para cerrar modales como la vista previa de invitaciones) con estados de foco visibles y atributos ARIA correctos en tabs, switches y diálogos.
- **SEO**: mantener `metadata` actualizada en `app/layout.tsx` (y por ruta cuando existan páginas nuevas), anclas internas válidas (`#top`, `#aplicaciones`, `#servicios`, `#invitaciones`, `#proceso`, `#compromiso`, `#cotizar`, `#preguntas`) y textos `alt` descriptivos.
- **Rendimiento (Core Web Vitals)**: `fetchPriority="high"` únicamente en la imagen principal LCP del hero; `loading="lazy"` en imágenes debajo del fold; evitar dependencias pesadas innecesarias en el bundle de cliente.

---

## Comandos

```bash
npm run dev          # Servidor de desarrollo (Turbopack) en http://localhost:3000
npm run lint         # ESLint (core-web-vitals + TypeScript)
npx tsc --noEmit     # Verificación estricta de tipos TypeScript
npm run build        # Build de producción Next.js (gate obligatorio)
npm run start        # Servir build de producción localmente
npm audit            # Auditoría de vulnerabilidades en dependencias
```

---

## Pruebas y verificación obligatoria

> **Estado actual de pruebas automatizadas**: el proyecto todavía no cuenta con una suite de tests unitarios/E2E instalada. Cuando una spec SDD introduzca lógica de negocio crítica, Server Actions, Route Handlers o flujos persistentes (cotizaciones reales, RSVP con base de datos), debe incluir pruebas automatizadas (Vitest y/o Playwright) y registrar el comando correspondiente en la sección **Comandos**.

Antes de dar cualquier tarea por terminada, ejecuta y valida **todos** los gates aplicables:

1. **Estáticos y compilación**:
   - `npm run lint` → 0 errores.
   - `npx tsc --noEmit` → 0 errores.
   - `npm run build` → compilación limpia.
2. **Verificación en navegador real** (Chrome DevTools MCP o navegador local sobre `npm run dev` / `npm run start`):
   - Revisar consola y red: 0 errores JS, 0 warnings de hidratación y 0 recursos `404`.
   - Comprobar vistas responsivas: escritorio (`1440×900`), tablet (`1024×768`) y móvil (`390×844`) sin scroll horizontal ni texto cortado/solapado.
   - Probar los flujos interactivos afectados: navegación y menú móvil, filtros/selección del tablero en `#aplicaciones`, cambio de tema/subpestañas/RSVP/modal en `#invitaciones`, y configurador/validación en `#cotizar`.
   - Verificar accesibilidad básica: navegación por teclado, foco visible y contraste legible.

---

## Límites

- ✅ **Siempre**:
  - Leer `MEMORY.md`, `docs/constitution.md` y la spec activa (`specs/NNN-*/`) antes de codificar.
  - Consultar `node_modules/next/dist/docs/` antes de usar APIs de Next.js 16.
  - Mantener textos, etiquetas y `alt` en español de México y respetar el sistema de diseño.
  - Ejecutar `npm run lint`, `npx tsc --noEmit`, `npm run build` y validar en navegador (desktop y móvil).
  - Actualizar `MEMORY.md` al concluir cada tarea.
- ⚠️ **Pregunta antes**:
  - Instalar nuevas dependencias en `package.json` o cambiar scripts/configuración (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`).
  - Crear rutas nuevas (`app/.../page.tsx`, Route Handlers, Server Actions) o modificar `public/assets/`.
  - Conectar servicios externos (correo, WhatsApp, CRM, base de datos, analítica) o cambiar el alcance definido en una spec.
- 🚫 **Nunca**:
  - Eliminar o alterar el bloque `<!-- BEGIN:nextjs-agent-rules --> ... <!-- END:nextjs-agent-rules -->`.
  - Programar funcionalidades nuevas sin spec aprobada (salvo micro-cambios triviales).
  - Subir secretos, tokens, datos reales de clientes o credenciales al repo o a `MEMORY.md`.
  - Desactivar reglas de TypeScript (`@ts-ignore`, `any`) o de ESLint para ocultar errores reales.

---

## Memoria (`MEMORY.md`)

- **Al iniciar una sesión**: lee `MEMORY.md` para conocer el estado del proyecto, decisiones vigentes y errores conocidos.
- **Al terminar una tarea**: actualiza `MEMORY.md` con el estado actual, decisiones técnicas relevantes (y su porqué) y trampas descubiertas.
- **Extensión**: mantenlo breve (**máximo ~50 líneas**); resume o elimina entradas obsoletas.
- **Promoción de reglas**: si un aprendizaje se vuelve norma permanente, propón moverlo a `AGENTS.md` o `docs/constitution.md` en lugar de acumularlo en `MEMORY.md`.
- **Seguridad**: nunca guardes claves, tokens, correos privados ni datos personales en `MEMORY.md`.
