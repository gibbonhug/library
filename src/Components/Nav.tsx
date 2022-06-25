import React from 'react';


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
          <li>Home</li>
          <li>Babo</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;