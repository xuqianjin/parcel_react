import superagent from 'superagent';
import {getAuthorization} from './helper'

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path,operateId) {
  if(path && operateId) path = path.replace(/\{[^\}]+\}/g,operateId)
  if (/^https?:\/\//.test(path)) {
    return path;
  } else {
    return path[0] !== '/' ? '/' + path : path;
  }
}

let request = {}
methods.forEach(method => {
  request[method] = (path, {
    operateId,
    headers,
    params,
    data,
    fields,
    files,
    query
  } = {}) => new Promise((resolve, reject) => {
    const _request = superagent[method](formatUrl(path,operateId));
    if (headers) {
      if(headers.Authorization) headers.Authorization = getAuthorization(headers.Authorization)
      _request.set(Object.assign({
        'content-type': 'application/json',
        'accept': 'application/json',
      }, headers || {}));
    }
    params = params || {}
    if (query) {
      params.q = JSON.stringify(query)
    }
    _request.query(params);

    if (data) {
      _request.send(data);
    }

    if (fields) {
      Object.keys(fields).forEach(key => {
        _request.field(key, fields[key]);
      })
    }

    if (Array.isArray(files) && files.length > 0) {
      files.forEach((file) => {
        _request.attach('file', file, file.name);
      })
    }

    _request.end((err, {
      body
    } = {}) => err ? reject(body || err) : resolve(body));
  })

});

export default request;
