import React, { Component } from 'react';
import CardList from './components/CardList';
import { data } from './cards.js';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  onButtonSubmit = () => {
    if (this.state.searchfield) {
      fetch(`https://api.scryfall.com/cards/search?q=${this.state.searchfield}`)
      .then(resp => resp.json())
      .then(cardList => {
        this.setState({cards: cardList.data});
      })
      .then(console.log(this.state.cards));
    }
  }

  render () {
    return (
      <div>
        <SearchBox onButtonClick={this.onButtonSubmit} onSearchChange={this.onSearchChange} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;