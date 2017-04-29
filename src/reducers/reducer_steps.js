import { FETCH_STEPS } from '../actions/steps';

const INIT_STATE = {collection: [], selected: null};

export default function(state = INIT_STATE, action) {
  switch(action.type) {
    case FETCH_STEPS:
    return {...state, collection: action.payload.data };
    default:
    return state;
  }
}
