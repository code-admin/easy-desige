// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Mycomponents from "../index.js";
import App from './App';
import routers from './router';
import iView from 'iview';
import gojs from 'gojs';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

Vue.use(Mycomponents);

Vue.config.productionTip = false

Vue.prototype.$gojs = gojs;

const router = new VueRouter({
    routes: routers
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
