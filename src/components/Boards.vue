<template>
  <div>
    <router-link to="/signin">
      <button>sign in</button>
    </router-link>
    <router-link to="/profile">
      <button>profile</button>
    </router-link>
    <button v-on:click="postBoard">post</button>
  </div>
</template>
<script>
import { validate } from '../api/auth/auth';
export default {
  data : () =>({
    pencil : require('../assets/pencil.png')
  }),


  methods : {
    postBoard : async function(){
      const {accessToken, refreshToken} = localStorage;
      
      if(accessToken){
        const expired = await validate(accessToken, refreshToken);
        console.log(expired);
        if(expired)
          this.$router.push('/post'); 
        else{
          alert("토큰이 만료됐습니다. 다시 로그인해주세요.");
          this.$router.push('/signin');
        }
      }
      else
        this.$router.push('/signin');
    },

  }
}
</script>
<style scoped>
  .pencil{
    width: 50px;
    height: 50px;
  }

  button{
    width: 100px;
    height: 40px;
    border-radius : 0.325rem;
    border: 1px solid #222222;
    background-color: #222222;
    color: #f6f6f6;
    font-size : 13pt;
  }

  button:active{
    background-color: #f6f6f6;
    color:#222222;
  }
</style>