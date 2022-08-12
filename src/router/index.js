import Vue from 'vue';
import VueRouter from 'vue-router';
import {Signin, Signup, Post, Boards} from '../components';

Vue.use(VueRouter);

export default new VueRouter({
  mode : 'history',
  routes: [
    {
      path : '/signin',
      component : Signin
    },
    {
      path : '/signup',
      component : Signup
    },
    {
      path : `/post`,
      component : Post
    },
    {
      path : '/',
      component : Boards
    }
  ]

});