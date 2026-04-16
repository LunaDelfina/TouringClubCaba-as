import { useRef, useEffect } from "react";

import Foto1 from '../../Cabañas/Foto1.png';
import Foto2 from '../../Cabañas/Foto2.png';
import Foto3 from '../../Cabañas/Foto3.png';
import Foto4 from '../../Cabañas/Foto4.png';
import Foto5 from '../../Cabañas/Foto5.jpg';
import Foto6 from '../../Cabañas/Foto6.jpg';

const fotos = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];
const SPEED = 0.6;

const Carrusel = () => {
  const trackRef  = useRef(null);
  const animRef   = useRef(null);
  const posRef    = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.innerHTML += track.innerHTML;
    const totalWidth = track.scrollWidth / 2;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= totalWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative w-full">
      {/* Fades laterales */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-3 w-max"
          onMouseEnter={() => { pausedRef.current = true;  }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {fotos.map((src, i) => (
            <div
              key={i}
              className="h-[50vh] flex-shrink-0 rounded-[14px] overflow-hidden group"
            >
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
    </div>
  );
};

export default Carrusel;