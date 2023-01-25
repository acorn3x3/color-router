//links between 3 colors that render rgb on page
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <p className="redish">
        <NavLink to={`/rgb/111/111/111`}>Link 1</NavLink>
      </p>
      <p className="greenish">
        <NavLink to={`/rgb/222/222/222`}>Link 2</NavLink>
      </p>
      <p className="blueish">
        <NavLink to={`/rgb/333/333/333`}>Link 3</NavLink>
      </p>
    </div>
  );
}
