import * as actionTypes from './actionTypes';
import axios from 'axios';
import {Process as process} from "node/process";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken,
    userId
  }
};

export const authFailure = (error) => {
  return {
    type: actionTypes.AUTH_FAILURE,
    error: error
  }
};

export const auth = (email, pass, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password: pass,
      returnSecureToken: true
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env['FIREBASE_KEY']}`;
    if(!isSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env['FIREBASE_KEY']}`;
    }

    axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch(err => {
        console.log('Error while authenticating: ', err);
        dispatch(authFailure(err));
      })
  }
};
