import foto1 from "../Cabañas/Foto1.png";
import foto2 from "../Cabañas/Foto2.png";
import foto3 from "../Cabañas/Foto3.png";
import foto4 from "../Cabañas/Foto4.png";
import foto5 from "../Cabañas/Foto5.jpg";
import foto6 from "../Cabañas/Foto6.jpg";
import foto7 from "../Cabañas/Foto7.jpg";
import foto8 from "../Cabañas/Foto8.jpg";

const photos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

const cabañasData = [
  {
    id: 1,
    name: "Cabaña Sauce",
    description:
      "Amplia, cómoda y luminosa. La Cabaña Sauce es ideal para compartir en familia o con amigos, con espacios pensados para descansar y disfrutar cada momento.",
    price: "$25.000",
    features: [
      "Capacidad para 7 personas",
      "2 Dormitorios",
      "Aire Acondicionado",
      "Smart TV",
      "3 baños",
    ],
    photos,
  },
  {
    id: 2,
    name: "Cabaña Algarrobo",
    description:
      "Acogedora y rodeada de naturaleza. La Cabaña Algarrobo ofrece el refugio perfecto para parejas o familias pequeñas que buscan tranquilidad y confort.",
    price: "$18.000",
    features: [
      "Capacidad para 4 personas",
      "1 Dormitorio",
      "Aire Acondicionado",
      "Smart TV",
      "1 baño",
    ],
    photos,
  },
  {
    id: 3,
    name: "Cabaña Quebracho",
    description:
      "Espaciosa y luminosa, ideal para grupos grandes. La Cabaña Quebracho combina amplitud y comodidad con vistas privilegiadas al entorno serrano.",
    price: "$32.000",
    features: [
      "Capacidad para 10 personas",
      "3 Dormitorios",
      "Aire Acondicionado",
      "Smart TV",
      "2 baños",
    ],
    photos,
  },
  {
    id: 4,
    name: "Cabaña Espinillo",
    description:
      "Íntima y especial. La Cabaña Espinillo está diseñada para escapadas en pareja, con detalles que hacen de cada estadía una experiencia única e inolvidable.",
    price: "$15.000",
    features: [
      "Capacidad para 2 personas",
      "1 Dormitorio",
      "Aire Acondicionado",
      "Smart TV",
      "1 baño",
    ],
    photos,
  },
];

export default cabañasData;