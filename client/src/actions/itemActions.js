import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_ITEMS_FAIL} from './types';


export const getItems = () => dispatch =>
{
    axios.get('/api/items')
    .then(res =>
      dispatch({
        type:GET_ITEMS,
        payload: res.data
      }))
      .catch(console.log('deu ruim'))
      //catch block
};

export const deleteItem = id => dispatch =>
{
  axios.delete(`/api/items/${id}`)
  .then(res =>
    dispatch({
      type:DELETE_ITEM,
      payload:id
  }))
}

export const addItem = item => dispatch =>
{
  axios.post('./api/items', item)
  .then(res =>
    dispatch({
      type:ADD_ITEM,
      payload: res.data
    }))
}

export const getItemsError = error =>
({
  type:GET_ITEMS_FAIL,
  error
})
export const setItemsLoading = () =>
{
  return{
    type:ITEMS_LOADING
  }
}
