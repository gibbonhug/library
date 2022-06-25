import React from 'react';
import useFetchData from '../hooks/useFetchData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
   * Fetch the data of type BookInfo[]
   * isLoadingData will be true while it is being fetched
   */
  const {
    data: libraryArray, setData: setLibraryArray,
    isLoadingData, isError, error
  } = useFetchData<BookInfo[]>('http://localhost:8000/books');

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

  console.log('hi');
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
    <Router>
      <div id='app-wrapper'>
        <Nav />
        <div id='app-meat'>
          <Routes>

            <Route path="/">
              {isLoadingData && <div>
                Fetching data...
              </div>}

              {isError && <div>
                <p>There was an error retrieving your data:</p>
                <p>{error!.message}</p>
              </div>}

              {libraryArray && <Library libraryArray={libraryArray!} libraryTitle={'All Books'} handleDelete={handleDelete} handleRead={handleRead} />}

              {libraryArray && <Library libraryArray={libraryArray!.filter((thisBook: BookInfo) => thisBook.read === true)} libraryTitle={'Books I\'ve read'} handleDelete={handleDelete} handleRead={handleRead} />}

              <AddButton />
            </Route>

            <Route path="/babo">
              <Babo />
            </Route>

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;