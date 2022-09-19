import axios from 'axios';
import { BOARD_URL } from '../url';
import 'regenerator-runtime/runtime';


export async function postBoard(access, refresh, board) {
  const params = board;

  const option = {
    headers : {
      "Content-Type": "application/json",
      "authorization": `Bearer ${access}`,
      "refresh": `Bearer ${refresh}`
    }
  };

  const { status, data } = await axios.post(BOARD_URL, params, option);
  return { status, data };
}