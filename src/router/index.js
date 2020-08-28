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
// 重复点击同一个路由解决
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}