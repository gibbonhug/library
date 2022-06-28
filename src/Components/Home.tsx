import React from 'react';

import Library from './Library';

import { BookInfo, HomeProps } from './interfaces';

/**
 * The home component
 * Fetches book data with useFetchData
 * @returns Conditional loading, error, or 2 library components
 * (All books and just read books)
 * All in a div with className of 'content-wrapper'
 */
const Home: React.FC<HomeProps> = (props) => {
    const isLoadingData = props.isLoadingData;
    const isError = props.isError;
    const error = props.error;
    const libraryArray = props.libraryArray;
    const handleDelete = props.handleDelete;
    const handleRead = props.handleRead;

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
