import React from 'react';
import Card from './Card';

const Deck = ({ cards, onCardClick, cardSmall }) => {
  return (
    <div>
      {(cards.length)
        ? (cards.length === 1)
          ? <h1>{cards.length} card in your deck</h1>
          : <h1>{cards.length} cards in your deck</h1>
        : <div></div>
      }
      
      {
        cards.map((card, i) => {
          return (
            <Card 
              key={card.id} 
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