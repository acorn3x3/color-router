//links between 3 colors that render rgb on page
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <p className="redish">
        <NavLink to={`/rgb/255/0/125`}>Redish</NavLink>
      </p>
      <p className="greenish">
        <NavLink to={`/rgb/155/255/122`}>Greenish</NavLink>
      </p>
      <p className="blueish">
        <NavLink to={`/rgb/12/125/255`}>Blueish</NavLink>
      </p>
    </div>
  );
}
