import { useState } from "react";

const iconos = {
  personas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F27507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  cama: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F27507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 16h20"/>
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F27507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F27507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  bano: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F27507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M9 6 L9 12" />
      <path d="M9 6 Q9 4 11 4 Q13 4 13 6" />
      <path d="M2 12 H22 V14 Q22 18 18 18 H6 Q2 18 2 14 Z" />
      <path d="M6 18 L5 21" />
      <path d="M18 18 L19 21" />
    </svg>
  ),
};

const getIcono = (label) => {
  const l = label.toLowerCase();
  if (l.includes("persona"))    return iconos.personas;
  if (l.includes("dormitorio")) return iconos.cama;
  if (l.includes("aire"))       return iconos.ac;
  if (l.includes("tv"))         return iconos.tv;
  if (l.includes("baño"))       return iconos.bano;
  return null;
};

const CabinGallery = ({ photos = [], cabin, index, total }) => {
  const [active, setActive] = useState(0);

  if (!photos.length) return null;

  const next = () => setActive(p => p === photos.length - 1 ? 0 : p + 1);
  const prev = () => setActive(p => p === 0 ? photos.length - 1 : p - 1);

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Imagen */}
      <img
        src={photos[active]}
        alt={`Foto ${active + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Overlay superior */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent z-10" />

      {/* Overlay inferior */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#140a04]/95 via-[#140a04]/70 to-transparent z-10" />

      {/* Dots — arriba a la derecha */}
      <div className="absolute top-0 inset-x-0 px-5 py-4 flex justify-end z-20">
        <div className="flex gap-1.5 items-center">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 hover:bg-white/30"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 hover:bg-white/30"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Info panel */}
      <div className="absolute inset-x-0 bottom-0 px-5 pb-4 z-20">
        <p className="text-[9px] tracking-[0.2em] text-[#F27507] uppercase mb-1">
          Cabaña {index + 1} de {total}
        </p>
        <h2 className="titulo-playfair text-white text-2xl font-bold italic leading-tight mb-1">
          {cabin?.name}
        </h2>
        <p className="text-white/60 text-[0.75rem] leading-relaxed font-light mb-2 max-w-lg">
          {cabin?.description}
        </p>

        {/* Features pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cabin?.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-1 bg-white/10 border border-white/15 rounded-full px-2 py-0.5">
              {getIcono(feat)}
              <span className="text-white/85 text-[10px]">{feat}</span>
            </div>
          ))}
        </div>

        {/* Precio + botón */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#F27507] text-[1.4rem] font-extrabold leading-none">
              {cabin?.price}
            </p>
            <p className="text-white/40 text-[9px] mt-0.5">por noche</p>
          </div>
          <button
            className="text-white text-[0.8rem] font-semibold rounded-[10px] px-4 py-2 transition-all hover:opacity-90 hover:-translate-y-px"
            style={{ background: "linear-gradient(90deg,#F27507,#CC2329)" }}
          >
            Reservar ahora
          </button>
        </div>
      </div>

    </div>
  );
};

export default CabinGallery;