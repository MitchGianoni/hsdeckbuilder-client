import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDecks, setSelectedDeck, editDeck, removeDeck } from '../actions/decks';
import { fetchCardsInDeck } from '../actions/cards-decks';
import './deck-list.css';

class DeckList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDecks());
  }

  clickHandler(deck_id) {
    this.props.dispatch(fetchCardsInDeck(deck_id));
    this.props.dispatch(setSelectedDeck(deck_id));
  }

  deleteDeck(deck_id) {
    this.props.dispatch(removeDeck(deck_id));
    this.props.dispatch(fetchDecks());
  }

  renameDeck(deck_id) {
    this.props.dispatch(editDeck(deck_id,'poopadin'));
  }

  render() {
    const decks = this.props.decks;
    const listItems = decks.map((deck) => 
      <li key={deck.id}>{deck.deckName}
        <button onClick={() => this.clickHandler(deck.id)}>Select</button>
        <button onClick={() => this.renameDeck(deck.id)}>Rename</button>
        <button onClick={() => this.deleteDeck(deck.id)}>Delete</button>
      </li>);
    return (
      <div className="deck-list">
        <h2>Decks!</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  decks: state.deck.decks
});

export default connect(mapStateToProps)(DeckList);