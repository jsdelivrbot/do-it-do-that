import { CREATE_STEP, FETCH_STEPS, DELETE_STEP, UPDATE_STEP } from '../actions/steps';
import { findIndex } from 'lodash';

const INIT_STATE = {collection: [], selected: null};

export default function(state = INIT_STATE, action) {
  switch(action.type) {
    case CREATE_STEP:
    return {...state, collection: state.collection.concat([action.payload.data])}
    case DELETE_STEP:
    const index = findIndex(state.collection, ['id', action.id]);
    return {...state, collection: [...state.collection.slice(0,index),...state.collection.slice(index+1)]}
    case UPDATE_STEP:
    const step_index = findIndex(state.collection, ['id', action.payload.data.id]);
    return {...state, collection: [...state.collection.slice(0,step_index),action.payload.data,...state.collection.slice(step_index+1)]}
    case FETCH_STEPS:
    return {...state, collection: action.payload.data };
    default:
    return state;
  }
}
