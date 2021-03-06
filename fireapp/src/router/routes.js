
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/map',
    component: () => import('pages/Map.vue'),
    children: [
      { path: '', component: () => import('pages/2GIS.vue') }
    ]
  },
  {
    path: '/error',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
