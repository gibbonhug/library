import React from 'react';
import useFetchData from '../hooks/useFetchData';

import Library from './Library';

import { BookInfo } from './interfaces';



/**
 * The home component
 * Fetches book data with useFetchData
 * @returns Conditional loading, error, or 2 library components
 * (1: All books; 2: read books)
 * All in a div with className of 'content-wrapper'
 */
const Home: React.FC = () => {
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
     * Clicking the 'delete' button in a book calls this function, removing 
     * it with DELETE from the JSON db(for now)
     * also very uglily sets new state
     * @param id The id of the book to delete (is in bookInfo obj in book props)
     */
    const handleDelete = (id: number) => {
        /**
         * First filter array to everything except the thing we're deleting
         * to set it later
         */
        const newLibraryArray = libraryArray!.filter(
            (bookObj) => bookObj.id !== id
        );
        fetch('http://localhost:8000/books/' + id, {
            method: 'DELETE'
        }).then(() => {
            setLibraryArray(newLibraryArray);
        })
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

    return (
        <div className='content-wrapper'>
            {isLoadingData && <div>Fetching data...</div>}

            {isError && (
                <div>
                    <p>There was an error retrieving your data:</p>
                    <p>{error!.message}</p>
                </div>
            )}

            {libraryArray && (
                <Library
                    libraryArray={libraryArray!}
                    libraryTitle={'All Books'}
                    handleDelete={handleDelete}
                    handleRead={handleRead}
                />
            )}

            {libraryArray && (
                <Library
                    libraryArray={libraryArray!.filter(
                        (thisBook: BookInfo) => thisBook.read === true
                    )}
                    libraryTitle={"Books I've read"}
                    handleDelete={handleDelete}
                    handleRead={handleRead}
                />
            )}
        </div>
    );
};

export default Home;
