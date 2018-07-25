import mockAxios from 'axios';
import thunk from 'redux-thunk'
import * as types from '../src/actions/types';
import * as actions from '../src/actions/itemActions';
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import * as logins from '../src/actions/loginActions'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
describe('Item Actions', ()=>
{
  it('should start to get items', ()=>
  {
    const store = mockStore({});
    store.dispatch(actions.getItems())
    const act = store.getActions();
    console.log(act);
    expect(act).toMatchSnapshot();
  });

  it('should work async', ()=>
  {
    const store = mockStore({})
    store.getState()
    const expected = {type:types.GET_ITEMS}
    store.dispatch(expected, actions.getItems())
    const act = store.getActions();
    console.log(act);
    expect(act).toEqual([expected])
    expect(act).toMatchSnapshot();
  })
});

describe('Login', ()=>
{
  it('should start the login', ()=>{
    expect(logins.logUserStart()).toEqual({
      type:types.LOGIN_START
    });
  });

  it('should fail the login on error', ()=>{
    const error = 404;
    expect(logins.logUserFail(error)).toEqual({
      type:types.LOGIN_FAIL,
      error
    });
  });

  it('should login if everything is right', ()=>{
    expect(logins.logUserSuccess()).toEqual({
      type:types.LOGIN_SUCCESS
    });
  });

  it('should login the user correctly', ()=>{
    
  })
});
