import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions/card';

class Card extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  render() {
    const card = this.props.cards.length > 0 ? this.props.cards[Math.floor(Math.random()*this.props.cards.length)]: null;
    return <div>{card && <img id={card.id} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.data.id}.png`}
      alt={card.data.name} title={card.data.flavor}/>}</div>
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});
export default connect(mapStateToProps)(Card);