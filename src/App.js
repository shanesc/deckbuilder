import React from 'react';
import CardList from './CardList';
import { data } from './cards.js';

const App = () => {
  return (
    <div>
      <CardList cards={data} />
    </div>
  )
}

export default App;