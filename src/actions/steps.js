import axios from 'axios';

import { ROOT_URL } from './index';

export const FETCH_STEPS = 'FETCH_STEPS';
export const CREATE_STEP = 'CREATE_STEP';
export const DELETE_STEP = 'DELETE_STEP';
export const UPDATE_STEP = 'UPDATE_STEP';

export function fetchSteps(project_id) {
  const request = axios.get(`${ROOT_URL}/projects/${project_id}/steps`);
  return {
    type: FETCH_STEPS,
    payload: request
  };
}

export function createStep(project_id, values) {
  const request = axios.post(`${ROOT_URL}/projects/${project_id}/steps`, {project_step: values});
  return {
    type: CREATE_STEP,
    payload: request
  };
}

export function deleteStep(project_id, id) {
  const request = axios.delete(`${ROOT_URL}/projects/${project_id}/steps/${id}`);
  return {
    type: DELETE_STEP,
    id: id
  };
}

export function updateStep(project_id, id, values) {
  const req = axios.patch(`${ROOT_URL}/projects/${project_id}/steps/${id}`, {project_step: values});
  return {
    type: UPDATE_STEP,
    payload: req
  };
}
