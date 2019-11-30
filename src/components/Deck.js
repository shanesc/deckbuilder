import React from 'react';
import Card from './Card';

const Deck = ({ cards, onCardClick, cardSmall }) => {
  return (
    <div>
      {(cards.length)
        ? (cards.length === 1)
          ? <h3>{cards.length} card in your deck</h3>
          : <h3>{cards.length} cards in your deck</h3>
        : <div></div>
      }
      
      {
        cards.map((card, i) => {
          return (
            <Card 
              key={i} 
              // name={card.name} 
              // image_uri={card.image_uris.normal} 
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

export default Deck;