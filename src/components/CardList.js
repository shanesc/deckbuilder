import React from 'react';
import Card from './Card';

const CardList = ({ cards, onCardClick, cardSmall }) => {
  return (
    <div>
      {
        cards.map((card, i) => {
          return (
            <Card 
              key={i} 
              onCardClick={onCardClick}
              small={cardSmall}
              cardData={card}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;