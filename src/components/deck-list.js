import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDecks, setSelectedDeck } from '../actions/decks';

class DeckList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDecks());
  }

  clickHandler(deck_id) {
    this.props.dispatch(setSelectedDeck(deck_id));
  }

  render() {
    const decks = this.props.decks;
    const listItems = decks.map((deck) => 
      <li key={deck.id} onClick={() => this.clickHandler(deck.id)}>{deck.deckName} </li>);
    return (
      <div>
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