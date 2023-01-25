import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>
        Welcome to my Color Router
        <Link to={`/color1`}></Link>
        <Link to={`/color2`}></Link>
        <Link to={`/color3`}></Link>
      </h2>
    </div>
  );
}
