import { useEffect, useRef, useState } from "react"
import Fondo from "../img/bg/Actividades.jpg"
import FondoMobile from "../img/bg/ActividadesMobile.jpg"
import a1 from "../img/actividades/a1.jpg"
import a2 from "../img/actividades/a2.jpg"
import a3 from "../img/actividades/a3.jpg"
import a4 from "../img/actividades/a4.png"


import ActividadCard from "./SubComponents/actividadesCard.jsx"
import ActividadMobile from "./SubComponents/actividadesMobile.jsx"



const actividades = [
  { img: a1, titulo: "Tajamar",      tag: "Naturaleza",  desc: "Una laguna rodeada de naturaleza, ideal para caminar y relajarse con unos mates." , link:"https://share.google/53QJ36ZvASxmLAmvd"},
  { img: a2, titulo: "Cabalgatas",   tag: "Aventura",    desc: "Conocé las sierras y disfrutá de la naturaleza en un entorno único." ,link:"https://www.instagram.com/cabalgatas_diasdecampo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
  { img: a3, titulo: "Gastronomía",  tag: "Gastronomía", desc: "Disfrutá de la deliciosa gastronomía local en nuestros restaurantes.",link:"https://www.google.com/maps/search/alta+gracia+gastronomia/@-31.6507511,-64.4489765,15z?entry=s&sa=X&ved=1t%3A199789" },
  { img: a4, titulo: "La Gruta",     tag: "Cultura",     desc: "Un lugar mágico con cuevas y paisajes impresionantes." ,link:"https://altagracia.ar/actividades/santuario-de-la-virgen-de-lourdes/"},
]

const Actividades = () => {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)")
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold: 0.3 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen snap-start flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('${isMobile ? FondoMobile : Fondo}')`,
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 w-full max-w-5xl">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "0ms",
          }}
        >
  
          <p className="text-xs tracking-[0.22em] text-[#F55809] uppercase font-sans mb-1 ">
          Actividades
        </p>
   
        </div>

        {/* Título */}
        <h2
          className="titulo-playfair text-3xl md:text-5xl font-bold italic text-white text-center transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "100ms",
          }}
        >
          Todo lo que podés disfrutar en Alta Gracia
        </h2>

        {/* Cards */}
          
          {isMobile?(
          <ActividadMobile 
            actividades={actividades}
            visible={visible} 
              delay={'200ms'}
            />)
            :
            (<div className="flex gap-4 w-full mt-4">
          {actividades.map((a, i) => (
            <ActividadCard
              key={a.titulo}
              {...a}
              visible={visible}
              delay={`${200 + i * 120}ms`}
            />
          ))}
        </div>)}

        {/* CTA */}
        <div
          className="flex items-center gap-4 w-full transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: "700ms",
          }}
        >
          <div className="flex-1 h-px bg-white/15" />
          <a
            href="https://www.instagram.com/altagracia.culturaviva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium px-6 py-2.5 rounded-[11px] transition-all duration-200 hover:opacity-90 hover:-translate-y-px whitespace-nowrap"
            style={{ background: "linear-gradient(90deg,#F27507,#CC2329)" }}
          >
            Descubrí más actividades
          </a>
          <div className="flex-1 h-px bg-white/15" />
        </div>

      </div>
    </section>
  )
}

export default Actividades;