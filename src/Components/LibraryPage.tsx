import React from 'react';

import Library from './Library';

import { HomeProps } from './interfaces';

/**
 * This is similar to the home component and has same Prop type
 * However it only displays one book (whose title is the libraryTitle
 * prop passed down)
 * This is not just the 'library' because we are passing down 
 * isLoadingData, etc
 * Fetches book data with useFetchData
 * @returns Conditional loading, error, or a library component
 */
const LibraryPage:React.FC<HomeProps> = (props) => {
  const isLoadingData = props.isLoadingData;
  const isError = props.isError;
  const error = props.error;
  const libraryArray = props.libraryArray;
  const handleDelete = props.handleDelete;
  const handleRead = props.handleRead;

  return (
    <>
      {isLoadingData && <div>
        Fetching data...
      </div>}

      {isError && <div>
        <p>There was an error retrieving your data:</p>
        <p>{error!.message}</p>
      </div>}

      {libraryArray && <Library
        libraryArray={libraryArray!}
        libraryTitle={libraryArray[0].title}
        handleDelete={handleDelete}
        handleRead={handleRead}
      />}
    </>
  )
}

export default LibraryPage;