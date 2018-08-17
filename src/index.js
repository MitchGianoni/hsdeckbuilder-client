import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadAuthToken } from './utils/local-storage';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { authReducer } from './reducers/auth';
import { cardReducer } from './reducers/cards';
import { cardsInDeckReducer } from './reducers/cards-decks';
import { deckReducer } from './reducers/decks';
import {reducer as formReducer} from 'redux-form';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mainReducer = combineReducers({auth: authReducer, card: cardReducer, cardsDecks: cardsInDeckReducer, deck: deckReducer, form: formReducer });

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)));
//store.subscribe(() => console.log(store.getState()));

// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
