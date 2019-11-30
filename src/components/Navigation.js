import React from 'react';
import './Navigation.css';
import Logo from '../logo.png';

const Navigation = (props) => {
  return (
    <div className='nav center'>
      <div className='nav-title center'>
        <img className='logo' src={Logo} />
        {/* <h2>DeckBuilder</h2> */}
      </div>
      <ul className='nav-links center'>
        <li onClick={() => props.onRouteChange('home')}><a href='#'>Search</a></li>
        <li onClick={() => props.onRouteChange('deck')}><a href='#'>Deck</a></li>
      </ul>
      
    </div>
  )
};

export default Navigation;