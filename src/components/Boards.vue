<template>
  <div>
    <router-link to="signin">
      <button>sign in</button>
    </router-link>
    <button v-on:click="postBoard">글 쓰기</button>
  </div>
</template>
<script>
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
    }
  }
}
</script>
<style scoped>
  
</style>