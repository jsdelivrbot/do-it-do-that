import axios from 'axios';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
const ROOT_URL = 'http://localhost:3000/v1';

export function fetchProjects() {
  const request = axios.get(`${ROOT_URL}/projects`);
  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}
