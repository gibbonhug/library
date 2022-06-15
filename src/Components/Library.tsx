import React, { FC } from 'react';

import Book from './Book';

import { LibraryProps, BookProps } from './component-interfaces/interfaces';


/**
 * A 'library' that displays books
 * @param props: libraryArray: an array of 'book' objects
 * @returns A div with id of 'library' that displays the passed books
 * in a CSS Grid
 */
const Library:FC<LibraryProps> = (props) => {
  const libraryArray = props.libraryArray;

  return (
    <div id='library'>
      {libraryArray.map((thisBook: BookProps) =>
      <Book
      // there has to be a shorter way. i know i saw it somewhere and forgot where.
        title={thisBook.title}
        author={thisBook.author}
        pageCount={thisBook.pageCount}
        read={thisBook.read}
        id={thisBook.id} 
      />
    )}
    </div>
  )
}

export default Library;