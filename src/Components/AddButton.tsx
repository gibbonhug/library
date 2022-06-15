import React, { useState, FC } from 'react';


/**
 * A button for later.
 * @returns a button that doesn't actually add a book (toggles between texts)
 */
export const AddButton:FC = () => {
  const [txt, setTxt] = useState('Add a book?');

  const handleClick = () => {
    setTxt(txt === 'Add a book?'? 'I don\'t do anything lol' : 'Add a book?');
  }

  return (
    <button 
      onClick={handleClick}
      type='button'
      id='add-button'>
      {txt}
    </button>
  )
}