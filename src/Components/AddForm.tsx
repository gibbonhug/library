import React, { useState } from 'react';

import AddButton from './AddButton';

/**
 * Form to put new books
 * @returns A div with classes of 'form-wrapper' and 'content-wrapper'
 * Has a h2 and a child div form for new data with class of 'add-form'
 * each label/input pair is in a div with class of 'form-section'
 * Also has a subcomponent of AddButton for now, might just move inside
 */

const AddForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [pageCount, setPageCount] = useState<number>(1); // 0 pages not allowed
    const [readStatus, setReadStatus] = useState<boolean>(false);

    return (
        <div className='form-wrapper content-wrapper'>
            <h2>Add A Book</h2>
            <form className='add-form'>
                <div className='form-section'>
                    <label>Book Title:</label>
                    <input
                        type='text'
                        required
                        value={title}
                        onChange={(evt) => setTitle(evt.target.value)}
                    ></input>
                </div>
                <div className='form-section'>
                    <label>Author:</label>
                    <input
                        type='text'
                        required
                        value={author}
                        onChange={(evt) => setAuthor(evt.target.value)}
                    ></input>
                </div>
                <div className='form-section'>
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
                <div className='form-section'>
                    <label>Read?:</label>
                    <input type='checkbox' required></input>
                </div>
            </form>
            <AddButton />
        </div>
    );
};

export default AddForm;
