import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import StepsReducer from './reducer_steps';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  steps: StepsReducer,
  form: formReducer
});

export default rootReducer;
