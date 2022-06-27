/**
 * All props passed to Books
 * - BookInfo which is an obj,
 * - handleDelete function: deletes a book from state
 * - handleRead function (toggle read status)
 */

export interface BookProps {
    bookInfo: BookInfo;
    handleDelete: (id: number) => void;
    handleRead: (id: number) => void;
}

/**
 * A set of props to be rendered in a Book component
 * - title: title of the book
 * - author: author of the book
 * - pageCount: number of pages this book has
 * - read: boolean whether this book is read or unread
 * - id: data id of this book
 */
export interface BookInfo {
    title: string;
    author: string;
    pageCount: number;
    read: boolean;
    id: number;
}

/**
 * Props: LibraryProps is passed to the Library component, which displays
 * Book components as children
 * - libraryArray: Array of BookInfo objs
 * - libraryTitle: the title of this library ex. 'all books' or 'books i have read'
 * which is displayed as a header
 * - handleDelete: func to delete a book
 * - handleRead: func to toggle read/unread status
 */
export interface LibraryProps {
    libraryArray: BookInfo[];
    libraryTitle?: string;
    handleDelete: (id: number) => void;
    handleRead: (id: number) => void;
}

/**
 * This is used for both Home and LibraryPage
 * Props:
 * - isLoadingData: whether fetch request is still ongoing
 * - isError: whether there was an error retrieving data
 * - error: an error if it exists
 * - libraryArray: data fetched to be passed down to libraries and books
 * - handleDelete: func to delete a book
 * - handleRead: functto toggle read/unread status
 */
export interface HomeProps {
    isLoadingData: boolean;
    isError: boolean;
    error: Error | null;
    libraryArray: BookInfo[];
    handleDelete: (id: number) => void;
    handleRead: (id: number) => void;
}