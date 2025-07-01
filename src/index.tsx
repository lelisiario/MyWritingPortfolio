// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Update this line to import your main global styles
import './styles/globals.css'; // Changed from './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);