import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/weather',
        name: 'Weather',
        component: Weather
    },
      {
        path: '/search/:id',
        name: 'Search',
        component: Weather
    }


  ]
})
