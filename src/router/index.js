import Vue from 'vue';
import VueRouter from 'vue-router';
import {Signin, Signup, Post} from '../components';

Vue.use(VueRouter);

export default new VueRouter({
  mode : 'history',
  routes: [
    {
      path : '/',
      component : Signin
    },
    {
      path : '/signup',
      component : Signup
    },
    {
      path : `/post`,
      component : Post
    }
  ]

});