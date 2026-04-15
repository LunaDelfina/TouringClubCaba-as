import { useEffect, useRef, useState } from "react"
import Fondo from "../Cabañas/Foto9.jpg"

const actividades = [
    { titulo: "Historicos", desc: "Un paseo rodeado de naturaleza, ideal para caminar y relajarse con unos mates." },
    { titulo: "Cabalgatas", desc: "Conocé las sierras y disfrutá de la naturaleza en un entorno único." },
    { titulo: "Caminatas", desc: "Senderos ideales para conectar con la naturaleza y disfrutar del aire libre." },
    { titulo: "Paracaidismo", desc: "Viví una experiencia única con vistas increíbles de las sierras cordobesas." },
]

const ActividadCard = ({ titulo, desc, visible, delay }) => (
    <div
        className="flex-1 bg-white rounded-lg p-3 text-left text-gray-800 shadow-lg transition-all duration-700"
        style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: delay,
        }}
    >
        <img className="w-full aspect-square object-cover rounded-lg mb-2" src={Fondo} alt="" />
        <h3 className="text-2xl font-playfair mb-2 text-[#F55809] font-bold text-center">{titulo}</h3>
        <p className="font-roboto font-light">{desc}</p>
    </div>
)

const Actividades = () => {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)

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
                backgroundImage: `url('${Fondo}')`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col items-center gap-8 p-6">
                <h2
                    className="text-4xl font-playfair text-white text-center transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transitionDelay: "0ms",
                    }}
                >
                    Todo lo que podés disfrutar en Alta Gracia
                </h2>
                <div className="flex gap-6 max-w-[65%]">
                    {actividades.map((a, i) => (
                        <ActividadCard key={a.titulo} {...a} visible={visible} delay={`${200 + i * 150}ms`} />
                    ))}
                </div>
            </div>

            <div className="bg-[#CC2329] rounded-xl p-3 relative z-10">
                <h1 className="text-xl font-playfair text-white text-center">
                    ¡Muchas mas cosas para descubrir!
                </h1>
            </div>
        </section>
    )
}

export default Actividades;