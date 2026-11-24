# MEMORY.md — Impulsándote Digitalmente

Memoria viva entre sesiones. **Máximo ~50 líneas**: resume o elimina lo que ya no aporte y promueve reglas permanentes a `AGENTS.md` o `docs/constitution.md`. Nunca guardes secretos ni datos personales.

## Estado actual
- Landing principal operativa en Next.js 16 + React 19 (`app/page.tsx`) con 8 secciones: hero tríptico, tablero interactivo (`#aplicaciones`), servicios 2×2 (`#servicios`), preview interactivo de invitaciones con 3 temas y modal (`#invitaciones`), proceso (`#proceso`), enfoque (`#compromiso`), configurador/formulario (`#cotizar`) y FAQ (`#preguntas`).
- Base SDD completada: `AGENTS.md`, `docs/constitution.md` (v1.0) y `MEMORY.md` activos; carpeta `specs/` lista para la primera especificación.
- Formulario `#cotizar` usa `mailto:` placeholder (`contacto@impulsandotedigitalmente.example`); aún no hay backend, base de datos ni suite de tests automatizados.

## Decisiones (y por qué)
- **Cascada con `public/brand.css` al final**: mantiene overrides de marca, contraste y alturas uniformes (`44px`) sin alterar los archivos base del kit en `public/assets/`.
- **Límite de cliente mínimo**: solo `AppFrameSection`, `InvitationsSection`, `QuoteSection` y `KitRunner` usan `"use client"` para conservar buen rendimiento y SEO.
- **Datos ficticios en demos (folios, clientes, CLABEs)**: permiten mostrar flujos reales sin exponer información sensible en el repositorio.
- **Metodología SDD**: toda feature o integración nueva se especifica antes de codificar para evitar alcance improvisado y asegurar calidad.

## Aprendizajes y errores a evitar
- No eliminar `suppressHydrationWarning` en contenedores mutados por scripts del kit ni alterar el orden de carga en `KitRunner.tsx` (`system.js` → `motion.js` → `layout.js` → `diagrams/mount.js`).
- En `InvitationsSection.tsx`, el modal de vista previa todavía no cierra con tecla `Escape` ni clic fuera del diálogo: corregirlo en la próxima intervención sobre esa sección.
- Respetar `public/credits.html` si se agregan o reemplazan fotografías con licencia CC.

## Próximos pasos
- Crear la primera spec SDD en `specs/001-cotizacion-real/` (o la prioridad de negocio que defina el equipo) para migrar `#cotizar` de `mailto:` a envío real validado en servidor.
- Añadir pruebas automatizadas (Vitest/Playwright) al introducir lógica de servidor o flujos persistentes.
