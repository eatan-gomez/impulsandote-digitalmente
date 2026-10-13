"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué hace diferente a Impulsándote Digitalmente de una agencia convencional?",
      answer:
        "Combinamos estrategia de negocio real con ingeniería de software de alto rendimiento (Next.js, React). No usamos plantillas lentas ni plataformas obsoletas. Diseñamos páginas que cargan en menos de 1 segundo para captar clientes, aplicaciones que ahorran tiempo de trabajo y una línea especializada en invitaciones digitales para eventos con confirmación en vivo.",
    },
    {
      question: "¿Cómo funcionan exactamente las Invitaciones Digitales Interactivas?",
      answer:
        "Tu evento tiene su propia web exclusiva y elegante. En lugar de enviar un archivo PDF pesado o una imagen fija, tus invitados abren un enlace en WhatsApp y acceden a una experiencia interactiva: cuenta regresiva, música, ubicación GPS con Waze/Maps, código de vestimenta, mesa de regalos y un botón de RSVP para confirmar asistencia en vivo. Tú recibes los datos al momento para no gastar de más en banquetes.",
    },
    {
      question: "¿El sitio web o la aplicación me pertenecerá al 100%?",
      answer:
        "Totalmente. No trabajamos bajo esquemas abusivos de 'renta forzosa' donde si dejas de pagar pierdes tu web. El diseño, el dominio y el código te pertenecen al 100%. Te entregamos accesos completos y te capacitamos para administrarlo.",
    },
    {
      question: "¿Cuánto tiempo toma el desarrollo y entrega de un proyecto?",
      answer:
        "Para Invitaciones Digitales: entre 2 y 4 días hábiles. Para Páginas Web de Alto Impacto: de 5 a 12 días hábiles según las secciones requeridas. Para Sistemas y Apps a Medida: de 2 a 5 semanas dependiendo de la complejidad y automatizaciones requeridas. Contamos también con modalidad exprés.",
    },
    {
      question: "¿Cómo es el esquema de pago?",
      answer:
        "Manejamos un esquema seguro y confiable: 50% de anticipo para iniciar el diseño y desarrollo estratégico, y el 50% restante al finalizar, una vez que el proyecto esté revisado, probado y listo para su lanzamiento público.",
    },
    {
      question: "¿Dan soporte técnico y capacitación después de la entrega?",
      answer:
        "Sí. Todos nuestros desarrollos incluyen garantía post-entrega y una sesión guiada o video explicativo para enseñarte a gestionar tu plataforma. Además, ofrecemos planes de mantenimiento preventivo y escalamiento continuo si lo deseas.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#060913] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESPUESTAS CLARAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Todo lo que necesitas saber antes de iniciar tu transformación digital con nosotros.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-cyan-500/20 text-cyan-400 border-cyan-500/40" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
