import { REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS, REGISTER_LOAD} from '../actions/types';

const initialState =
{
  user:{},
  loading:false
}

export default function (state = initialState, action)
{
  switch (action.type) {
    case REGISTER_FAIL:
    return{
      ...state,
      error:'Error',
      loading:false
    }
    break;

    case REGISTER_SUCCESS:
    return{
      ...state,
      user:[action.payload, ...state.user],
    };
    break;

    case REGISTER_START:
    return{
      ...state,
      loading:true
    }
    break;

    default:
    return state;

  }

}
