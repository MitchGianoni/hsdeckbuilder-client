import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDecks, setSelectedDeck, removeDeck } from '../actions/decks';
import { fetchCardsInDeck } from '../actions/cards-decks';
import './styles/deck-list.css';
import './styles/float-grid.css';

class DeckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renamingDeck: null
      //assign the id of the deck to be renamed to this state
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchDecks());
  }

  clickHandler(deck_id) {
    this.props.dispatch(fetchCardsInDeck(deck_id));
    this.props.dispatch(setSelectedDeck(deck_id));
  }

  deleteDeck(deck_id) {
    this.props.dispatch(removeDeck(deck_id));
    // put fetch deck inside response of remove deck action
  }

  // need to fix renaming decks
  // renameDeck(deck_id) {
  //   this.props.dispatch(editDeck(deck_id,'placeholder'));
  //   this.setState({renamingDeck: deck_id});
  //   console.log('bacon:', this.state.renamingDeck);
  // }
  // <button onClick={() => this.renameDeck(deck.id)}>Rename</button>
  
  renameDeck(deck_id) {
    alert('Feature in development!');
  }


  render() {
    const decks = this.props.decks;
    const listItems = decks.map((deck) => 
      <li key={deck.id}>{this.state.renamingDeck === deck.id ? <input type="text" defaultValue={deck.deckName}></input> : deck.deckName}
        <button onClick={() => this.clickHandler(deck.id)}>Select</button>
        <button onClick={() => this.deleteDeck(deck.id)}>Delete</button>
      </li>);
    return (
      <section id="deck-list" className="deck-list row">
        <h2 className="col-12">Decks!</h2>
        <h4 className="col-12">Click on deckbuilder to add cards</h4>
        <h4 className="col-12">Click on dashboard to create more decks</h4>
        <ul className="col-12">{listItems}</ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  decks: state.deck.decks
});

export default connect(mapStateToProps)(DeckList);