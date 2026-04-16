import Masonry from '../ReactBits/Masonry';

import Foto1 from '../../Cabañas/Foto1.png';
import Foto2 from '../../Cabañas/Foto2.png';
import Foto3 from '../../Cabañas/Foto3.png';
import Foto4 from '../../Cabañas/Foto4.png';
import Foto5 from '../../Cabañas/Foto5.jpg';
import Foto6 from '../../Cabañas/Foto6.jpg';

const items = [
  { id: "1", img: `${Foto1}`, height: 500 },
  { id: "2", img: `${Foto2}`, height: 350 },
  { id: "3", img: `${Foto3}`, height: 600 },
  { id: "4", img: `${Foto4}`, height: 420 },
  { id: "5", img: `${Foto5}`, height: 500 },
  { id: "6", img: `${Foto6}`, height: 380 },
  { id: "7", img: `${Foto1}`, height: 500 },
  { id: "8", img: `${Foto2}`, height: 350 },
  { id: "9", img: `${Foto3}`, height: 600 },
  { id: "10", img: `${Foto4}`, height: 420 },
  { id: "11", img: `${Foto5}`, height: 500 },
  { id: "12", img: `${Foto6}`, height: 380 },
];
const MasonryGrid = () => {
  return (
    <div style={{ padding: '20px' }}>
<Masonry
  items={items}
  ease="power3.out"
  duration={0.6}
  stagger={0.05}
  animateFrom="center"
  scaleOnHover
  hoverScale={0.95}
  blurToFocus
  colorShiftOnHover={false}
/>

    </div>
  );
};

export default MasonryGrid;