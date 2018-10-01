import React, {Component} from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  state = {
    expanded: false
  }

  expandedCard() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  onClick(id) {
    this.expandedCard();
    this.props.clickHandler(id);
  }

  render() {
    const {card} = this.props;
    const fullCard = this.props.cards.find(_card => _card.id === card.id);
    const toRender = this.state.expanded
      ? <li onClick={() => this.onClick(card.id)}><img id={fullCard.id} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${fullCard.id}.png`}
          alt={fullCard.data.name} title={fullCard.data.flavor}/><p>{card.name}</p></li>
      : <li onClick={() => this.onClick(card.id)}>{card.name}</li>;
    return toRender;
    //<div> {card && } </div>;
  }
}

const mapStateToProps = state => ({
  cards: state.card.cards
});

export default connect(mapStateToProps)(Card);