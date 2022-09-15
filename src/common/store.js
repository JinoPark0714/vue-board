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

    setIsChecked(state, payload){
      if(payload.value === true || payload.value === false)
        state.isChecked = payload.value;
      else 
        throw new Error("잘못된 값입니다.");
    },
  }

});