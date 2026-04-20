import { useEffect, useRef, useState } from "react"
import ReseñasMobile from "./reseñasmobile.jsx"
import quotes from "../icons/quotes.png"


const reseñaData = [
    { reseña: "“Muy lindas cabañas, ubicadas cerca de la ruta en un lugar muy tranquilo! Cómodas y bien equipadas. Excelente la atención, muy amables y responden enseguida, y siempre con una sonrisa. Impecable. Para recomendar sin lugar a dudas! Muchas gracias!!”", usuario:"Ariel RC" },
    { reseña: "“Segundo año que venimos y siempre todo de diez. Las cabañas son cómodas, están muy bien equipadas con lo necesario para pasar unas vacaciones. La pileta impecable. Hay parque y juegos para niños . Y la atención de Mariana que está en todos los detalles. Es nuestro lugar cada vez que regresemos a Alta Gracia”", usuario:"Caro" },
    { reseña: "“Excelente lugar. Cabañas súper equipadas, muy grande. El lugar es hermoso, ideal para descansar y relajarte. El parquizado está muy cuidado, la pileta muy linda. La cabaña es muy cómoda, tiene balcón y parrillero individual. Atendido por sus dueños, Mariana una genia, nos ayudó siempre en todo .Sin dudas volveremos!!“", usuario:"Mariam Matta" }
    
]

const OpinionCard=({ reseña, usuario, visible, delay }) => (
    <div className="flex-1 bg-white rounded-lg p-6 text-left text-gray-800 shadow-lg transition-all duration-700 justify-between flex flex-col"
        style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: delay,
        }}>
        <img src={quotes} alt="Quote" className="w-8 md:w-10 h-8 md:h-10 mb-4 absolute top-[-20px] left-[-20px]" />
        <img src={quotes} alt="Quote" className="w-8 md:w-10 h-8 md:h-10 mb-4 absolute bottom-[-30px] right-[-20px]" />
        <p className="font-roboto font-bold text-[#6E6E6E] text-sm justify-content leading-[1.15rem]">{reseña}</p>
        <div>
            <h3 className="text-xl font-playfair mt-1 text-[#F55809] font-bold text-center">{usuario}</h3>
        <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#F27507" }}>★</span>
            ))}
        </div>
        </div>
        
    </div>
)

const Reseñas = () => {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setVisible(entry.isIntersecting) },
            { threshold: 0.3 }
        )
        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }
        return () => {
            observer.disconnect()
        }
    }, [])  
    return (
        <section 
        id="Reseñas"
        className="relative h-screen snap-start flex flex-col items-center justify-center w-[90%] mx-auto"
            style={{
                background:"linear-gradient(180deg, #F3FEFF 0%, #EFE6D8 49.52%, #D8C4A5 90.38%)",
            }}
            ref={sectionRef}
        >
           
            <div className="relative z-10 flex flex-col items-center gap-2 p-2">
                    <p className="text-xs tracking-[0.22em] text-[#F55809] uppercase font-sans mb-1 md:mb-3">
          El complejo
        </p>
                    <h2 className="italic text-3xl md:text-5xl font-bold font-playfair text-[#7D6239] text-center transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transitionDelay: "0ms",
                    }}
                >
                    Lo que dicen quienes ya nos visitaron
                </h2>
                <h4 className="text-sm md:text-2xl font-playfair text-[#6E6E6E] text-center transition-all duration-700 mb-6 md:mb-12"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transitionDelay: "100ms",
                    }}
                >
                    Experiencias reales de huéspedes que eligieron nuestro complejo
                </h4>
                <div className="hidden md:flex gap-6 md:max-w-[75%]">
                    {reseñaData.map((r, i) => (
                        <OpinionCard key={r.reseña} {...r} visible={visible} delay={`${200 + i * 150}ms`} />
                    ))}
                </div>
                <ReseñasMobile visible={visible}/>
            </div>
            
        </section>
    )
}
export default Reseñas;