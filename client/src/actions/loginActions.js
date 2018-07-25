import axios from 'axios';
import {LOGIN_FAIL, LOGIN_LOAD, LOGIN_START, LOGIN_SUCCESS} from './types';

export const logUserStart = () => {
  return {
    type: LOGIN_START
  }
};

export const logUserSuccess = () => {
  return{
    type:LOGIN_SUCCESS
  }
};

export const logUserFail = error => {
  return{
    type:LOGIN_FAIL,
    error
  }
};

export const logUser = () => dispatch =>
{
  axios.post('/api/users');
};
