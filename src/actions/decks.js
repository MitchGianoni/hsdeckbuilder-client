import { SubmissionError } from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils/normalize-response-errors';

export const FETCH_DECKS_REQUEST = 'FETCH_DECKS_REQUEST';
export const fetchDecksRequest = () => ({
  type: FETCH_DECKS_REQUEST
});
export const FETCH_DECKS_SUCCESS = 'FETCH_DECKS_SUCCESS';
export const fetchDecksSuccess = (decks) => ({
  type: FETCH_DECKS_SUCCESS,
  decks
});
export const FETCH_DECKS_ERROR = 'FETCH_DECKS_ERROR';
export const fetchDecksError = (error) => ({
  type: FETCH_DECKS_ERROR,
  error
});

export const FETCH_DECKS = 'FETCH_DECKS';
export const fetchDecks = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchDecksRequest());
  return fetch(`${API_BASE_URL}/decks`, {
    method: 'GET', headers: {Authorization: `Bearer ${authToken}`}})
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchDecksSuccess(data)))
    .catch(err => {dispatch(fetchDecksError(err));
    });
};
export const createDeck = deck => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/decks`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(deck)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => dispatch(fetchDecks()))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        return Promise.reject(new SubmissionError({[location]: message}));
      }
    });
};

export const SET_SELECTED_DECK = 'SET_SELECTED_DECK';
export const setSelectedDeck = (deck_id) => ({
  type: SET_SELECTED_DECK,
  deck_id
});

export const EDIT_DECK_REQUEST = 'EDIT_DECK_REQUEST';
export const editDeckRequest = () => ({
  type: EDIT_DECK_REQUEST
});

export const EDIT_DECK_SUCCESS = 'EDIT_DECK_SUCCESS';
export const editDeckSuccess = (deck_id) => ({
  type: EDIT_DECK_SUCCESS,
  deck_id
});

export const EDIT_DECK = 'EDIT_DECK';
export const editDeck = (deck_id,deckName) => (dispatch, getState) => {
  editDeckRequest();
  console.log(deckName);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/decks/${deck_id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({deckName: deckName})
  })
    .then(() => dispatch(fetchDecks()));
};

export const REMOVE_DECK_REQUEST = 'REMOVE_DECK_REQUEST';
export const removeDeckRequest = () => ({
  type: REMOVE_DECK_REQUEST
});

export const removeDeck = deck_id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log('deleting deck');
  return fetch(`${API_BASE_URL}/decks/${deck_id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${authToken}`
    },
  })
    .then(res => normalizeResponseErrors(res))
    .then(() => dispatch(fetchDecks()))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        return Promise.reject(new SubmissionError({[location]: message}));
      }
    });
};

