import { combineReducers } from 'redux';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE,
} from './actions';

function auth(state = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('id_token'),
  errorMessage: ''
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    default:
      return state;
  }
}

const quotesApp = combineReducers({
  auth
});

export default quotesApp;
