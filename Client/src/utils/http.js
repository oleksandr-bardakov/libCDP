import axios from 'axios';
import config from '../config.json';
import history from './history';

const apiRoot = `${config.host}`;

export default function http({
  method, url, data, params,
}) {
  const token = localStorage.getItem('AuthToken');
  const config = {
    method: method.toLowerCase(),
    url: apiRoot + url,
    params,
  };
  if (data) config['data'] = data;

  if (token) {
    config['headers'] = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'max-age',
      'Authorization': 'Bearer ' + token,
    };
  }

  return axios(config)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        history.push('/');
      }
      return error;
    });
}
