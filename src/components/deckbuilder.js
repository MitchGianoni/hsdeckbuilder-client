import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from './card-list';
import DeckList from './deck-list';
import CardsInDeck from './cards-in-deck';
import { Link } from 'react-router-dom';

class Deckbuilder extends Component {

  render() {
    return (<div>
    <Link to="/dashboard">Dashboard</Link>
    <CardsInDeck />
    <DeckList />
    <CardList />
    </div>);
  }
  // add list of cards - update so you can click on them
  // instead of currently selected deck, action to put card into deck which makes backend call
  // when that call succeeds, update the deck in state
  // deck view that shows what cards are in the deck
  // left list of decks, right list of cards, below list of cards that are currently in deck
}

const mapStateToProps = state => ({
  cardList: state.card.cards,
  deckList: state.deck.decks
});

export default connect(mapStateToProps)(Deckbuilder);