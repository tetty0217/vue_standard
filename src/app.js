import Vue from 'vue/dist/vue.esm.js';
import Hello from './vue/App.vue';
import Ch3 from './vue/Ch3.vue';
import Ch4 from './vue/Ch4.vue';
import Ch5 from './vue/Ch5.vue';

// this component is root component for Ch5
Vue.component('global-component', {
    template: '<p>{{ globalComponentText }}</p>',
    data: () => {
        return {
            globalComponentText: 'Hello Vue.js!'
        }
    },
});

const app = new Vue(Ch5);
app.$mount('#app');
