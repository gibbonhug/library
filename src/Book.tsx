import React from 'react';
import './css/Book.css';

interface BookProps {
  title: string;
  author: string;
  pageCount: number;
  read: boolean;
}

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