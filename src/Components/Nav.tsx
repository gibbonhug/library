import React from 'react';
import { Link } from 'react-router-dom';

/**
 * The ugly nav bar
 *@returns 
 * - A nav bar with id of 'nav':
 * - inside this is a div with id of 'nav-title'
 * - and another div with id of 'nav-links' (ul)
 */
const Nav: React.FC = () => {
  return (
    <div id='nav'>
      <div id='nav-title'>
        Please Excuse My Dnav Abar Swag
        <br />
        I can be two lines if I want.
      </div>
      <div id='nav-links'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/babo">Babo</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;