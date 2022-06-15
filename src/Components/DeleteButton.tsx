import React, { FC } from 'react';

/**
 * A button to delete a book from the page/library array
 * @returns A button with class of delete-button
 */
const DeleteButton = () => {
  return (
    <button
    type='button'
    className='delete-button'
    >
        Delete
    </button>
  )
}

export default DeleteButton;