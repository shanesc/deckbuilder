import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
  return (
    <div className='searchBox'>
      <input type='search' placeholder='search for cards' onBlur={props.onSearchChange} />
      <input type='button' value='Go!' onClick={props.onButtonClick} />
    </div>
  );
};

export default SearchBox;