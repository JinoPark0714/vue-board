<template>
  <div>
    <router-link to="/signin">
      <button>sign in</button>
    </router-link>
    <button v-on:click="postBoard">글 쓰기</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  methods : {
    postBoard : async function(){
      const option = {
        headers : {
          "Content-Type" : "application/json",
        }
      }
      const cookie = this.$cookies.get("accessToken");
      console.log(cookie);
      if(!cookie){
        const result = this.validate(token);
        this.$router.push('/signin');
      }
      else
        this.$router.push('/post');
    },
    
    validate : async function(token) {
      const option = {
        headers : {
          "Content-Type" : "application/json",
        }
      };

      const params = {
        accessToken : token
      };

      try {
        const {data} = await axios.post(`${process.env.VUE_APP_BASE_URL}/user/verify`, params, option);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
}
</script>
<style scoped>
  
</style>