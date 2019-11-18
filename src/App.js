import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      userCards: [],
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
      .catch(err => console.log(err, 'error searching for cards'))
    }
  }

  onCardClick = (cardObj) => {
    // const state = this.state.userCards.concat(cardObj);
    // this.setState({userCards: state});
    this.setState({userCards: [...this.state.userCards, cardObj]});
  }

  render () {
    return (
      <div>
        <SearchBox 
          onButtonClick={this.onButtonSubmit} 
          onSearchChange={this.onSearchChange} 
        />
        <CardList cards={this.state.userCards} />
        <CardList cards={this.state.cards} onCardClick={this.onCardClick} />
      </div>
    );
  }
}

export default App;