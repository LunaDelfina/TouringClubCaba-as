import { useState } from "react";

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const CabinGallery = ({ photos = [] }) => {
  const [active, setActive] = useState(0);

  if (!photos.length) return null;

  const nextImage = () => setActive((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  const prevImage = () => setActive((prev) => (prev === 0 ? photos.length - 1 : prev - 1));

  return (
    <div className="w-[45%] flex flex-col relative">

      {/* Imagen */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src={photos[active]}
          alt={`Foto ${active + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Gradiente derecha para fusionar con el texto */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l " />

        {/* Flechas */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-[#7D6239] rounded-full w-7 h-7 flex items-center justify-center transition-all duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-[#7D6239] rounded-full w-7 h-7 flex items-center justify-center transition-all duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots — dentro del card, fondo blanco */}
      <div className=" absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center gap-2 py-2 w-fit px-2 rounded-full bg-white/60">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`rounded-full transition-all duration-300
              ${index === active
                ? "w-5 h-2.5 bg-gradient-to-r from-[#F27507] to-[#CC2329]"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Ver foto ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default CabinGallery;