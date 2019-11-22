import React from 'react';
import './Card.css';

const Card = (props) => {
  const name = props.cardData.name;
  let image_uri;
  if (props.cardData.card_faces) {
    image_uri = props.cardData.card_faces[0].image_uris.normal;
  } else {
    image_uri = props.cardData.image_uris.normal;
  }
  

  return (
    <div 
      className='card'
      onClick={() => props.onCardClick(props.cardData)}
    >
      <img className={(props.small) ? 'smallCard' : ''} 
      alt={name} src={image_uri} 
      />
    </div>
  );
}

export default Card;