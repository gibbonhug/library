import React from 'react';


export interface BookProps {
  title: string;
  author: string;
  pageCount: number;
  read: boolean;
  id: number;
}

/**
 * A book entry
 * title: The title of the book
 * author: The author of the book
 * pageCount: The number of pages of the book
 * read: Whether the book has been read or not
 * id: Number id of the book entry for... bookkeeping B)
 */
export default function Book({title, author, pageCount, read, id}: BookProps ) {
  return (
    <div className='book'>
      <ul>
        <li><span>Title:</span> {title}</li>
        <li><span>Author:</span> {author}</li>
        <li><span>Pages:</span> {pageCount}</li>
        <li><span>Read:</span> {read.toString()}</li>
        <li><span>ID:</span> {id}</li> 
      </ul>
    </div>
  )
}