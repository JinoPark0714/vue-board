<template>
  <div>
    <router-link to="/signin">
      <button>sign in</button>
    </router-link>
    <button v-on:click="postBoard">post</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data : () =>({
    pencil : require('../assets/pencil.png')
  }),
  methods : {
    postBoard : async function(){
      const cookie = this.$cookies.get("accessToken");
      console.log(cookie);
      if(cookie){
        const expired = await this.validate(cookie);
        if(expired)        
          this.$router.push('/post'); 
        else{
          alert("토큰이 만료됐습니다. 다시 로그인해주세요.");
          this.$router.push('/signin');
        }
      }
      else
        this.redirect('/signin');
    },
    
    validate : async function(token) {
      const option = {
        headers : {
          "Content-Type" : "application/json",
        }
      };
      const params = {accessToken : token};

      try {
        const {data} = await axios.post(`${process.env.VUE_APP_BASE_URL}/auth/verify`, params, option);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    redirect : function(url){
      this.$router.push(url);
    }
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