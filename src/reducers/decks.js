import * as types from '../actions/decks';

const initialState = {
  decks: [],
  loading: false,
  error: null,
  currentDeck: []
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
  case(types.SET_SELECTED_DECK):
    return Object.assign({}, state, {
      currentDeck: action.deck_id
    });
  case(types.EDIT_DECK_REQUEST):
    return Object.assign({}, state, {
      loading: true
    });
  case(types.EDIT_DECK_SUCCESS):
    return Object.assign({}, state, {
      loading: false,
      error: null, 
      renamingDeck: true
    });
  case(types.REMOVE_DECK_REQUEST):
    return Object.assign({}, state, {
      loading: false,
      error: null
    });
  default:
    return state;
  }
};