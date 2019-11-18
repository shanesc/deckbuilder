import React from 'react';
import './Card.css';

const Card = (props) => {
  const name = props.cardData.name;
  const image_uri = props.cardData.image_uris.normal;
  // console.log(props.cardData);
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