import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from './card-list';
import DeckList from './deck-list';
import CurrentDeck from './current-deck';
import requiresLogin from './requires-login';
import './styles/deckbuilder.css';

class Deckbuilder extends Component {

  render() {
    return (<section className="deckbuilder">
      <section className="grid-container">
        <CurrentDeck className="current-deck" />
        <DeckList className="deck-list" />
        <CardList className="card-list" />
      </section>
    </section>);
  }
}

const mapStateToProps = state => ({
  cardList: state.card.cards,
  deckList: state.deck.decks
});

export default requiresLogin()(connect(mapStateToProps)(Deckbuilder));