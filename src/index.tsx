import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/main.css';

import Container from './Components/Container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);