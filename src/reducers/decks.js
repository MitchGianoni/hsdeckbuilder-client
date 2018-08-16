import * as types from '../actions/decks';

const initialState = {
  decks: [],
  loading: false,
  error: null
};

export const deckReducer = (state = initialState, action) => {
  switch(action.type) {
  case(types.FETCH_DECKS_REQUEST):
    return Object.assign({}, state, {
      loading: true
    });
  case(types.FETCH_DECKS_SUCCESS):
    return Object.assign({}, state, {
      loading: false,
      error: null,
      decks: action.decks
    });
  case(types.FETCH_DECKS_ERROR):
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  default:
    return state;
  }
};