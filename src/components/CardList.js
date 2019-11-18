import React from 'react';
import Card from './Card';

const CardList = ({ cards, onCardClick }) => {
  return (
    <div>
      {
        cards.map((card, i) => {
          return (
            <Card 
              key={i} 
              // name={card.name} 
              // image_uri={card.image_uris.normal} 
              onCardClick={onCardClick}
              small={true}
              cardData={card}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;