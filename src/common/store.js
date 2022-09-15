import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state () {
    return{
      userId : '',
      userPassword : '',
      userName : '',
      userNickname : '',
      userPhoneNumber : '',
      isChecked : false
    };
  },
  mutations : {
    setUserId(state, payload){
      state.userId = payload.value;
    },

    setUserPassword(state, payload){
      state.userPassword = payload.value;
    },
    
    setUserName(state, payload){
      state.userName = payload.value;
    },

    setUserNickname(state, payload){
      state.userNickname = payload.value;
    },

    setUserPhoneNumber(state, payload){
      state.userPhoneNumber = payload.value;
    },

  }

});