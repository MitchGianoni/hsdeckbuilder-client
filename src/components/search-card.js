import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions/cards';

class SearchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCards: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  //function to do all the searching work on this.props.cards (onChange attribute) of the search input

  // filtered list that will match search type
  // text input 
  // 30 check boxes, each one has name of card
  // list gets built every time you search
  // state - some kind of list that is your current deck
  // make a local component state, within that a list of cards that match search type
  // whenever you type something in the search field, kick start that logic that will 
  // take that search term and map through all the cards and see whcih ones match
  // string.includes or something liek that for every card name in the list

  //

  render() {

  }

} 

const mapStateToProps = state => ({
  cards: state.card.cards
});

export default connect(mapStateToProps)(SearchCard);