import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img alt={props.name} src={props.image_uri} />
    </div>
  );
}

export default Card;