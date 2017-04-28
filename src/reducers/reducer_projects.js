import { FETCH_PROJECTS } from '../actions/index';

const INIT_STATE = {collection: [], selected: null};

export default function(state = INIT_STATE, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
    return {...state, collection: action.payload.data };
    default:
    return state;
  }
}
