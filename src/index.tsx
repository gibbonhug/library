import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import Book from './Book';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div id='library'>
      <Book title='Anna Karenina' author='Leo Tolstoy' pageCount={960} read={false} />
      <Book title='As I Lay Dying' author='William Faulkner' pageCount={288} read={true} />
      <Book title='Gone with the Wind' author='Margaret Mitchell' pageCount={1037} read={false} />
      <Book title='Jane Eyre' author='Charlotte Brontë' pageCount={680} read={true} />
    </div>
  </React.StrictMode>
);