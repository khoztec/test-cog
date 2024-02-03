<template>
  <div class="grid grid-cols-3">
    <div class="bg-primary w-full h-72 p-10 px-12">
      <h1 class="text-white text-2xl">
        <router-link to="/">&#x2190; Back</router-link>
      </h1>
    </div>

    <div class="col-span-2 h-screen">
      <transition name="fade" mode="out-in" appear>
        <div :style="{ background: routeBackground }" :key="routeBackground" class="background-container">
          <router-view />
        </div>
      </transition>
    </div>

    <ul class="absolute z-30 ml-20 bottom-36 left-24 text-7xl font-bold space-y-8">
      <li>
        <router-link to="/menu/about" :class="{ 'active-link': isAboutUsRoute }" class="p-8 block">
          <span>About Us</span>
        </router-link>
      </li>
      <li>
        <router-link to="/menu/product" :class="{ 'active-link': isProductRoute }" class="p-8 block">
          <span>Our Product</span>
        </router-link>
      </li>
      <li>
        <router-link to="/menu/contact" :class="{ 'active-link': isContactUsRoute }" class="p-8 block">
          <span>Contact Us</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuPage",
  computed: {
    isAboutUsRoute() {
      return this.$route.matched.some(
        (record) => record.path === "/menu/about"
      );
    },
    isProductRoute() {
      return this.$route.matched.some(
        (record) => record.path === "/menu/product"
      );
    },
    isContactUsRoute() {
      return this.$route.matched.some(
        (record) => record.path === "/menu/contact"
      );
    },
    routeBackground() {
      const currentRoute = this.$route.matched[this.$route.matched.length - 1];
      return currentRoute.meta.background || 'white';
    },
  },
  methods: {

  },
};
</script>

<style scoped>
.background-container {
  height: 100vh;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}
</style>
