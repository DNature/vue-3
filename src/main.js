import Vue from 'vue';
import App from './App.vue';
import gql from 'graphql-tag';

import { apolloProvider } from './vue-apollo';

import './style/tailwind.css';

window.gql = gql;

Vue.config.productionTip = false;
Vue.config.devtools = true;

window.Vue = Vue;

const app = new Vue({
  apolloProvider,
  ...App
});

app.$mount('#app');
