import React from 'react';

import { BookProps } from './interfaces';

/**
 * A 'book' entry
 * @param props:
 * - bookInfo: an obj with various author, id, etc data
 * - handleDelete: function to delete this book from App state
 * @returns
 * - a 'book' div with class of 'book' that displays
 * the bookInfo params in an ul. also div inside this with 2 buttons
 * one button deletes book and other one toggles read status of book.
 */
const Book: React.FC<BookProps> = (props) => {
    const bookInfo = props.bookInfo;
    const handleDelete = props.handleDelete;
    const handleRead = props.handleRead;

    return (
        <div className='book'>
            <ul>
                <li>
                    <span>Title:</span> {bookInfo.title}
                </li>
                <li>
                    <span>Author:</span> {bookInfo.author}
                </li>
                <li>
                    <span>Pages:</span> {bookInfo.pageCount}
                </li>
                <li>
                    <span>Read:</span> {bookInfo.read.toString()}
                </li>
                <li>
                    <span>Id:</span> {bookInfo.id}
                </li>
                <li>
                    <span>Library Link:</span> <a href={'/book/' + bookInfo.id}>{bookInfo.title}</a>
                </li>
            </ul>
            <div>
                <button
                    className='delete-button'
                    type='button'
                    onClick={() => handleDelete(bookInfo.id)}
                >
                    Delete Forever
                </button>
                <button
                    className={
                        bookInfo.read
                            ? 'unread-button toggle-read-button'
                            : 'read-button toggle-read-button'
                    }
                    type='button'
                    onClick={() => handleRead(bookInfo.id)}
                >
                    {bookInfo.read ? 'Unread (by magic)' : "I've read this!"}
                </button>
            </div>
        </div>
    );
};

export default Book;
