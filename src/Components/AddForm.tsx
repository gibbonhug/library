import React from 'react';

import AddButton from './AddButton';

const AddForm: React.FC = () => {
    return (
        <div>
            <h2>Add A Book</h2>
            <form>
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
