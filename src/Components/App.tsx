import React, { useState, FC } from 'react';

import Nav from './Nav';
import Library from './Library';
import AddButton from './AddButton';
import Babo from './Babo'; // temp

import { LibraryProps, BookProps } from './component-interfaces/interfaces';


/**
 * The 'home page'
 * @returns A div containing all other components; everything 
 * is nested inside a div of 'app-wrapper';
 * everything except the header nested inside a div of 'app-meat'
 */
const App: FC = () => {
  const [libraryArray, setLibraryArray] = useState([
    // initial books
    { title: 'Anna Karenina', author: 'Leo Tolstoy', pageCount: 960, read: false, id: 0 },
    { title: 'As I Lay Dying', author: 'William Faulkner', pageCount: 288, read: true, id: 1 },
    { title: 'Gone with the Wind', author: 'Margaret Mitchell', pageCount: 1037, read: false, id: 2 },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', pageCount: 680, read: true, id: 3 }
  ]);

  return (
    <div id='app-wrapper'>
      <Nav />
      <div id='app-meat'>
        <Library libraryArray={libraryArray} libraryTitle={'All Books'} />

        <Library libraryArray={libraryArray.filter((thisBook: BookProps) => thisBook.read === true)} libraryTitle={'Books I\'ve read'} />

        <AddButton />
        <Babo />
      </div>
    </div>
  )
}

export default App;