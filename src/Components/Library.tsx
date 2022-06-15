import React, { FC } from 'react';

import Book from './Book';

import { LibraryProps, BookProps } from './component-interfaces/interfaces';


/**
 * A 'library' that displays books
 * @param props: libraryArray: an array of 'book' objects
 * @returns A wrapper div with class of 'library-wrapper'
 * inside is a h2 with the title; and a div with class of 'library-book-grid'
 * that is a CSS Grid of this library's books
 */
const Library:FC<LibraryProps> = (props) => {
  const libraryArray = props.libraryArray;

  return (
    <div className='library-wrapper'>
      <h2>{props.libraryTitle}</h2>
      <div className='library-book-grid'>
        {libraryArray.map((thisBook: BookProps) =>
        <Book
        // there has to be a shorter way. i know i saw it somewhere and forgot where.
          title={thisBook.title}
          author={thisBook.author}
          pageCount={thisBook.pageCount}
          read={thisBook.read}
          id={thisBook.id}
          key={thisBook.id} 
        />
      )}
      </div>

    </div>
  )
}

export default Library;