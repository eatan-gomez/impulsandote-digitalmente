"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip bubble on hover / desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-900/95 border border-cyan-500/30 text-white text-xs shadow-2xl backdrop-blur-md transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-medium">¿Tienes una duda? Chatea con nosotros</span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/5215500000000?text=Hola%20Impulsandote%20Digitalmente,%20quisiera%20cotizar%20un%20proyecto"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 p-[2px] shadow-2xl shadow-emerald-950/60 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <div className="w-full h-full bg-[#07131b] rounded-[14px] flex items-center justify-center text-emerald-400 group-hover:text-emerald-300">
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-emerald-500/20" />
        </div>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#050811]"></span>
        </span>
      </a>
    </div>
  );
}
