import thunk from 'redux-thunk'
import * as types from '../src/actions/types';
import * as actions from '../src/actions/itemActions';
import configureMockStore from 'redux-mock-store'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('Item Actions', ()=>
{
  it('should get items', ()=>
  {
    const store = mockStore({});
    store.dispatch(actions.getItems())

    const act = store.getActions();
    expect(act).toMatchSnapshot();
    console.log(act);
  });
})
