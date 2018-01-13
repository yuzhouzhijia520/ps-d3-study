import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import iView from 'iview'
import 'iView/dist/styles/iview.css'
import HelloWorld from '@/components/basicExercise/HelloWorld'
import clusterDiagram from '@/components/projectPractice/clusterDiagram/clusterDiagram'
import sankey from '@/components/projectPractice/sankey/sankey'
import bezierCurveTo from '@/components/projectPractice/bezierCurveTo/bezierCurveTo'
import quadraticCurveTo from '@/components/projectPractice/quadraticCurveTo/quadraticCurveTo'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/clusterDiagram',
      name: 'clusterDiagram',
      component: clusterDiagram
    },
    {
      path: '/sankey',
      name: 'sankey',
      component: sankey
    },
    {
      path: '/quadraticCurveTo',
      name: 'quadraticCurveTo',
      component: quadraticCurveTo
    },
    {
      path: '/bezierCurveTo',
      name: 'bezierCurveTo',
      component: bezierCurveTo
    }
  ]
})
