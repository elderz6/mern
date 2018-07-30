import axios from 'axios';
import { REGISTER_START, REGISTER_FAIL, REGISTER_SUCCESS} from './types';

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

export const registerFail = errors => {
  return{
    type:REGISTER_FAIL,
    errors
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
  .catch(() =>
  {
    console.log('erro');
  });
};
