import { createApp } from 'vue';
import App from './App.vue';
import './assets/app.scss';
import { svgSpritePlugin } from 'vue-svg-sprite';

createApp(App)
    .use(svgSpritePlugin, {
        url: require('./assets/svg/sprite.svg'),
    })
    .mount('#app');
