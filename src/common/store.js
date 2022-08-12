import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
      user_id : '',
      user_password : '',
      user_name : '',
      user_nickname : '',
      user_phone_number : ''
  }

});