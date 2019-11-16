import React from 'react';
import Card from './components/Card';
import { data } from './cards.js';

const App = () => {
  return (
    <div>
      <Card name={data[0].name} image_uri={data[0].normal} />
      <Card name={data[1].name} image_uri={data[1].normal} />
      <Card name={data[2].name} image_uri={data[2].normal} />
      <Card name={data[3].name} image_uri={data[3].normal} />
      <Card name={data[4].name} image_uri={data[4].normal} />
    </div>
  )
}

export default App;