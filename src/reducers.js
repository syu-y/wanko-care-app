import { combineReducers } from 'redux';
import firebase from './components/firebase'

export const LOGIN_AUTH_STATUS = 'USER/CHANGE_AUTH_STATUS';
export const LOGOUT_AUTH_STATUS = 'USER/CHANGE_AUTH_STATUS';

export function loginAuthStatus( user ){
  return {
    type: LOGIN_AUTH_STATUS,
    user,
  }
};

export function logoutAuthStatus( user ){
  return {
    type: LOGOUT_AUTH_STATUS,
    user,
  }
};

const initialState = {
  loginUser: firebase.auth().currentUser,
};

export function auth(state = { loginUser: initialState}, action){
    switch(action.type) {
      case LOGIN_AUTH_STATUS:
        return {
          ...state,
          loginUser: action.user,
        }
      case LOGOUT_AUTH_STATUS:
        return {
          ...state,
          loginUser: null,
        }
      default:
        return state;
    }
}

export default combineReducers({
  auth
});
