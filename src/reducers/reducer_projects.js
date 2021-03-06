import { FETCH_PROJECTS, FETCH_PROJECT } from '../actions/projects';

const INIT_STATE = {collection: [], selected: null};

export default function(state = INIT_STATE, action) {
  switch(action.type) {
    case FETCH_PROJECT:
    return {...state, selected: action.payload.data};
    case FETCH_PROJECTS:
    return {...state, collection: action.payload.data };
    default:
    return state;
  }
}
