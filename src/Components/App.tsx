import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import Library from './Library';
import AddButton from './AddButton';
import Babo from './Babo'; // temp

import { BookInfo } from './interfaces';


/**
 * The 'home page'
 * @returns A div containing all other components; everything 
 * is nested inside a div of 'app-wrapper';
 * everything except the header nested inside a div of 'app-meat'
 */
const App: React.FC = () => {
  /**
   * Books to be displayed in libraries
   * These are fetched in useEffect
   * The default value is null which is before the data is fetched
   */
  const [libraryArray, setLibraryArray] = useState<BookInfo[] | null>(null);
  /**
   * Boolean to display a message if fetch is loading
   */
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  /**
   * Boolean to display a message there was an error retrieving data
   */
  const [isError, setIsError] = useState<boolean>(false);
  /**
   * For logging errors
   * I am not sure how to type this
   */
  const [error, setError] = useState<Error | null>(null);

  /**
   * Runs once ([]), retrieving book data from db.json in src/data
   * Sets these books as the 'initial' books
   * Will throw an error if cannot retrieve, which 
   * will display an error div
   */
  useEffect(() => {
  fetch('http://localhost:8000/books')
    .then(res => {
      if(!res.ok) {
        throw Error('There was an error retrieving book data');
      }
      return res.json();
    })
    .then(data => {
      // how do i type this? do I?
      setLibraryArray(data);
      setIsLoadingData(false);
    })
    .catch(err => {
      setIsLoadingData(false); // bool for should remove loading div
      setIsError(true); // bool for should display error div
      setError(err); // logging
    })
  }, []);

  /**
   * Clicking the 'delete' button in a book calls this function, removing it from
   * the App's libraryArray state
   * @param id The id of the book to delete (is in bookInfo obj in book props)
   */
  const handleDelete = (id: number) => {
    const newLibraryArray = libraryArray!.filter(bookObj =>
      bookObj.id !== id);
    setLibraryArray(newLibraryArray);
  }

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
  }

  return (
    <div id='app-wrapper'>
      <Nav />
      <div id='app-meat'>
        {isLoadingData && <div>
          Fetching data...
        </div>}

        {isError && <div>
          <p>There was an error retrieving your data:</p> 
          <p>{error!.toString()}</p>
        </div>}

        {libraryArray && <Library libraryArray={libraryArray!} libraryTitle={'All Books'} handleDelete={handleDelete} handleRead={handleRead} />}

        {libraryArray && <Library libraryArray={libraryArray!.filter((thisBook: BookInfo) => thisBook.read === true)} libraryTitle={'Books I\'ve read'} handleDelete={handleDelete} handleRead={handleRead} />}

        <AddButton />

        <Babo />
      </div>
    </div>
  )
}

export default App;