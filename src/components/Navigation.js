import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='nav'>
      <div className='nav-title center'>
        <h2>DeckBuilder</h2>
      </div>
      <ul className='nav-links center'>
        <li><a href='#'>Search</a></li>
        <li><a href='#'>Deck</a></li>
      </ul>
      
    </div>
  )
};

export default Navigation;