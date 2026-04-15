import Masonry from '../ReactBits/Masonry';

import Foto1 from '../../Cabañas/Foto1.png';
import Foto2 from '../../Cabañas/Foto2.png';
import Foto3 from '../../Cabañas/Foto3.png';
import Foto4 from '../../Cabañas/Foto4.png';
import Foto5 from '../../Cabañas/Foto5.jpg';
import Foto6 from '../../Cabañas/Foto6.jpg';

const items = [
    {
      id: "1",
      img: `${Foto1}`,
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: `${Foto2}`,
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: `${Foto3}`,
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: `${Foto4}`,
      url: "https://example.com/four",
      height: 500,
    },
    {
      id: "5",
      img: `${Foto5}`,
      url: "https://example.com/five",
      height: 400,
    },
    {
      id: "6",
      img: `${Foto6}`,
      url: "https://example.com/six",
      height: 300,
    }

    // ... more items
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