import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Render App without StrictMode
root.render(
  <App />
);

// Optional: performance reporting
reportWebVitals();
