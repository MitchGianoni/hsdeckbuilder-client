import * as types from '../actions/cards-decks';
const initialState = {
  currentDeck: null,
  cardsInDeck: [],
  loading: false,
  error: null
};

export const cardsInDeckReducer = (state = initialState, action) => {
  switch(action.type) {
  case(types.FETCH_CARDSINDECK_REQUEST):
    return Object.assign({}, state, {
      loading: true
    });
  case(types.FETCH_CARDSINDECK_SUCCESS):
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cardsInDeck: action.cardsInDeck
    });
  case(types.FETCH_CARDSINDECK_ERROR):
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  case(types.ADD_CARD_TO_DECK):
    return Object.assign({}, state, {
      cardsInDeck: [...state.cardsInDeck, action.card]
    });
  default:
    return state;
  }
};