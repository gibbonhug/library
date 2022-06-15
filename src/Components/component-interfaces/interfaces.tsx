/**
 * All props passed to Books
 * includes BookInfo which is an obj,
 * and handleDelete function
 */

export interface BookProps {
    bookInfo: BookInfo;
    handleDelete: Function;
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
 * 
 * libraryTitle: the title of this library ex. 'all books' or 'books i have read'
 * which is displayed as a header
 */
export interface LibraryProps {
    libraryArray: BookInfo[];
    libraryTitle?: string;
    handleDelete: Function;
}