// in myRestProvider.js
import { stringify } from 'query-string';
import { GET_LIST, GET_ONE, CREATE, UPDATE, DELETE } from 'react-admin';

const apiUrl = 'http://localhost:8000/api';

/**
 * Maps react-admin queries to my REST API
 *
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} params Request parameters. Depends on the request type
 * @returns {Promise} the Promise for a data response
 */
export default (type, resource, params) => {
  let url = '';
  let options = {};

  switch (type) {
    case GET_LIST:
      url = `${apiUrl}/${resource}`;
      break;
    case GET_ONE:
      url = `${apiUrl}/${resource}/${params.id}`;
      break;
    case CREATE:
      url = `${apiUrl}/${resource}`;
      options = { method: 'POST', body: JSON.stringify(params.data) };
      break;
    case UPDATE:
      url = `${apiUrl}/${resource}/${params.id}/update`;
      options = { method: 'POST', body: JSON.stringify(params.data) };
      break;
    case DELETE:
      url = `${apiUrl}/${resource}/${params.id}/delete`;
      options = { method: 'POST' };
  }

  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(json => {
      switch (type) {
        case GET_LIST:
          return {
            data: json,
            total: json.length,
          };
        case CREATE:
        case UPDATE:
          return { data: json, id: json.id };
        default:
          return { data: json };
      }
    });
};
