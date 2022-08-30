import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

export default axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Accept: 'application/json',
  },
  validateStatus: () => true,
});
