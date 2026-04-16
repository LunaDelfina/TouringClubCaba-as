import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const ComplejoCard = ({ images, hoveredImage }) => {
  const [imagenActual, setImagenActual] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay — se pausa si hay hover
  useEffect(() => {
    if (!autoplay) return;
    const intervalo = setInterval(() => {
      setImagenActual(i => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [autoplay, images.length]);

  // Si hay hover en un chip, pausa autoplay y muestra esa imagen
  const imagenMostrada = hoveredImage !== null ? hoveredImage : imagenActual;

  useEffect(() => {
    setAutoplay(hoveredImage === null);
  }, [hoveredImage]);

  return (
    <div className="grid grid-cols-2 gap-0 rounded-[28px] overflow-hidden shadow-[0_8px_48px_rgba(80,40,10,0.10)] max-h-[60vh]">

      {/* Texto */}
      <motion.div className="bg-white flex flex-col justify-center px-8 py-6" {...fadeUp}>
        <p className="text-xs tracking-[0.22em] text-[#F55809] uppercase font-sans mb-3">
          El complejo
        </p>
        <h2 className="titulo-playfair text-[#7D6239] text-4xl font-bold italic leading-tight mb-3">
          Naturaleza, comodidad <br />y sierras
        </h2>
        <div className="h-[4px] w-10 rounded-full bg-gradient-to-r from-[#CC2329] to-[#F55809] mb-4" />
        <p className="text-[#6E6E6E] text-[0.88rem] leading-relaxed font-light">
          A las afueras de Alta Gracia, nuestras cabañas combinan tranquilidad,
          naturaleza y comodidad para que disfrutes una estadía única, ya sea en
          familia, con amigos o en pareja.
        </p>
        <div className="text-[#F27507] flex gap-6 mt-6 font-light text-sm">
          {[
            { stat: "+1000", label: "Clientes felices" },
            { stat: "★4.9",  label: "En opiniones" },
            { stat: "+20",   label: "Años de experiencia" },
          ].map(({ stat, label }, i) => (
            <div key={label} className="flex gap-6 items-center">
              {i > 0 && <div className="border-l border-[#F27507] h-8" />}
              <div>
                <h3 className="text-2xl font-medium">{stat}</h3>
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
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
        <img src={images[0]} alt="" className="w-full h-full object-cover invisible" />

        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i === imagenMostrada ? "Cabañas Touring Club" : ""}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === imagenMostrada ? 1 : 0,
              transition: "opacity 0.8s ease",
              zIndex: i === imagenMostrada ? 1 : 0,
            }}
          />
        ))}

        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
      </motion.div>

    </div>
  );
};

export default ComplejoCard;