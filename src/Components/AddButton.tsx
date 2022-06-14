import React, { useState } from 'react';

export default function AddButton() {
  const [txt, setTxt]: any[] = useState('Add a book?');

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
