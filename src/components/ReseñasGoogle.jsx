const starsData = [
    { estrellas: 5, cantidad: 155 },
    { estrellas: 4, cantidad: 10 },
    { estrellas: 3, cantidad: 2 },
    { estrellas: 2, cantidad: 1 },
    { estrellas: 1, cantidad: 1 },
]

const total = starsData.reduce((acc, s) => acc + s.cantidad, 0)

const ReseñasGoogle = ({ visible }) => {
    return (
        <div className="flex gap-6 mt-4 w-full max-w-[65%] mx-auto">

            {/* Bloque izquierdo: Resumen Google */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-3 flex gap-5 items-center"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.7s ease",
                    transitionDelay: "500ms",
                }}
            >
                {/* Logo Google + puntuación */}
                <div className="flex flex-col items-center min-w-[90px]">
                    {/* Logo Google SVG inline */}
                    <svg width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.1 0 5.8 1.1 8 2.9l6-6C34.5 3.1 29.6 1 24 1 14.8 1 7 6.7 3.7 14.6l7 5.4C12.4 13.9 17.7 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-16.9z"/>
                        <path fill="#FBBC05" d="M10.7 28.5A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.1.7-4.5l-7-5.4A23.9 23.9 0 0 0 .5 24c0 3.8.9 7.4 2.5 10.6l7.7-6.1z"/>
                        <path fill="#34A853" d="M24 47c5.5 0 10.2-1.8 13.6-4.9l-7.4-5.7c-1.8 1.2-4.1 1.9-6.2 1.9-6.3 0-11.6-4.3-13.5-10.1l-7.7 6.1C7 40.3 14.8 47 24 47z"/>
                    </svg>
                    <span className="text-4xl font-bold text-[#7D6239] font-playfair mt-1">4.9</span>
                    <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} style={{ color: "#F27507", fontSize: "14px" }}>★</span>
                        ))}
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{total} opiniones</span>
                </div>

                {/* Barras por estrella */}
                <div className="flex flex-col gap-1.5 flex-1">
                    {starsData.map(({ estrellas, cantidad }) => {
                        const porcentaje = Math.round((cantidad / total) * 100)
                        return (
                            <div key={estrellas} className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 w-4 text-right">{estrellas}</span>
                                <span style={{ color: "#F27507", fontSize: "11px" }}>★</span>
                                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="h-2 rounded-full transition-all duration-1000"
                                        style={{
                                            width: visible ? `${porcentaje}%` : "0%",
                                            background: "linear-gradient(90deg, #F27507, #F55809)",
                                            transitionDelay: `${600 + (5 - estrellas) * 100}ms`,
                                        }}
                                    />
                                </div>
                                <span className="text-xs text-gray-400 w-6">{cantidad}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Bloque derecho: +100 clientes */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-3 flex flex-col items-center justify-center text-center"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.7s ease",
                    transitionDelay: "650ms",
                }}
            >
                <div className="flex gap-1 items-center">
                    <span className="text-5xl font-bold font-Roboto text-[#F55809]">+100</span>
                <span className="text-lg font-Roboto text-[#6E6E6E] font-semibold mt-1 text-left leading-[1] ">Clientes <br></br>satisfechos</span>
                
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Si ya nos visitaste, <br></br>¡también podés dejar tu comentario en Google!
                </p>
                <a
                
                    href="https://g.page/r/TU_LINK_GOOGLE" // ← reemplazá con tu link real
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-5 py-2 rounded-full text-sm font-semibold text-white"
                    style={{ background: "linear-gradient(90deg, #F27507, #F55809)" }}
                >
                    VER MÁS
                </a>
            </div>

        </div>
    )
}

export default ReseñasGoogle