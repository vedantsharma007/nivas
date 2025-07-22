import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Keep this for basic body/html styles
import './assets/styles/global.css'; // Your main global styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);