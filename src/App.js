import React, { Component } from 'react';
import CardList from './CardList';
import { data } from './cards.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: data
    }
  }

  render () {
    return (
      <div>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;