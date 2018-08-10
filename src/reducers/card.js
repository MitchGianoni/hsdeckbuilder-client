import * as types from '../actions/card';

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
  default:
    return state;
  }
};