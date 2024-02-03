import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../styles/main.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';

// Import Swiper components
import SwiperCore, { Pagination, Navigation, EffectCoverflow, EffectFade, EffectCube } from 'swiper';

// Install Swiper components
SwiperCore.use([Pagination, Navigation, EffectCoverflow, EffectFade, EffectCube]);

// Create and mount the Vue app
createApp(App)
  .use(router)
  .mount('#app');