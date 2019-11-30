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
      loading: false,
      route: 'home'
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

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render () {
    const { cards, userCards, route } = this.state;
    return (
      <div className='app'>
        <Navigation onRouteChange={this.onRouteChange} />
        { (route === 'home')
          ?
            <div>
              <SearchBox 
                onButtonClick={this.onButtonSubmit} 
                onSearchChange={this.onSearchChange} 
              />
              <CardList 
                cards={cards} 
                onCardClick={this.onCardClick} 
              />
            </div>
          :
            <div>
              <Deck 
                cards={userCards} 
                onCardClick={this.onCardClick} 
                cardSmall={true}
              />
            </div>
        }
      </div>
    );
  }
}

export default App;