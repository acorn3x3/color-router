import './ColorPicker.css';
import { useParams } from 'react-router-dom';

export default function ColorPicker() {
  const { r, g, b } = useParams();

  return (
    <main className="main" style={{ backgroundColor: `rgb(${r}, ${g}, ${b}` }}>
      <h1>
        {' '}
        Color Picker!{' '}
        <h3>
          You have chosen this much red:{r}, this much green:{g}, this much blue: {b}
        </h3>
      </h1>
    </main>
  );
}
