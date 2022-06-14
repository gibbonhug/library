import React from 'react';


interface BookProps {
  title: string;
  author: string;
  pageCount: number;
  read: boolean;
}

/**
 * A book
 * title: The title of the book
 * author: The author of the book
 * pageCount: The number of pages of the book
 * read: Whether the book has been read or not
 */
export default function Book({title, author, pageCount, read}: BookProps ) {
  return (
    <div className='book'>
      <ul>
        <li>Title: {title}</li>
        <li>Author: {author}</li>
        <li>Pages: {pageCount}</li>
        <li>Read: {read.toString()}</li>
      </ul>
    </div>
  )
}