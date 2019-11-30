import React from 'react';
import './Navigation.css';
import Logo from '../logo_transparent.png';

const Navigation = (props) => {
  return (
    <div className='nav center'>
      <img className='logo' src={Logo} />
      <ul className='nav-links center'>
        <li onClick={() => props.onRouteChange('home')}><a href='#'>Search</a></li>
        <li onClick={() => props.onRouteChange('deck')}><a href='#'>Deck</a></li>
      </ul>
      
    </div>
  )
};

export default Navigation;