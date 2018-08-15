import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions/card';

class SearchCard extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  // filtered list that will match search type
  // text input 
  // 30 check boxes, each one has name of card
  // list gets built every time you search

  render() {

  }

} 

const mapStateToProps = state => ({
  cards: state.card.cards
});

export default connect(mapStateToProps)(SearchCard);