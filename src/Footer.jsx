
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// ── íconos inline para no depender de ninguna lib ──────────────────────────
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.534 5.876L0 24l6.29-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.376l-.361-.214-3.733.895.944-3.63-.235-.374A9.844 9.844 0 012.118 12C2.118 6.534 6.534 2.118 12 2.118S21.882 6.534 21.882 12 17.466 21.882 12 21.882z"/>
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .95h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.77a16 16 0 006.14 6.14l1.19-1.19a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

// ── coordenadas obtenidas del link compartido ───────────────────────────────
const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.4!2d-64.4370178!3d-31.6388616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d50aa31bfe285%3A0x3a8ae0e30c4cc691!2sCaba%C3%B1as+Touring+Club!5e0!3m2!1ses!2sar!4v1`;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});
// ════════════════════════════════════════════════════════════════════════════
//  FOOTER
// ════════════════════════════════════════════════════════════════════════════
 const Footer = () => (
  <footer className="bg-[#2a1a0e] text-[#c9aa80] font-sans">
    <div className="w-[90%] max-w-5xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Logo / nombre */}
      <div className="flex flex-col gap-3">
        <h3 className="titulo-playfair text-[#e8d5b0] text-xl font-semibold">
          Cabañas Touring Club
        </h3>
        <p className="text-xs leading-relaxed text-[#9a7a50]">
          Alta Gracia, Córdoba — Argentina
        </p>
        <div className="flex gap-3 mt-2">
          <a href="https://instagram.com/TUUSUARIO" target="_blank" rel="noopener noreferrer"
            className="hover:text-[#F55809] transition-colors">
            <IconInstagram />
          </a>
          <a href="https://facebook.com/TUPAGINA" target="_blank" rel="noopener noreferrer"
            className="hover:text-[#F55809] transition-colors">
            <IconFacebook />
          </a>
          <a href="https://wa.me/TUNUMERO" target="_blank" rel="noopener noreferrer"
            className="hover:text-[#F55809] transition-colors">
            <IconWhatsApp />
          </a>
        </div>
      </div>

      {/* Navegación */}
      <div className="flex flex-col gap-2">
        <p className="text-xs tracking-[0.18em] uppercase text-[#9a7a50] mb-2">Navegación</p>
        {["Inicio", "El Complejo", "Cabañas", "Galería", "Encontranos"].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="text-sm hover:text-[#F55809] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Contacto rápido */}
      <div className="flex flex-col gap-2">
        <p className="text-xs tracking-[0.18em] uppercase text-[#9a7a50] mb-2">Contacto</p>
        <a href="https://wa.me/TUNUMERO" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-[#F55809] transition-colors">
          <IconWhatsApp /> +54 9 XXX XXX XXXX
        </a>
        <a href="https://instagram.com/TUUSUARIO" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-[#F55809] transition-colors">
          <IconInstagram /> @tuusuario
        </a>
      </div>

    </div>

    {/* Barra inferior */}
    <div className="border-t border-[#3d2510]">
      <div className="w-[90%] max-w-5xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#6a4a28]">
        <span>© {new Date().getFullYear()} Cabañas Touring Club. Todos los derechos reservados.</span>
        <a
          href="https://lunacodestudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F55809] transition-colors tracking-wide"
        >
          Diseño y desarrollo · Luna Code Studio
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;



