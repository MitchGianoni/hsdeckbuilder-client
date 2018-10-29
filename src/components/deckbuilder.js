import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from './card-list';
import DeckList from './deck-list';
import CurrentDeck from './current-deck';
import requiresLogin from './requires-login';
import './styles/deckbuilder.css';

class Deckbuilder extends Component {

  render() {
    return (<div className="deckbuilder">
      <div className="grid-container">
        <CurrentDeck className="current-deck" />
        <DeckList className="deck-list" />
        <CardList className="card-list" />
      </div>
    </div>);
  }
}

const mapStateToProps = state => ({
  cardList: state.card.cards,
  deckList: state.deck.decks
});

export default requiresLogin()(connect(mapStateToProps)(Deckbuilder));