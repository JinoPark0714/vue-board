import axios from 'axios';
import { AUTH_URL, VERIFICATION_URL } from '../url';
import { BadRequestException, UnauthorizedException } from '../../error/error';
import 'regenerator-runtime/runtime';

export default {
  validate : async (token) => {
    const option = {
      headers : {
        "Content-Type" : "applicatoin/json",
        "authorization" : token
      }
    };
    try {
      const {status, data} = await axios.post(VERIFICATION_URL, null, option);
      return {status, data};
    } catch (error) {
      throw new UnauthorizedException("Unauthorized");
    }
  }
};