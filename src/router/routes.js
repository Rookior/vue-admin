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
    name: 'about',
    meta: {
        title: '关于'
    },
    component: () => import('../pages/About.vue')
};
export const page404 = {
    path: '/*',
    name: 'page404',
    component: () => import('../pages/page404.vue')
};
// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    About,
    Home,
    page404
];