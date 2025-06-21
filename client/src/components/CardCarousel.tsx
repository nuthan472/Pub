import React, { useRef, useState, useEffect } from 'react';
import './CardCarousel.css';
import { FaHandPointLeft, FaHandPointRight } from 'react-icons/fa';
type CarouselCard = {
  image: string;
  title: string;
  description: string;
};

interface CardCarouselProps {
  cards: CarouselCard[];
  interval?: number;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards, interval = 2600 }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // For resetting timer on manual swipe
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrent(prev => (prev + 1) % cards.length);
    }, interval);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line
  }, [interval, cards.length]);

  const visibleCards = Math.min(3, Math.floor((cards.length - 2) / 2));

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + cards.length) % cards.length);
    resetTimer();
  };

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % cards.length);
    resetTimer();
  };

  return (
    <div className="carousel-3d-wrapper">
      <button
        className="carousel-arrow left blink"
        aria-label="Previous"
        onClick={handlePrev}
        tabIndex={0}
      >
        <FaHandPointLeft className="hand-icon" size={38} />
      </button>
      {/* ... */}
      <button
        className="carousel-arrow right blink"
        aria-label="Next"
        onClick={handleNext}
        tabIndex={0}
      >
        <FaHandPointRight className="hand-icon" size={38} />
      </button>
      <div className="carousel-3d">
        {cards.map((card, idx) => {
          let offset = idx - current;
          if (offset < -Math.floor(cards.length / 3)) offset += cards.length;
          if (offset > Math.floor(cards.length / 3)) offset -= cards.length;

          if (Math.abs(offset) > visibleCards) return null;

          const isHovered = hoveredIdx === idx;
          const transformScale = isHovered ? 1.1 : (offset === 0 ? 1 : 1 - 0.13 * Math.abs(offset));
          const transformRotate = isHovered
            ? `rotateY(${offset * 40}deg) scale(1.1)`
            : `rotateY(${offset * 40}deg) scale(${transformScale})`;

          return (
            <div
              key={idx}
              className={`carousel-card${offset === 0 ? ' active' : ''}${isHovered ? ' hovered' : ''}`}
              style={{
                '--offset': offset,
                '--abs-offset': Math.abs(offset),
                zIndex: visibleCards + 2 - Math.abs(offset) + (isHovered ? 10 : 0),
                opacity: Math.abs(offset) === visibleCards ? 0.5 : 1,
                transform: `
                  translate(-50%, -50%)
                  ${transformRotate}
                  translateX(${offset * 180}px)
                `,
                transition: isHovered
                  ? 'transform 0.25s cubic-bezier(0.4,1.8,0.6,1), box-shadow 0.2s'
                  : 'transform 0.6s cubic-bezier(0.45,1.2,0.45,1), opacity 0.4s, box-shadow 0.3s',
                boxShadow: isHovered
                  ? '0 12px 48px 0 rgba(37,99,235,0.25), 0 4px 16px rgba(0,0,0,0.12)'
                  : offset === 0
                  ? '0 16px 48px 0 rgba(0,0,0,0.26)'
                  : '0 8px 24px 0 rgba(0,0,0,0.12)',
                border: isHovered
                  ? '2.5px solid #2563eb'
                  : offset === 0
                  ? '2px solid #2563eb'
                  : '1px solid #e5e7eb'
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <img src={card.image} alt={card.title} />
              <div className="carousel-card-content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default CardCarousel;