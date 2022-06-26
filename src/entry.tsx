import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './';

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer as Element);
root.render(<App />);
