import React from 'react'
import AppNav from '../src/components/AppNav';
import * as actions from '../src/actions/types';
import reducer from '../src/reducers/itemReducer';

describe('item Reducer', ()=>
{
  it('should return initial state', ()=>
  {
    expect(reducer(undefined, {}))
    .toEqual({
      items:[],
      loading:false
    })
  });
  it('should handle GET_ITEMS', ()=>
  {
    const startAction = {
      items:'bacon',
      loading:false
    };
    expect(reducer(startAction, actions.GET_ITEMS))
    .toEqual(startAction)
    console.log(reducer(startAction, actions.GET_ITEMS));
  });

  it('should handle ADD_ITEM', ()=>
  {
    const adding =
    {
      items:'bacon'
    }
    expect(reducer(adding, actions.ADD_ITEM))
    .toEqual(adding)
    console.log(reducer(adding, actions.ADD_ITEM));
  });
  it('should handle loading items', ()=>
  {
    const demLoads = {
      items: [],
      loading:true
    };
    expect(reducer(demLoads, actions.ITEMS_LOADING))
    .toEqual(demLoads);
    console.log(reducer(demLoads, actions.ITEMS_LOADING));
  });
});
