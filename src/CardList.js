import React from 'react';
import Card from './components/Card';

const CardList = ({ cards }) => {
  return (
    <div>
      {
        cards.map((card, i) => {
          return (
            <Card 
              key={i} 
              name={card.name} 
              image_uri={card.normal} 
            />
          );
        })
      }
    </div>
  );
}

export default CardList;