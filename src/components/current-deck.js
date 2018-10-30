import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchCardsInDeck, addCard, removeCard } from '../actions/cards-decks';
import './styles/current-deck.css';

class CurrentDeck extends Component {

  handleSubmit() {
    if (this.props.currentCard !== undefined) {
      const selectedCard = this.props.cards.filter(card => {
        return card.id === this.props.currentCard;
      });
      const rarity = selectedCard[0].data.rarity;
      const card = { card_id: this.props.currentCard, rarity: rarity };
      this.props.dispatch(addCard(card));
    } else {
      alert('Please select a card');
    }
  }

  removeCard(card) {
    const thisCard = this.props.cardsInDeck.find(cardInDeck => cardInDeck.card_id === card.id );
    this.props.dispatch(removeCard(thisCard.id))
      .then(() => {this.props.dispatch(fetchCardsInDeck(this.props.currentDeck));});
  }

  render() {
    const current = this.props.cardsInDeck;
    const listItems = current.map((card, i) => { 
      const card_obj = this.props.cards.find(_card => {
        return _card.id === card.card_id;
      });
      return (<li key={i}>{card_obj.name}        
        <button value={card_obj} onClick={() => this.removeCard(card_obj)}>Remove</button>
      </li>);
    });
    let deckname;
    if (this.props.currentDeck > 0) {
      const displayDeck = this.props.decks.find(_deck => {
        return _deck.id === this.props.currentDeck;
      });
      if (!displayDeck) {
        deckname = 'Select a Deck';
      } else {
        deckname = displayDeck.deckName;
      }
    } 
    return (
      <section id="current-deck" className="current-deck">
        <p>Select a Deck and a Card, then click Add Card to add it to your deck!</p>
        <h4>Current Deck: {deckname}</h4>
        <ul>{listItems}</ul>
        <button onClick={() => this.handleSubmit()}>Add Card</button>
      </section>
    );
  }
}

// when you click on a deck , dispatch an action with deck id that sets current deck in the state, when its in the state pull it into the component using
// mapstate to props

const mapStateToProps = state => ({
  cards: state.card.cards,
  decks: state.deck.decks,
  currentCard: state.card.currentCard,
  currentDeck: state.deck.currentDeck,
  cardsInDeck: state.cardsDecks.cardsInDeck
});

export default connect(mapStateToProps)(CurrentDeck);