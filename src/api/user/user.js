import axios from 'axios';
import { USER_URL, SIGNIN_URL, DUPLICATION_URL } from './url';
import { NotFoundException, BadRequestException } from '../../error/error';
import 'regenerator-runtime/runtime';

function isTrue(parameter){
  return parameter === true;
}

export default {

  /**
   * ID 중복 체크
   * @param {string} userId 
   * @returns 
   */
  checkDuplication: async (userId) => {
    const params = {
      user_id: userId
    };

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {
      const { status, data } = await axios.post(DUPLICATION_URL, params, option);
      return { status, data };
    } catch (error) {
      throw new BadRequestException("Bad Request");
    }
  },

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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { status, data } = await axios.post(SIGNIN_URL, params, option);
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
    if(isTrue(user.isChecked)){
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
        const { status, data } = await axios.post(USER_URL, params, option);
        if (status === 201)
          return { status, data };
      } catch (error) {
        console.log(error);
        throw new BadRequestException("Bad Request");
      }
    }
    alert("ID 중복 여부를 체크하지 않았습니다.");
    return 0;
  }
};