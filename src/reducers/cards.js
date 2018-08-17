import * as types from '../actions/cards';

const initialState = {
  cards: [],
  loading: false,
  error: null
};

export const cardReducer = (state=initialState, action) => {
  switch (action.type) {
  case(types.FETCH_CARDS_REQUEST):
    return Object.assign({}, state, {
      loading: true
    });
  case(types.FETCH_CARDS_SUCCESS):
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cards: action.cards
    });
  case(types.FETCH_CARDS_ERROR):
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  case(types.FETCH_CARD_REQUEST):
    return Object.assign({}, state, {
      loading: true
    });
  case(types.FETCH_CARD_SUCCESS):
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cards: action.singleCard
    });
  case(types.FETCH_CARD_ERROR):
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  case(types.SET_SELECTED_CARD):
    return Object.assign({}, state, {
      currentCard: action.card_id
    });
  default:
    return state;
  }
};