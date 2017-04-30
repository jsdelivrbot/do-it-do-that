import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import StepsReducer from './reducer_steps';
import { reducer as formReducer } from 'redux-form';

import { CREATE_STEP } from '../actions/steps';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  steps: StepsReducer,
  form: formReducer.plugin({
    StepsNewForm: (state,action) => {
      switch(action.type) {
        case CREATE_STEP:
        return undefined;
        default:
        return state;
      }
    }
  })
});

export default rootReducer;
