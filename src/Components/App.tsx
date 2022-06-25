import React from 'react';
import useFetchData from '../hooks/useFetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Babo from './Babo'; // temp just to have routes
import AddButton from './AddButton'; // temp just to have routes
import Library from './Library';

import { BookInfo } from './interfaces';

/**
 * The brain of the App
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
    <BrowserRouter>
      <div id='app-wrapper'>
        <Nav />
        <div id='app-meat'>
          <Routes>

            <Route path="/" element={<Home
              libraryArray={libraryArray!}
              isLoadingData={isLoadingData}
              isError={isError}
              error={error}
              handleDelete={handleDelete}
              handleRead={handleRead}      
            />} />

            <Route path="/babo" element={<Babo />} />

            <Route path="/add" element={<AddButton />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;