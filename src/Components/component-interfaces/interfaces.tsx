/**
 * A set of props to be rendered in a Book component
 */
export interface BookProps {
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
    libraryArray: BookProps[];
    libraryTitle?: string;
}