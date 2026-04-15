import { motion } from "framer-motion";
import Video from "../img/hero-bg.jpg";
import Pileta from "../icons/swimmer.png";
import Pet from "../icons/pet.png";
import Wifi from "../icons/wifi.png";
import Niños from "../icons/niños.png";
import Espacios from "../icons/espacios.png";
import Backg from "../DecorationComponents/BackgroundWaves.jsx";

const features = [
  { icon: Pileta,    label: "Pileta al aire libre" },
  { icon: Pet,       label: "Pet friendly" },
  { icon: Wifi,      label: "Wifi en todo el complejo" },
  { icon: Niños,     label: "Zona de juegos para niños" },
  { icon: Espacios,  label: "Parrillas y espacios verdes" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const Complejo = () => {
  return (
    <section
      className="relative h-screen snap-start overflow-x-visible flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #F3FEFF 0%, #EFE6D8 49.52%, #D8C4A5 90.38%)",
      }}
    >
      <Backg />

      <div className="relative z-10 w-[60%] max-w-5xl mx-auto flex flex-col gap-4">

        {/* ── Bloque principal ── */}
        <div className="grid grid-cols-2 gap-0 rounded-[28px] overflow-hidden shadow-[0_8px_48px_rgba(80,40,10,0.10)] max-h-[60vh]">

          {/* Texto */}
          <motion.div
            className="bg-white flex flex-col justify-center px-8 py-6" 
            {...fadeUp(0)}
          >
            <p className="text-xs tracking-[0.22em] text-[#F55809] uppercase font-sans mb-3">
              El complejo
            </p>
            <h2 className="titulo-playfair text-[#7D6239] text-[1.9rem] font-bold italic leading-tight mb-3">
              Un lugar para<br />frenar y disfrutar
            </h2>
            <div className="h-[4px] w-10 rounded-full bg-gradient-to-r from-[#CC2329] to-[#F55809] mb-4" />
            <p className="text-[#6E6E6E] text-[0.88rem] leading-relaxed font-light">
              A las afueras de Alta Gracia, nuestras cabañas combinan
              tranquilidad, naturaleza y comodidad para que disfrutes una
              estadía única, ya sea en familia, con amigos o en pareja.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="relative overflow-hidden"
            style={{ height: "100%" }}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <img
              src={Video}
              alt="Cabañas Touring Club"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
          </motion.div>

        </div>

        {/* ── Features ── */}
        <div className="grid grid-cols-5 gap-3">
          {features.map(({ icon, label }, i) => (
            <motion.div
              key={label}
              className="bg-white/80 backdrop-blur-sm rounded-[18px] flex flex-col items-center justify-center gap-2 py-4 px-2 shadow-[0_2px_16px_rgba(80,40,10,0.07)] hover:shadow-[0_6px_24px_rgba(80,40,10,0.13)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              {...fadeUp(0.1 + i * 0.07)}
            >
              <img src={icon} className="w-[36px] h-[36px] object-contain" alt={label} />
              <p className="text-[11.5px] font-medium text-[#6E6E6E] text-center leading-snug">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Complejo;