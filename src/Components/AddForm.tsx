import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Form to put new books
 * @returns A div with classes of 'add-form-wrapper' and 'content-wrapper'
 * Has a h2 and a child div form for new data with class of 'add-form'
 * each label/input pair is in a div with class of 'add-form-section'
 * Also has a submit button with class of 'add-form-submit'
 */
const AddForm: React.FC = () => {
    /**
     * The title of the book to add: text input
     */
    const [title, setTitle] = useState<string>('');
    /**
     * The author of the book to add: text input
     */
    const [author, setAuthor] = useState<string>('');
    /**
     * The page count of the book to add: number input
     * Min value of 1 (Not allowing 0-page books etc)
     */
    const [pageCount, setPageCount] = useState<number>(1);
    /**
     * The read status of the book to add: checkbox input
     */
    const [read, setRead] = useState<boolean>(false);
    /**
     * useNavigate TODO comments
     */
    const navigate = useNavigate();

    /**
     * Is post request awaiting response? Toggled disabled submit button
     * and the text in this button
     */
    const [isPending, setIsPending] = useState<boolean>(false);

    /**
     * When we click submit button, we POST data in form
     * This changes isPending to appropriate bool
     * Also goes to home page (/) after submit
     * @param evt The clicking 'submit' button event 
     */
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault(); // no reload etc
        setIsPending(true); // we are awaiting resolution
        const bookToAdd = { title, author, pageCount, read }; // POST will add id to complete BookInfo set of data

        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookToAdd),
        }).then(() => {
            setIsPending(false); // no longer awaiting resolution
            navigate('/'); // go to the home page
        });

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
                {!isPending && (
                    <button className='add-form-submit' type='submit'>Add Book</button>
                )}
                {isPending && (
                    <button className='add-form-submit' type='submit' disabled>Adding Your Book...</button>
                )}
            </form>
        </div>
    );
};

export default AddForm;
