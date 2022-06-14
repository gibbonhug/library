import React from 'react'

export default function AddButton() {

  const handleClick = () => {
    console.log('you clicked me');
  }

  return (
    <button 
      onClick={handleClick}
      type='button'
      id='add-button'>
      Add A Book
    </button>
  )
}
