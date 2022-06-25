import React from 'react';
import { Link } from 'react-router-dom';

/**
 * The ugly nav bar
 *@returns A nav bar with id of 'nav'
 */
const Nav: React.FC = () => {
  return (
    <div id='nav'>
      <div className='left'>
        Please Excuse My Dnav Abar Swag
        <br />
        I can be two lines if I want.
      </div>
      <div className='right'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/babo">Babo</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;