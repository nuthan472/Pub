import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import PopupOffer from './PopupOffer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <PopupOffer />
    <WhatsAppFloatingButton />
  </React.StrictMode>
);