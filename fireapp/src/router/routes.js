
const routes = [
  {
    path: '/',
    component: () => import('layouts/MapLayout.vue'),
    children: [
      { path: '', component: () => import('pages/2GIS.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/settings',
    component: () => import('layouts/SettingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Settings.vue') }
    ]
  },
  {
    path: '/error',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
