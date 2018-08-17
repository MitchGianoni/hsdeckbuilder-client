import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, setSelectedCard } from '../actions/cards';
import Card from './card';

class CardList extends Component {
  state = {
   start: 0,
   end: 10 
  }

  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  clickHandler(card_id) {
    this.props.dispatch(setSelectedCard(card_id)); 
  }

  nextHandler() {
    if (this.state.end < this.props.cards.length - 9 ) {
      this.setState({
        start: this.state.start + 10,
        end: this.state.end + 10
      })
    }
  }

  prevHandler() {
    if (this.state.start > 9){
      this.setState({
        start: this.state.start - 10,
        end: this.state.end - 10
      })
    }
  }

  render() {
    const cards = this.props.cards;
    const {start, end} = this.state;
    const listItems = cards.slice(start, end).map((card) => <Card key={card.id} clickHandler={this.clickHandler.bind(this)} card={card} />);

    return (
      <div>
        <h2>Cards!</h2>
        <ul>{listItems}</ul>
        <button onClick={this.prevHandler.bind(this)}>Prev 10</button>
        <button onClick={this.nextHandler.bind(this)}>Next 10</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card.cards
});

export default connect(mapStateToProps)(CardList);