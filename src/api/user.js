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


export default {
  /**
   * 로그인
   * @param {string} userId
   * @param {string} userPassword
   * @returns
   */
  signin: async (userId, userPassword) => {
    const params = {
      user_id: userId,
      user_password: userPassword
    };

    const option = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        "authorizatoin" : "TeStKeYMyFiRsT",
        "refresh" : "ReFrEsH"
      },
    };

    try {
      const { status, data } = await axios.post(`${process.env.VUE_APP_BASE_URL}/user/test`, params, option);
      if (status === 201)
        return { status, data };
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  /**
   * 회원가입
   * @param {Object} user
   * @returns
   */
  signup: async (user) => {
    const params = {
      user_id: user.userId,
      user_password: user.userPassword,
      user_name: user.userName,
      user_nickname: user.userNickname,
      user_phone_number: user.userPhoneNumber
    };

    const option = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const { status, data } = await axios.post(`${process.env.VUE_APP_BASE_URL}/user`, params, option);
      if(status === 201)
        return {status, data};
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};