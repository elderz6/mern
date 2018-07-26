import axios from 'axios';
import { REGISTER_START, REGISTER_LOAD, REGISTER_FAIL, REGISTER_SUCCESS} from './types';

export const registerStart = () => {
  return {
    type: REGISTER_START
  }
};

export const registerSuccess = () => {
  return{
    type:REGISTER_SUCCESS
  }
};

export const registerFail = error => {
  return{
    type:REGISTER_FAIL,
    error
  }
};

export const registerUser = user => dispatch =>
{
  axios.post('./api/users', user)
  .then(res =>
    dispatch({
      type:REGISTER_SUCCESS,
      payload:res.data
  }))
  .catch(console.log('deu ruim'));
};
