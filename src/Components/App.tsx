import React, { useState, FC } from 'react';

import { Nav } from './Nav';
import { Library } from './Library';
import { AddButton } from './AddButton';
import { Babo } from './Babo'; // temp


/**
 * The 'home page'
 * @returns A div containing all other components; everything
 * nested inside a div of 'container-app';
 * everything except the header nested inside a div of 'container-meat'
 */
export const App:FC = () => {
  const [libraryArray, setLibraryArray] = useState([
    // initial books
    { title: 'Anna Karenina', author: 'Leo Tolstoy', pageCount: 960, read: false, id: 0 },
    { title: 'As I Lay Dying', author: 'William Faulkner', pageCount: 288, read: true, id: 1 },
    { title: 'Gone with the Wind', author: 'Margaret Mitchell', pageCount: 1037, read: false, id: 2 },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', pageCount: 680, read: true, id: 3 }
  ]);

  return (
    <div id='container-app'>
        <Nav />
        <div id='container-meat'>
            <Library libraryArray={libraryArray} /> 
            <AddButton />
            <Babo />
        </div>
    </div>
  )
}