import {BASE_URL} from '../config';
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
export const fetchCards = () => dispatch => {
  console.log('fetch cards');
  dispatch(fetchCardsRequest());
  return fetch(`${BASE_URL}/api/cards`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchCardsSuccess(data));
    })
    .catch(err => {
      dispatch(fetchCardsError(err));
    });
};