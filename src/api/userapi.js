import axios from 'axios';
import 'regenerator-runtime/runtime';

function isNull(option) {
  return option === null;
}

function isUndefined(option) {
  return option === undefined;
}

/**
 * 
 * @param {string} method POST, GET, PATCH, PUT ...
 * @param {object} option option, {"abc" : "abc", ...}
 * @returns {object}
 */
function customOption(method, option) {
  if (isNull(option) || isUndefined(option))
    option = {};

  const headers = {
    "Content-Type": "application/json"
  };

  if (Object.keys(option).length !== 0) {
    for (const [key, value] of Object.entries(option))
      headers[key] = value;
  }

  return {
    method: method,
    headers: headers
  };
};

function customParameter(param) {
  if (isNull(param) || isUndefined(param))
    param = {};
  const params = {};
  if (Object.keys(param).length !== 0) {
    for (const [key, value] of Object.entries(param)) {
      params[key] = value;
    }
  }
  return params;
}

// 동적 axios 구현해보기
// 뻘짓
export default async function (url, method, paramObject, option) {
  const requestParams = customParameter(paramObject);
  const requestOption = customOption(method, option);
  const requestUrl = `${process.env.VUE_APP_BASE_URL}${url}`;
  try {
    switch (method) {
      case "GET": {
        const { status, data } = await axios.get(requestUrl, requestOption);
        return { status, data };
      }
      case "POST": {
        const { status, data } = await axios.post(requestUrl, requestParams, requestOption);
        return { status, data };
      }
      case "PATCH": {
        const { status, data } = await axios.patch(requestUrl, requestParams, requestOption);
        return { status, data };
      }
      case "PUT": {
        const { status, data } = await axios.put(requestUrl, requestParams, requestOption);
        return { status, data };
      }
      case "DELETE": {
        const { status, data } = await axios.delete(requestUrl, requestOption);
        return { status, data };
      }
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}