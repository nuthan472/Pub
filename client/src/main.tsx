import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // ✅ VERY IMPORTANT
import WhatsAppFloatingButton from './WhatsAppFloatingButton';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <WhatsAppFloatingButton />
  </React.StrictMode>,
);