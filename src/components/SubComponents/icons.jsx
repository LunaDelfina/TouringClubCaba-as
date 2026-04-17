
import Instagram from "../../icons/instagram-w.png";
import Whatsapp from "../../icons/whatsapp-w.png";
import Facebook from "../../icons/facebook-w.png";

const Iconos = () => {
  return (
    <div className="absolute flex gap-[1vh]">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} alt="Instagram" />
      </a>
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
        <img src={Whatsapp} alt="Whatsapp" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={Facebook} alt="Facebook" />
      </a>
    </div>
  );
};

export default Iconos;
