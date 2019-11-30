import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Deck from './components/Deck';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      userCards: [],
      searchfield: '',
      loading: false
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  onButtonSubmit = () => {
    if (this.state.searchfield) {
      this.setState({loading: true});
      fetch(`https://api.scryfall.com/cards/search?q=${this.state.searchfield}`)
      .then(resp => resp.json())
      .then(cardList => {
        this.setState({cards: cardList.data});
        this.setState({loading: false});
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
    const { cards, userCards, loading } = this.state;
    return (
      <div>
        <Navigation />
        <SearchBox 
          onButtonClick={this.onButtonSubmit} 
          onSearchChange={this.onSearchChange} 
        />
        { (loading === true)
          ? <h1>....loading....</h1>
          : 
          <div>
            <Deck 
              cards={userCards} 
              onCardClick={this.onCardClick} 
              cardSmall={true}
            />
            <CardList 
              cards={cards} 
              onCardClick={this.onCardClick} 
            />
          </div>
        }
      </div>
    );
  }
}

export default App;