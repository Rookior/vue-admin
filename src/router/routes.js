export const Home = {
    path: '/',
    name: 'home',
    meta: {
        title: '主页'
    },
    component: () => import('../pages/Home.vue')
};
export const About = {
    path: '/about',
    redirect: '/about/profile',
    name: 'about',
    meta: {
        title: '关于'
    },
    component: () => import('../pages/About.vue'),
    children: [
        {
          // 当 /about/profile 匹配成功，
          // AboutProfile 会被渲染在 About 的 <router-view> 中
          path: '/about/profile',
          name:'profile',
          meta: {
            title: '关于profile',
            },
          component: () => import('../pages/AboutProfile.vue')
        },
        {
          // 当 /about/posts 匹配成功
          // AboutPosts 会被渲染在 About 的 <router-view> 中
          path: '/about/posts',
          name:'posts',
          meta: {
            title: '关于posts',
            },
          component: () => import('../pages/AboutPosts.vue')
        }
      ]
};
export const Predoct = {
    path: '/predoct',
    redirect: '/predoct/foods',
    name: 'predoct',
    meta: {
        title: '产品'
    },
    component: () => import('../pages/Predoct.vue'),
    children: [
        {
          // 当 /about/profile 匹配成功，
          // AboutProfile 会被渲染在 About 的 <router-view> 中
          path: '/predoct/foods',
          name:'foods',
          meta: {
            title: '食品',
            },
          component: () => import('../pages/PredoctFoods.vue')
        },
        {
          // 当 /about/posts 匹配成功
          // AboutPosts 会被渲染在 About 的 <router-view> 中
          path: '/predoct/water',
          name:'water',
          meta: {
            title: '饮用水',
            },
          component: () => import('../pages/PredoctWater.vue')
        }
      ]
};
export const page404 = {
    path: '/*',
    name: 'page404',
    hidden: true,
    component: () => import('../pages/page404.vue')
};
// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    About,
    Home,
    Predoct,
    page404
];