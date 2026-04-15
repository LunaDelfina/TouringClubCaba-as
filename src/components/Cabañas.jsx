import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CabanaGallery from "./SubComponents/CabañaGallery.jsx";
import Datos from "./SubComponents/DatosCabaña.jsx";
import cabañasData from "../data/cabañasData.jsx";

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Cabañas = () => {
  const [activeCabin, setActiveCabin] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setActiveCabin((p) => (p === 0 ? cabañasData.length - 1 : p - 1));
  };

  const next = () => {
    setDirection(1);
    setActiveCabin((p) => (p === cabañasData.length - 1 ? 0 : p + 1));
  };

  const cabin = cabañasData[activeCabin];

  return (
    <section className="h-screen snap-start overflow-hidden bg-[#D8C4A5] flex items-center justify-center relative">

      <div className="flex items-center gap-4 w-[75%] max-w-5xl mx-auto">

        {/* Flecha izquierda */}
        <button
          onClick={prev}
          className="flex-shrink-0 bg-white/70 hover:bg-white text-[#7D6239] rounded-full w-12 h-12 flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105"
        >
          <ChevronLeft />
        </button>

        {/* Card */}
        <div className="flex-1 bg-white rounded-[28px] overflow-hidden flex shadow-[0_8px_48px_rgba(80,40,10,0.13)] h-[75vh]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={cabin.id}
              className="flex w-full h-full bg-white rounded-[28px] overflow-hidden shadow-[0_8px_48px_rgba(80,40,10,0.13)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <CabanaGallery photos={cabin.photos} />
              <Datos cabin={cabin} index={activeCabin} total={cabañasData.length} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flecha derecha */}
        <button
          onClick={next}
          className="flex-shrink-0 bg-white/70 hover:bg-white text-[#7D6239] rounded-full w-12 h-12 flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105"
        >
          <ChevronRight />
        </button>

      </div>

      {/* Dots navegación cabañas */}
      <div className="absolute bottom-8 flex gap-2 w-fit  p-2 rounded-full bg-white">
        {cabañasData.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > activeCabin ? 1 : -1); setActiveCabin(i); }}
            className={`rounded-full transition-all duration-300
              
              ${i === activeCabin
                ? "w-6 h-2.5 bg-gradient-to-r from-[#F27507] to-[#CC2329]"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Cabañas;