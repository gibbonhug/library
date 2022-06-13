import React from 'react';
import './css/Book.css';

interface BookProps {
  title: string;
  author: string;
  pageCount: number;
  read: boolean;
}

/**
 * A book
 * Title: The title of the book
 * Author: The author of the book
 * pageCount: The number of pages of the book
 * read: Whether the book has been read or not
 */
export default function Book({title, author, pageCount, read}: BookProps ) {
  return (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>Author: {author}</li>
        <li>Pages: {pageCount}</li>
        <li>Read: {read.toString()}</li>
      </ul>
    </div>
  )
}