import React from 'react';
import { useParams } from 'react-router-dom';

import Library from './Library';

import { HomeProps, BookInfo } from './interfaces';

/**
 * This is similar to the home component and has same Prop type
 * However it only displays one book (whose id is passed as bookIdParam)
 * This is not just a 'library' component because we are passing down
 * isLoadingData, etc
 * Fetches book data with useFetchData
 * @returns Conditional loading, error, or a library component
 */
const LibraryPage: React.FC<HomeProps> = (props) => {
    const { bookIdParam } = useParams(); // taken from the route
    // take the number from the string route param
    let bookId: number | null = null;
    if (bookIdParam) {
        bookId = parseInt(bookIdParam);
    }

    const isLoadingData = props.isLoadingData;
    const isError = props.isError;
    const error = props.error;
    const libraryArray = props.libraryArray;
    const handleDelete = props.handleDelete;
    const handleRead = props.handleRead;

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
        <>
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
        </>
    );
};

export default LibraryPage;
