import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

//Route configuration
import Home from "@/pages/Homepage.vue";
import DataFilterPage from "@/pages/DataFilterPage.vue";
import DemoPage from "@/pages/DemoPage.vue";

export default new Router({
  mode: "history",
  routes: [{
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/datafilter",
    component: DataFilterPage
  },
  {
    path: "/demo",
    component: DemoPage
  }
  ]
})
