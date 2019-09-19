import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Route configuration
import Home from "@/pages/Homepage.vue";

export default new Router({
  mode: "history",
  routes: [{
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    name: "home2",
    component: Home
  }
  ]
})
