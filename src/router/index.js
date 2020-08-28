import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
Vue.use(VueRouter);
const RouterConfig = {
    // mode: 'history',
    routes
};
export { RouterConfig };
export const router = new VueRouter(RouterConfig);
router.afterEach((to) => {
    // 更改页面标题
    document.title = to.meta.pageTitle || to.meta.title;
});
// 重复点击同一个路由解决
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}