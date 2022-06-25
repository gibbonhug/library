import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home;


// {isLoadingData && <div>
//     Fetching data...
//   </div>}

//   {isError && <div>
//     <p>There was an error retrieving your data:</p>
//     <p>{error!.message}</p>
//   </div>}

//   {libraryArray && <Library libraryArray={libraryArray!} libraryTitle={'All Books'} handleDelete={handleDelete} handleRead={handleRead} />}

//   {libraryArray && <Library libraryArray={libraryArray!.filter((thisBook: BookInfo) => thisBook.read === true)} libraryTitle={'Books I\'ve read'} handleDelete={handleDelete} handleRead={handleRead} />}

//   /**
//    * Fetch the data of type BookInfo[]
//    * isLoadingData will be true while it is being fetched
//    */
//    const {
//     data: libraryArray, setData: setLibraryArray,
//     isLoadingData, isError, error
//   } = useFetchData<BookInfo[]>('http://localhost:8000/books');

//   /**
//    * Clicking the 'delete' button in a book calls this function, removing it from
//    * the App's libraryArray state
//    * @param id The id of the book to delete (is in bookInfo obj in book props)
//    */
//   const handleDelete = (id: number) => {
//     const newLibraryArray = libraryArray!.filter(bookObj =>
//       bookObj.id !== id);
//     setLibraryArray(newLibraryArray);
//   }

//   /**
//    * Clicking the 'Toggle read status' button in a book calls this, which toggles
//    * the current read status. Leaves other books as-is
//    * @param id The id of the book to delete (is in bookInfo obj in book props)
//    */
//   const handleRead = (id: number) => {
//     // find the book whose index matches the id and toggle its read status
//     const newLibraryArray = libraryArray!.map((bookObj) => {
//       if (bookObj.id === id) {
//         // only modify this book
//         bookObj.read = !bookObj.read;
//       }
//       return bookObj; // return all books
//     });
//     setLibraryArray(newLibraryArray);
//   }