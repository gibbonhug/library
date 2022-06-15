import React, { FC } from 'react';

import { BookProps } from './component-interfaces/interfaces';


/**
 * A 'book' entry
 * @param props: Book props:
  * title: The title of the book
  * author: The author of the book
  * pageCount: The number of pages of the book
  * read: Whether the book has been read or not
  * id: Number id of the book entry for... bookkeeping B)
 * @returns a 'book' div with class of 'book' that displays
 * the book prop params
 */
const Book:FC<BookProps> = (props) => {
  return (
    <div className='book'>
      <ul>
        <li><span>Title:</span> {props.title}</li>
        <li><span>Author:</span> {props.author}</li>
        <li><span>Pages:</span> {props.pageCount}</li>
        <li><span>Read:</span> {props.read.toString()}</li>
        <li><span>ID:</span> {props.id}</li> 
      </ul>
      <button
        className='delete-button'
        type='button'
        onClick={() => console.log('you deleted me')}>
          Delete
      </button>
    </div>
  )
}

export default Book;