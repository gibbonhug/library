import React from 'react';

import Book from './Book';

import { LibraryProps, BookInfo } from './interfaces';

/**
 * A 'library' that displays books
 * @param props: 
 * - libraryArray: an array of 'book' objects;
 * - libraryTitle: the title of this library ex 'Books I've read';
 * - handleDelete: passed to Book children to delete them from the App's state;

 * @returns 
 * - A wrapper div with classes of 'library-wrapper'
 * -- inside: is a h2 with the title
 * -- also a div with class of 'library-book-grid'
 * that is a CSS Grid of this library's books
 */
const Library: React.FC<LibraryProps> = (props) => {
    /**
     * libraryArray: the array of books we are passing down to be displayed
     */
    const libraryArray = props.libraryArray;
    /**
     * handleDelete: passing this down to Books to delete them up in App
     */
    const handleDelete = props.handleDelete;
    /**
     * handleRead: passing this down to Books to toggle their read status in App
     */
    const handleRead = props.handleRead;

    return (
        <div className='library-wrapper'>
            <h2>{props.libraryTitle ? props.libraryTitle : 'Library'}</h2>
            <div className='library-book-grid'>
                {libraryArray.map((thisBook: BookInfo) => (
                    <Book
                        bookInfo={thisBook}
                        key={thisBook.id}
                        handleDelete={handleDelete}
                        handleRead={handleRead}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
