import TextType from '../ReactBits/TextType.jsx';

const TextoReescrito = () => {
  return (
<TextType 
  text={["Confort", "Calidad", "Precios accesibles", "Ubicación inmejorable", "Atención personalizada"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="|"
  texts={["Confort", "Calidad", "Precios accesibles", "Ubicación inmejorable", "Atención personalizada"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
  );
}
export default TextoReescrito;