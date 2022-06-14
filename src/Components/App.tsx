import React from 'react';

import Nav from './Nav';
import Library from './Library';
import AddButton from './AddButton';



export default function App() {
  return (
    <div id='container'>
        <Nav />
        <div id='meat'>
            <Library />
            <AddButton />
        </div>
    </div>
  )
}
