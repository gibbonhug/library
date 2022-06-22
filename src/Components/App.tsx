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
   * For only rendering books when book data is fetched in useEffect
   * Not sure of best practices for this but works for now (?)
   */
  const [loadingStatus, setLoadingStatus] = useState<boolean>(true);

  /**
   * Books to be displayed in libraries
   * These are fetched in useEffect
   */
  const [libraryArray, setLibraryArray] = useState<[BookInfo]>([
    {title: 'loading data', author:'loading data', pageCount: 0, read: false, id: 0}
  ]);

  /**
   * Runs once, retrieving book data from db.json in src/data
   * Sets these books as the 'initial' books
   * If they are fetched successfully the loadingStatus is switched to
   * false which allows libraries to be rendered
   */
    useEffect(() => {
    fetch('http://localhost:8000/books')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setLoadingStatus(false);
        setLibraryArray(data);
      })
    }, []);

  /**
   * Clicking the 'delete' button in a book calls this function, removing it from
   * the App's libraryArray state
   * @param id The id of the book to delete (is in bookInfo obj in book props)
   */
  const handleDelete = (id: number) => {
    const newLibraryArray = libraryArray.filter(bookObj =>
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
    const newLibraryArray = libraryArray.map((bookObj) => {
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
        {!loadingStatus && <Library libraryArray={libraryArray} libraryTitle={'All Books'} handleDelete={handleDelete} handleRead={handleRead} />}

        {!loadingStatus && <Library libraryArray={libraryArray.filter((thisBook: BookInfo) => thisBook.read === true)} libraryTitle={'Books I\'ve read'} handleDelete={handleDelete} handleRead={handleRead} />}

        <AddButton />

        <Babo />
      </div>
    </div>
  )
}

export default App;