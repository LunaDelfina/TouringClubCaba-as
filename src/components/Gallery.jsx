import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import MasonryGrid from "./SubComponents/MasonryGrid";
import Wave from "../DecorationComponents/wavecircle.svg";

const Galeria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [phase, setPhase] = useState("hidden"); // "hidden" | "big" | "small"

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
    <section ref={ref} className="h-screen snap-start overflow-hidden relative bg-white flex flex-col">

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

      {/* TÍTULO */}
      <motion.div
        className="absolute z-10 text-center w-full"
        animate={
          phase === "hidden" ? { opacity: 0, y: 20, top: "50%", x: "-50%", left: "50%", translateY: "-50%" } :
          phase === "big"    ? { opacity: 1, y: 0,  top: "50%", x: "-50%", left: "50%", translateY: "-50%" } :
                               { opacity: 1, y: 0,  top: "6vh", x: "-50%", left: "50%", translateY: "0%"  }
        }
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <motion.h1
          className="titulo-playfair font-semibold text-[#7D6239]"
          animate={phase === "big" ? { fontSize: "3.5rem" } : { fontSize: "2rem" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          ¿Te quedaste con ganas de ver más?
        </motion.h1>
        <div className="h-[5px] w-[3rem] mx-auto rounded-full bg-gradient-to-r from-[#CC2329] to-[#F55809] mt-2" />
      </motion.div>

      {/* GRID */}
      <motion.div
        className="relative z-10 w-[60%] mx-auto overflow-y-auto pb-6"
        style={{ marginTop: "18vh", flex: 1, scrollbarWidth: "none" }}
        animate={phase === "small" ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <MasonryGrid />
      </motion.div>

    </section>
  );
};

export default Galeria;