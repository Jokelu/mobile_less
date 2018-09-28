import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: () =>
        import('@/pages/login')
    },
    {
      path: '/home',
      name: 'home',
      meta: [],
      redirect: '/home/javaScript',
      component: () =>
        import('@/pages/home'),
      children: [{
          path: '/home/javaScript',
          name: 'manage',
          meta: ['javaScript'],
          component: () =>
            import('@/pages/manage/javaScript/javaScript')
        },
        {
          path: '/home/java',
          name: 'java',
          meta: ['java'],
          component: () =>
            import('@/pages/manage/java/java')
        },
        {
          path: '/home/vueEdit',
          name: 'vueEdit',
          meta: ['文本编辑'],
          component: () =>
            import('@/pages/vueEdit')
        }
      ]
    },

  ]
})
