import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, setSelectedCard } from '../actions/cards';
import Card from './card';
import './styles/card-list.css';
import './styles/float-grid.css';

class CardList extends Component {
  state = {
   start: 0,
   end: 15 
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
        start: this.state.start + 15,
        end: this.state.end + 15
      })
    }
  }

  prevHandler() {
    if (this.state.start > 9){
      this.setState({
        start: this.state.start - 15,
        end: this.state.end - 15
      })
    }
  }

  render() {
    const cards = this.props.cards;
    const {start, end} = this.state;
    const listItems = cards.slice(start, end).map((card) => <Card key={card.id} clickHandler={this.clickHandler.bind(this)} card={card} />);

    return (
      <section id="card-list" className="card-list row">
        <h2 className="col-12">Cards!</h2>
        <ul className="col-12">{listItems}</ul>
        <button onClick={this.prevHandler.bind(this)}>Prev 15</button>
        <button onClick={this.nextHandler.bind(this)}>Next 15</button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card.cards
});

export default connect(mapStateToProps)(CardList);