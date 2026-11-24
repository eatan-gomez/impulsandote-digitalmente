"use client";

import { useEffect, useRef } from "react";

function loadEsModule(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-kit-src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = src;
    script.dataset.kitSrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export default function KitRunner() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const boot = async () => {
      try {
        await loadEsModule("/assets/system.js");
        await loadEsModule("/assets/motion/motion.js");
        await loadEsModule("/assets/layout/layout.js");
        await loadEsModule("/assets/diagrams/mount.js");
      } catch (err) {
        console.warn("Kit boot warning:", err);
      }
    };

    boot();
  }, []);

  return null;
}
