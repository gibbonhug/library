console.log('hello typescript');

const myLibrary: Book[] = [];

type Book = {
    /**
     * The title of the book
     */
    title: string;
    /**
     * The author of the book (First Last)
     */
    author: string;
    /**
     * How many pages the book has
     */
    pageCount: number;
    /**
     * Whether the book is read or unread
     */
    readStatus: boolean;
}

function Book(
    this: Book,
    title: string, 
    author: string, 
    pageCount: number,
    readStatus: boolean
    ) {
    this.title = title;
}

