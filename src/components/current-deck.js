import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchCardsInDeck, addCard } from '../actions/cards-decks';

class CurrentDeck extends Component {

  clickOnDeck() {
    this.props.dispatch(fetchCardsInDeck());
  }

  handleSubmit() {
    const selectedCard = this.props.cards.filter(card => {
      return card.id === this.props.currentCard;
    });
    const rarity = selectedCard[0].data.rarity;
    const card = { card_id: this.props.currentCard, rarity: rarity };
    this.props.dispatch(addCard(card));
  }

  removeCard() {

  }

  render() {
    const current = this.props.cardsInDeck;
    const listItems = current.map((card, i) => { 
      const card_obj = this.props.cards.find(_card => {
        return _card.id === card.card_id;
      });
      return (<li key={i}>{card_obj.name}        
        <button onClick={() => this.removeCard}>Remove</button>
      </li>);
    });
    return (
      <div className="currentDeck">
        <h4>Current Deck</h4>
        <ul>{listItems}</ul>
        <button onClick={() => this.handleSubmit()}>Add Card</button>
      </div>
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