<template>
  <div class="h-screen grid grid-cols-4 gap-2 content-center">
    <div></div>
    <div class="col-span-3 p-20 ml-16 relative">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="(item, index) in products" :key="index">
          <div class="w-96 h-80 bg-white/50 rounded-lg p-8 flex flex-col justify-between">
            <h2 class="text-6xl font-bold">{{ item.name }}</h2>
            <h1 class="text-6xl font-bold text-primary text-animation">{{ item.description }}</h1>
          </div>
        </swiper-slide>
      </swiper>
      <button class="bg-primary hover:bg-white text-white hover:text-primary font-bold px-6 py-3 rounded-full absolute right-10 top-52" @click="nextSlide">
        <i class="fas fa-caret-right text-5xl"></i>
      </button>
    </div>
  </div>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import 'swiper/css'
  import 'swiper/css/pagination'
export default {
  name: "OurProduct",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
      products: [
        { name: "We Solve Your", description: "PROBLEM" },
        { name: "We Know You Have", description: "PROBLEM" },
      ],
    };
  },
  methods: {
    nextSlide() {
      const swiper = document.querySelector('.swiper').swiper;
      swiper.slideNext();
    }
  }
};
</script>

<style scoped>
.text-animation {
  animation: colorChange 2s linear infinite;
}

@keyframes colorChange {
  0% {
    color: white;
  }
  50% {
    color: #FFB800; /* Primary color */
  }
  100% {
    color: white;
  }
}
</style>