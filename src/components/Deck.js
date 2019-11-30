import React from 'react';
import Card from './Card';

const Deck = ({ cards, onCardClick, cardSmall }) => {
  const manaSpread = {
    white: 0,
    red: 0,
    blue: 0,
    green: 0,
    black: 0
  }

  cards.map(card => {
    const manaCost = card.mana_cost;
    if (manaCost.includes('{W}')) {
      manaSpread.white++;
    }
    if (manaCost.includes('{R}')) {
      manaSpread.red++;
    }
    if (manaCost.includes('{U}')) {
      manaSpread.blue++;
    }
    if (manaCost.includes('{G}')) {
      manaSpread.green++;
    }
    if (manaCost.includes('{B}')) {
      manaSpread.black++;
    }
  });

  console.log(manaSpread);
  
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