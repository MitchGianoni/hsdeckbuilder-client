import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchCardsInDeck, addCard } from '../actions/cards-decks';

class CardsInDeck extends Component {

  componentDidMount() {
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

  render() {
    const cards = this.props.cardsInDeck;
    const listItems = cards.map((card) => 
      <li key={card.id}>{card.name}</li>);
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
  currentCard: state.card.currentCard,
  cardsInDeck: state.cardsDecks.cardsInDeck
});

export default connect(mapStateToProps)(CardsInDeck);