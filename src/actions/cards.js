import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils/normalize-response-errors';

export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const fetchCardsRequest = () => ({
  type: FETCH_CARDS_REQUEST
});
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const fetchCardsSuccess = (cards) => ({
  type: FETCH_CARDS_SUCCESS,
  cards
});
export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR';
export const fetchCardsError = (error) => ({
  type: FETCH_CARDS_ERROR,
  error
});

export const FETCH_CARDS = 'FETCH_CARDS';
export const fetchCards = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchCardsRequest());
  return fetch(`${API_BASE_URL}/cards`, {
    method: 'GET', headers: {Authorization: `Bearer ${authToken}`}})
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchCardsSuccess(data)))
    .catch(err => {dispatch(fetchCardsError(err));
    });
};

export const SET_SELECTED_CARD = 'SET_SELECTED_CARD';
export const setSelectedCard = (card_id) => ({
  type: SET_SELECTED_CARD,
  card_id
});

export const FETCH_CARD_REQUEST = 'FETCH_CARD_REQUEST';
export const fetchCardRequest = () => ({
  type: FETCH_CARD_REQUEST
});
export const FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS';
export const fetchCardSuccess = (cards) => ({
  type: FETCH_CARD_SUCCESS,
  cards
});
export const FETCH_CARD_ERROR = 'FETCH_CARD_ERROR';
export const fetchCardError = (error) => ({
  type: FETCH_CARD_ERROR,
  error
});

export const FETCH_CARD = 'FETCH_CARD';
export const fetchCard = card_id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchCardsRequest());
  return fetch(`${API_BASE_URL}/cards/${card_id}`, {
    method: 'GET', headers: {Authorization: `Bearer ${authToken}`}})
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchCardSuccess(data)))
    .catch(err => {dispatch(fetchCardError(err));
    });
};

