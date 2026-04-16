import { useEffect, useRef, useState } from "react"
import Fondo from "../img/BG_CTA.png"

const CTA = () => {
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

    const scrollToCabanas = () => {
        document.getElementById("cabanas")?.scrollIntoView({ behavior: "smooth" })
    }

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
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 flex flex-col items-center gap-4 px-6 max-w-2xl text-center">

                {/* Badge ubicación */}
                <div
                    className="flex items-center gap-2 border border-[#F27507]/40 bg-[#F27507]/10 rounded-full px-4 py-1.5 transition-all duration-500"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(16px)",
                        transitionDelay: "0ms",
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F27507]" />
                    <span className="text-[#F27507] text-xs tracking-[0.18em] uppercase font-medium">
                        Alta Gracia, Córdoba
                    </span>
                </div>

                {/* Título */}
                <h2
                    className="titulo-playfair text-white text-4xl md:text-5xl leading-tight transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transitionDelay: "100ms",
                    }}
                >
                    Tu próxima escapada a las{" "}
                    <em className="text-[#F27507]">sierras</em>{" "}
                    te espera
                </h2>

                {/* Subtítulo */}
                <p
                    className="text-white/70 text-lg leading-relaxed transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transitionDelay: "200ms",
                    }}
                >
                    Cabañas con todo para desconectar: piscina, parrilla y naturaleza.
                    A minutos del centro de Alta Gracia.
                </p>

                {/* Divider */}
                <div
                    className="w-full h-px bg-white/10 my-2 transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transitionDelay: "300ms",
                    }}
                />

                {/* Botones */}
                <div
                    className="flex flex-col sm:flex-row gap-3 justify-center transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transitionDelay: "350ms",
                    }}
                >
                    <button
                        onClick={scrollToCabanas}
                        className="bg-[#F27507] hover:bg-[#F55809] text-white px-7 py-3 rounded-xl font-medium transition-colors"
                    >
                        Reservar ahora
                    </button>

                    
                        <a href="https://wa.me/54XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-white/35 text-white px-7 py-3 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors">
                        <svg className="w-4 h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Consultar por WhatsApp
                    </a>
                </div>

                {/* Prueba social */}
                <p
                    className="text-white/35 text-xs tracking-wide transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transitionDelay: "450ms",
                    }}
                >
                    Más de 200 familias eligieron Cabañas Touring Club en 2024
                </p>

            </div>
        </section>
    )
}

export default CTA