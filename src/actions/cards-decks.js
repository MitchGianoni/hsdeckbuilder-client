import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils/normalize-response-errors';

export const FETCH_CARDSINDECK_REQUEST = 'FETCH_CARDSINDECK_REQUEST';
export const fetchCardsInDeckRequest = () => ({
  type: FETCH_CARDSINDECK_REQUEST
});
export const FETCH_CARDSINDECK_SUCCESS = 'FETCH_CARDSINDECK_SUCCESS';
export const fetchCardsInDeckSuccess = (cardsInDeck) => ({
  type: FETCH_CARDSINDECK_SUCCESS,
  cardsInDeck
});
export const FETCH_CARDSINDECK_ERROR = 'FETCH_CARDSINDECK_ERROR';
export const fetchCardsInDeckError = (error) => ({
  type: FETCH_CARDSINDECK_ERROR,
  error
});

export const FETCH_CARDSINDECK = 'FETCH_CARDSINDECK';
export const fetchCardsInDeck = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const deck_id = getState().deck.currentDeck;
  console.log('fetch cards in deck');
  dispatch(fetchCardsInDeckRequest());
  return fetch(`${API_BASE_URL}/decks/${deck_id}/cards`, {
    method: 'GET', heaers: {Authorization: `Bearer ${authToken}`}})
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchCardsInDeckSuccess(data)))
    .catch(err => {dispatch(fetchCardsInDeckError(err));
    });
};

export const addCard = card => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const currentDeck = getState().deck.currentDeck;
  console.log('adding card to deck..');
  return fetch(`${API_BASE_URL}/decks/${currentDeck}/cards`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(card)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        return Promise.reject(new SubmissionError({[location]: message}));
      }
    });

    // dispatch an action and you get the current state via mapstateto props
};