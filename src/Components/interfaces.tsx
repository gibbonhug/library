/**
 * All props passed to Books
 * includes BookInfo which is an obj,
 * and handleDelete function,
 * and handleRead function (toggle read status)
 */

export interface BookProps {
    bookInfo: BookInfo;
    handleDelete: Function;
    handleRead: Function;
}

/**
 * A set of props to be rendered in a Book component
 * (title, author, etc; incl id)
 */
export interface BookInfo {
    title: string;
    author: string;
    pageCount: number;
    read: boolean;
    id: number;
}

/**
 * Props: libraryArray is passed to the Library component, which displays
 * Book components as children
 * libraryArray: Array of BookInfo objs
 * libraryTitle: the title of this library ex. 'all books' or 'books i have read'
 * which is displayed as a header
 * handleDelete: func to delete a book
 * handleRead: functto toggle read/unread status
 */
export interface LibraryProps {
    libraryArray: BookInfo[];
    libraryTitle?: string;
    handleDelete: Function;
    handleRead: Function;
}