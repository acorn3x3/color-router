import './ColorPicker.css';
import { useParams } from 'react-router-dom';

export default function ColorPicker() {
  const { r, g, b } = useParams();

  return (
    <main style={{ backgroundColor: `rgb(${r}, ${g}, ${b}` }}>
      You have chosen {r}, {g}, {b}
    </main>
  );
}
