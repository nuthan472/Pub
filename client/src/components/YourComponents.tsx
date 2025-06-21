import React from 'react';
import CardCarousel from './CardCarousel';

const cards = [
  {
    image: "/sugar-factory-reloaded.jpeg",
    title: 'Sugar Factory reloaded',
    description: 'with huge dance floor',
  },
  {
    image: '/blurred.jpg',
    title: 'Blurred',
    description: 'Settle in any province...',
  },
  {
    image: '/ginza.avif',
    title: 'Ginza',
    description: 'Making best cocktail party in the city',
  },
  {
    image: '/mirror-roof-top.jpg',
    title: 'Mirror Roof Top',
    description: 'best roof top experince',
  },
  {
    image: '/hungry-hippe.jpeg',
    title: 'Hungry Hippee',
    description: 'Sky-high views & neon cocktails',
  },
  
];

const YourComponent: React.FC = () => (
  <div>
    <CardCarousel cards={cards} />
  </div>
);

export default YourComponent;