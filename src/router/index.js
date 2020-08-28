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

// 路由更改时修改页面标题
router.afterEach((to) => {   
    document.title = to.meta.pageTitle || to.meta.title;
});
// 重复点击同一个路由解决
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}