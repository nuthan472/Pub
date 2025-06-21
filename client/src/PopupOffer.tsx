import React, { useState, useEffect } from 'react';
import './PopupOffer.css';

const PopupOffer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [popupPosition, setPopupPosition] = useState<'initial' | 'fromButton'>('initial');

  // Show the popup shortly after the page loads
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setMinimized(true);
  };

  const handleOpen = () => {
    setPopupPosition('fromButton');
    setVisible(true);
    setMinimized(false);
    setTimeout(() => setPopupPosition('initial'), 600); // Reset to allow replaying animation
  };

  return (
    <>
      {visible && (
        <div
          className={
            `popup-offer-3d ${popupPosition === 'fromButton' ? 'popup-from-button' : ''}`
          }
        >
          <button
            className="popup-offer-close"
            aria-label="Close"
            onClick={handleClose}
          >
            ✖
          </button>
          <div className="popup-offer-girl">
            <span role="img" aria-label="girl waving" className="popup-girl-emoji">🙋‍♀️</span>
            <span className="popup-offer-hi">Hi!</span>
          </div>
          <div className="popup-offer-content">
            <h3>🎉 50% Discount on Every Pub!</h3>
            <p>
              For more info, contact us on WhatsApp.<br />
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                Click here to chat
              </a>
            </p>
          </div>
        </div>
      )}
      {minimized && (
        <button className="popup-offer-fab" onClick={handleOpen} aria-label="Open offer popup">
          <span role="img" aria-label="girl waving" className="popup-girl-emoji">🙋‍♀️</span>
        </button>
      )}
    </>
  );
};

export default PopupOffer;