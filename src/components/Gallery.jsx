import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Wave from "../DecorationComponents/wavecircle.svg";

import Foto1 from "../Cabañas/Foto1.png";
import Foto2 from "../Cabañas/Foto2.png";
import Foto3 from "../Cabañas/Foto3.png";
import Foto4 from "../Cabañas/Foto4.png";
import Foto5 from "../Cabañas/Foto5.jpg";
import Foto6 from "../Cabañas/Foto6.jpg";

const fila1 = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];
const fila2 = [Foto4, Foto5, Foto1, Foto6, Foto2, Foto3];

const FADE_WIDTH = "120px";

function useCarrusel(trackRef, speed) {
  const pausedRef = useRef(false);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.innerHTML += track.innerHTML;
    const total = track.scrollWidth / 2;
    let pos = speed < 0 ? total : 0;
    const fila = track.parentElement;
    const pause  = () => { pausedRef.current = true;  };
    const resume = () => { pausedRef.current = false; };
    fila.addEventListener("mouseenter", pause);
    fila.addEventListener("mouseleave", resume);
    const tick = () => {
      if (!pausedRef.current) {
        pos += speed;
        if (pos >= total) pos = 0;
        if (pos < 0)      pos = total;
        track.style.transform = `translateX(-${pos}px)`;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => {
      fila.removeEventListener("mouseenter", pause);
      fila.removeEventListener("mouseleave", resume);
    };
  }, []);
}

const FilaCarrusel = ({ fotos, speed }) => {
  const trackRef = useRef(null);
  useCarrusel(trackRef, speed);
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{ width: FADE_WIDTH, background: "linear-gradient(to right, #fff, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{ width: FADE_WIDTH, background: "linear-gradient(to left, #fff, transparent)" }} />
      <div ref={trackRef} className="flex gap-3 w-max">
        {fotos.map((src, i) => (
          <div key={i} className="h-[220px] flex-shrink-0 rounded-[14px] overflow-hidden group">
            <img
              src={src}
              alt={`Foto ${i + 1}`}
              className="h-full w-auto object-cover transition-transform duration-500 group-hover:scale-105"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Galeria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [phase, setPhase] = useState("hidden");

  useEffect(() => {
    if (isInView) {
      setPhase("big");
      const timer = setTimeout(() => setPhase("small"), 1800);
      return () => clearTimeout(timer);
    } else {
      setPhase("hidden");
    }
  }, [isInView]);

  return (
    <section ref={ref} className="h-screen snap-start overflow-hidden relative bg-white flex flex-col items-center justify-center gap-6">

  {/* SVGs igual que antes */}
  {/* SVG derecha */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute"
          style={{ top: '-100%', right: '-65vw' }}
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={Wave} className="w-[110vw] animate-spin-slow" style={{ transformOrigin: 'center center' }} />
        </motion.div>
      </div>

      {/* SVG izquierda */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute"
          style={{ top: '-20%', left: '-60vw' }}
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={Wave} className="w-[120vw] animate-spin-slow-reverse" style={{ transformOrigin: 'center center' }} />
        </motion.div>
      </div>

  {/* Título */}
  <motion.div
    className="z-10 text-center"
    animate={
      phase === "hidden" ? { opacity: 0, y: 20, scale: 1.4 } :
      phase === "big"    ? { opacity: 1, y: 0,  scale: 1.4 } :
                           { opacity: 1, y: 0,  scale: 1    }
    }
    transition={{ duration: 0.7, ease: "easeInOut" }}
  >
    <h1 className="titulo-playfair font-semibold text-[#7D6239] text-[2rem]">
      ¿Te quedaste con ganas de ver más?
    </h1>
    <div className="h-[5px] w-[3rem] mx-auto rounded-full bg-gradient-to-r from-[#CC2329] to-[#F55809] mt-2" />
  </motion.div>

  {/* Filas */}
  <motion.div
    className="relative z-10 w-full flex flex-col gap-3"
    animate={phase === "small" ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
  >
    <FilaCarrusel fotos={fila1} speed={0.6}  />
    <FilaCarrusel fotos={fila2} speed={-0.5} />
  </motion.div>

</section>
  );
};

export default Galeria;