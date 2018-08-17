import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, setSelectedCard } from '../actions/cards';

class CardList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  clickHandler(card_id) {
    this.props.dispatch(setSelectedCard(card_id));
  }

  //        <img className="card" id={card.id} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.data.id}.png`}
  //        alt={card.data.name} title={card.data.flavor}/>

  render() {
    const cards = this.props.cards;
    const listItems = cards.map((card) => 
      <li key={card.id} onClick={() => this.clickHandler(card.id)}>{card.name}
      </li>);
    return (
      <div>
        <h2>Cards!</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card.cards
});

export default connect(mapStateToProps)(CardList);