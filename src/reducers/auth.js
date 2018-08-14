import * as types from '../actions/auth';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null
};

export const authReducer = (state=initialState, action) => {
  switch (action.type) {
  case(types.SET_AUTH_TOKEN):
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  case(types.CLEAR_AUTH):
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    });
  case(types.AUTH_REQUEST):
    return Object.assign({}, state, {
      loading: true,
      error: null
    }); 
  case(types.AUTH_SUCCESS): 
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    });
  case(types.AUTH_ERROR):
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  default:
    return state;
  }
};
