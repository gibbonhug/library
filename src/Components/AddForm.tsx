import React, { useState } from 'react';

import { BookInfo } from './interfaces';

/**
 * Form to put new books
 * @returns A div with classes of 'add-form-wrapper' and 'content-wrapper'
 * Has a h2 and a child div form for new data with class of 'add-form'
 * each label/input pair is in a div with class of 'add-form-section'
 * Also has a submit button with class of 'add-form-submit'
 */

const AddForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [pageCount, setPageCount] = useState<number>(1); // 0 pages not allowed
    const [read, setRead] = useState<boolean>(false);

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault(); // no reload etc
        const bookToAdd = { title, author, pageCount, read } // POST will add id to complete BookInfo

        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookToAdd)
        }).then(() => {
            console.log('todo')
        })
    };

    return (
        <div className='add-form-wrapper content-wrapper'>
            <h2>Add A Book</h2>
            <form
                className='add-form'
                onSubmit={(evt) => {
                    handleSubmit(evt);
                }}
            >
                <div className='add-form-section'>
                    <label>Book Title:</label>
                    <input
                        type='text'
                        required
                        value={title}
                        onChange={(evt) => setTitle(evt.target.value)}
                    ></input>
                </div>
                <div className='add-form-section'>
                    <label>Author:</label>
                    <input
                        type='text'
                        required
                        value={author}
                        onChange={(evt) => setAuthor(evt.target.value)}
                    ></input>
                </div>
                <div className='add-form-section'>
                    <label>Page Count:</label>
                    <input
                        type='number'
                        min='1'
                        required
                        value={pageCount}
                        onChange={(evt) =>
                            setPageCount(parseInt(evt.target.value))
                        }
                    ></input>
                </div>
                <div className='add-form-section'>
                    <label>Read?:</label>
                    <input
                        type='checkbox'
                        onClick={(evt) => {
                            const target = evt.target as HTMLInputElement;
                            setRead(target.checked);
                        }} // TypeScript throws a fit if not done long way
                    ></input>
                </div>
                <button className='add-form-submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddForm;
