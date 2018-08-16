import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDecks } from '../actions/decks';

class DeckList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDecks());
  }

  render() {
    const decks = this.props.decks;
    const listItems = decks.map((deck) => 
      <li>{deck.deckName}</li>);
    return (
      <ul>{listItems}</ul>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  decks: state.deck.decks
});
export default connect(mapStateToProps)(DeckList);