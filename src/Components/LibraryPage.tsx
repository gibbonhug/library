import React from 'react';
import useFetchData from '../hooks/useFetchData';
import { useParams } from 'react-router-dom';

import Library from './Library';

import { BookInfo } from './interfaces';

/**
 * This is similar to the Home component and has same Prop type
 * However it only displays one book (whose id is passed as bookIdParam)
 * This is not just a 'library' component because we are passing down
 * isLoadingData, etc
 * Fetches book data with useFetchData
 * @returns Conditional loading, error, or a library component
 * All in a div with className of 'content-wrapper'
 */
const LibraryPage: React.FC = () => {
    /**
     * Fetch the data of type BookInfo[]
     * isLoadingData will be true while it is being fetched
     */
    const {
        data: libraryArray,
        setData: setLibraryArray,
        isLoadingData,
        isError,
        error,
    } = useFetchData<BookInfo[]>('http://localhost:8000/books');

    /**
     * Clicking the 'delete' button in a book calls this function, removing it from
     * various libraryArray state
     * @param id The id of the book to delete (is in bookInfo obj in book props)
     */
    const handleDelete = (id: number) => {
        const newLibraryArray = libraryArray!.filter(
            (bookObj) => bookObj.id !== id
        );
        setLibraryArray(newLibraryArray);
    };

    /**
     * Clicking the 'Toggle read status' button in a book calls this, which toggles
     * the current read status. Leaves other books as-is
     * @param id The id of the book to delete (is in bookInfo obj in book props)
     */
    const handleRead = (id: number) => {
        // find the book whose index matches the id and toggle its read status
        const newLibraryArray = libraryArray!.map((bookObj) => {
            if (bookObj.id === id) {
                // only modify this book
                bookObj.read = !bookObj.read;
            }
            return bookObj; // return all books
        });
        setLibraryArray(newLibraryArray);
    };

    const { bookIdParam } = useParams(); // taken from the route
    let bookId: number | null = null;
    if (bookIdParam) {
        bookId = parseInt(bookIdParam);
    }

    let thisBook: BookInfo | null = null;
    // retrieve the 1 book from the array from the route param
    // multiple 'if's: first to check if libraryArray even fetched
    // second to check if a book with the passed param exists
    if (libraryArray) {
        if (libraryArray.some((thisBook: BookInfo) => thisBook.id === bookId)) {
            thisBook = libraryArray.filter(
                (thisBook: BookInfo) => thisBook.id === bookId
            )[0];
        }
    }

    return (
        <div className='content-wrapper'>
            {isLoadingData && <div>Fetching data...</div>}

            {isError && (
                <div>
                    <p>There was an error retrieving your data:</p>
                    <p>{error!.message}</p>
                </div>
            )}

            {libraryArray && !thisBook && (
                <div>
                    <p>That book does not exist.</p>
                </div>
            )}

            {libraryArray && thisBook && (
                <Library
                    libraryArray={[thisBook]}
                    libraryTitle={thisBook.title}
                    handleDelete={handleDelete}
                    handleRead={handleRead}
                />
            )}
        </div>
    );
};

export default LibraryPage;
