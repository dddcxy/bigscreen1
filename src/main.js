// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import * as echarts from "echarts";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

// mock接口模拟配置
import http from "@/api/config"
import './mock'
Vue.prototype.$http = http

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
