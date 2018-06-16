import Vue from 'vue/dist/vue.esm.js';
import Hello from './vue/App.vue';
import Ch3 from './vue/Ch3.vue';
import Ch4 from './vue/Ch4.vue';
import Ch5 from './vue/Ch5.vue';
import Ch6 from './vue/Ch6.vue';

// this component is root component for Ch5
Vue.component('global-component', {
    template: '<p>{{ globalComponentText }}</p>',
    data: () => {
        return {
            globalComponentText: 'Hello Vue.js!'
        }
    },
});

const app = new Vue(Ch6);
app.$mount('#app');

