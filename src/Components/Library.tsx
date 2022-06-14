import React, { useState } from 'react';

import Book, { BookProps } from './Book';


export default function Library() {
  const [bookList, setBookList]: any[] = useState([
    // initial books
    { title: 'Anna Karenina', author: 'Leo Tolstoy', pageCount: 960, read: false, id: 0 },
    { title: 'As I Lay Dying', author: 'William Faulkner', pageCount: 288, read: true, id: 1 },
    { title: 'Gone with the Wind', author: 'Margaret Mitchell', pageCount: 1037, read: false, id: 2 },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', pageCount: 680, read: true, id: 3 }
  ]);


  return (
    <div id='library'>
      {bookList.map((thisBook: BookProps) => // put all the default books on the page
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
