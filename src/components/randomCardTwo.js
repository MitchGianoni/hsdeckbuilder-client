import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomCard } from '../actions/cards';

class RandomCardTwo extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRandomCard());
  }

  render() {
    //const card = this.props.cards.length > 0 ? this.props.cards[Math.floor(Math.random()*this.props.cards.length)]: null;
    const card = this.props.randomCards[1];
    return <section>
      {card && <img className="card" id={card.id} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.data.id}.png`}
        alt={card.data.name} title={card.data.flavor}/>}
    </section>;
  }
}

const mapStateToProps = state => ({
  randomCards: state.card.randomCard
});
export default connect(mapStateToProps)(RandomCardTwo);