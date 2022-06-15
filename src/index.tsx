import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/main.css';

import App from './Components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);