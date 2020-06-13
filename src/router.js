// 引入依赖
import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import Home from './views/home/home'
import Top from './views/top/top'
import Technology from './views/technology/technology'
import Finance from './views/finance/finance'
import Detail from './views/detail/detail'

// vue使用vue-router
Vue.use(Router)

// 导出模块给main.js使用
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // routes数组，每一项都是相应的路由配置
  routes: [
    {
      // 重定向到"/home"路由
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        // （默认显示）控制是否显示头部返回箭头，不需要显示需要将showBack设置为false
        showBack: false
      },
      children: [
        {
          path: ':id',
          component: Detail
        }
      ]
    },
    {
      path: '/top',
      name: 'Top',
      component: Top,
      // 子路由配置
      children: [
        {
          path: ':id',
          component: Detail
        }
      ]
    },
    {
      path: '/technology',
      name: 'Technology',
      component: Technology,
      // 子路由配置
      children: [
        {
          path: ':id',
          component: Detail
        }
      ]
    },
    {
      path: '/finance',
      name: 'Finance',
      component: Finance,
      // 子路由配置
      children: [
        {
          path: ':id',
          component: Detail
        }
      ]
    }
  ]
})
