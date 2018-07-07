import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.co/api/'
});

const listPlanet = (argId) => {
  return api.get(`planets/${argId}/`);
}

export default listPlanet;

