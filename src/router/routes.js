
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/MarvelScreen') },
      { path: '/marvel', component: () => import('pages/MarvelScreen') },
      { path: '/dc', component: () => import('pages/DcScreen') },
      { path: '/search', component: () => import('pages/SearchScreen') },
      { path: '/hero/:heroId', component: () => import('../components/hero/HeroScreen') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
