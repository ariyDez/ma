require('./bootstrap');

//components
Vue.component('hands', require('./components/Hands.vue'));
Vue.component('left-hand', require('./components/LeftHand.vue'));
Vue.component('right-hand', require('./components/RightHand.vue'));

Vue.component('one-left', require('./components/hands/left/One.vue'));
Vue.component('two-left', require('./components/hands/left/Two.vue'));
Vue.component('three-left', require('./components/hands/left/Three.vue'));
Vue.component('four-left', require('./components/hands/left/Four.vue'));
Vue.component('five-left', require('./components/hands/left/Five.vue'));
Vue.component('big-one-left', require('./components/hands/left/BigOne.vue'));
Vue.component('big-two-left', require('./components/hands/left/BigTwo.vue'));
Vue.component('big-three-left', require('./components/hands/left/BigThree.vue'));
Vue.component('big-four-left', require('./components/hands/left/BigFour.vue'));
Vue.component('empty-left', require('./components/hands/left/Empty.vue'));

Vue.component('one-right', require('./components/hands/right/One.vue'));
Vue.component('two-right', require('./components/hands/right/Two.vue'));
Vue.component('three-right', require('./components/hands/right/Three.vue'));
Vue.component('four-right', require('./components/hands/right/Four.vue'));
Vue.component('five-right', require('./components/hands/right/Five.vue'));
Vue.component('big-one-right', require('./components/hands/right/BigOne.vue'));
Vue.component('big-two-right', require('./components/hands/right/BigTwo.vue'));
Vue.component('big-three-right', require('./components/hands/right/BigThree.vue'));
Vue.component('big-four-right', require('./components/hands/right/BigFour.vue'));
Vue.component('empty-right', require('./components/hands/right/Empty.vue'));

Vue.component('soroban', require('./components/soroban/Soroban.vue'));
Vue.component('soroban-line', require('./components/soroban/Line.vue'));
Vue.component('soroban-bubble', require('./components/soroban/Bubble.vue'));
Vue.component('soroban-item', require('./components/soroban/SorobanItem.vue'));

Vue.component('result', require('./components/Result.vue'));



import Vue from 'vue'
import router from './router'
import App from './App.vue'

router.beforeEach((to, from, next) => {
   if (to.path !== '/anzan/audio/task') {
       responsiveVoice.cancel();
   }
    next(true);
});

const app = new Vue({
    el: '#app',
    template: '<app></app>',
    components: { App },
    router
});
