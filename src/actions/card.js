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
  console.log('fetch cards');
  dispatch(fetchCardsRequest());
  return fetch(`${API_BASE_URL}/api/cards`, {
    method: 'GET', headers: {Authorization: `Bearer ${authToken}`}})
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchCardsSuccess(data)))
    .catch(err => {dispatch(fetchCardsError(err));
    });
};