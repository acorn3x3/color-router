import './ColorPicker.css';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

export default function ColorPicker() {
  const { r, g, b } = useParams();

  if (r > 255 || r < 0 || g > 255 || g < 0 || b > 255 || b < 0) {
    return <NotFound></NotFound>;
  }
  return (
    <main className="main" style={{ backgroundColor: `rgb(${r}, ${g}, ${b}` }}>
      <h1>
        {' '}
        Color Picker!{' '}
        <h3>
          You have chosen this much red: {r}, with this much green: {g}, and this much blue: {b}
        </h3>
      </h1>
    </main>
  );
}
