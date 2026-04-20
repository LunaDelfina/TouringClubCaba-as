import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CabanaGallery from "./SubComponents/CabañaGaleriaImagenes.jsx";
import CabanasSelecter from "./SubComponents/CabañasSelecter.jsx";
import cabañasData from "../data/cabañasData.jsx";

const Cabañas = () => {
  const [activeCabin, setActiveCabin] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);

  const prev = () => {
    setDirection(-1);
    setActiveCabin(p => p === 0 ? cabañasData.length - 1 : p - 1);
  };

  const next = () => {
    setDirection(1);
    setActiveCabin(p => p === cabañasData.length - 1 ? 0 : p + 1);
  };

  const onSelect = (i) => {
    setDirection(i > activeCabin ? 1 : -1);
    setActiveCabin(i);
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    if (diff < -40) prev();
    touchStartX.current = null;
  };

  const cabin = cabañasData[activeCabin];

  return (
    <section
      id="Cabañas"
      className="h-[100dvh] snap-start overflow-hidden bg-[#D8C4A5] flex flex-col items-center justify-center relative gap-4"
    >
      <div className="flex items-center gap-4  w-[90%] md:w-[75%] max-w-5xl  md:max-h-[85dvh] max-h-[80dvh] mx-auto flex-1">

        {/* Card */}
        <div className="flex-1 bg-[#1a120a] rounded-[28px] overflow-hidden shadow-[0_8px_48px_rgba(80,40,10,0.13)] h-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={cabin.id}
              className="w-full h-full flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Panel lateral — solo desktop */}
              <CabanasSelecter
                data={cabañasData}
                activeCabin={activeCabin}
                onSelect={onSelect}
                className="hidden md:flex"
              />

              {/* Galería con swipe en mobile */}
              <div
                className="flex-1 h-full"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <CabanaGallery
                  photos={cabin.photos}
                  cabin={cabin}
                  index={activeCabin}
                  total={cabañasData.length}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Dots mobile — solo se ven en mobile */}
      <div className="md:hidden flex gap-2 items-center bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full">
        {cabañasData.map((cab, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="flex items-center gap-1.5 transition-all duration-300"
          >
            <div className={`rounded-full transition-all duration-300 ${
              i === activeCabin
                ? "w-5 h-2 bg-gradient-to-r from-[#F27507] to-[#CC2329]"
                : "w-2 h-2 bg-gray-300"
            }`} />
            
          </button>
        ))}
      </div>

    </section>
  );
};

export default Cabañas;