import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './src/app';
Vue.use(iView);
new Vue({
    el:"#app",
    components:{
        App
    }
})