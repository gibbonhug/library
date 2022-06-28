import React from 'react';

import AddButton from './AddButton';

/**
 * Form to put new books
 * @returns A div with classes of 'form-wrapper' and 'content-wrapper'
 * Has a h2 and a child div form for new data with class of 'add-form'
 * each label/input pair is in a div with class of 'form-section'
 * Also has a subcomponent of AddButton for now, might just move inside
 */

const AddForm: React.FC = () => {
    return (
        <div className='form-wrapper content-wrapper'>
            <h2>Add A Book</h2>
            <form className='add-form'>
                <div className='form-section'>
                    <label>Book Title:</label>
                    <input type='text' required></input>
                </div>
                <div className='form-section'>
                    <label>Author:</label>
                    <input type='text' required></input>
                </div>
                <div className='form-section'>
                    <label>Page Count:</label>
                    <input type='number' required></input>
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
