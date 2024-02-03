<template>
  <div class="h-screen flex items-center justify-center relative">
    <transition name="text-enlarge">
      <h1 :class="textClass"
        class="text-primary font-bold transition-transform transform-gpu absolute z-30 ml-20 left-32 top-24 text-9xl">
        We Create
      </h1>
    </transition>

    <div class="flex items-center space-y-4 flex-col justify-center max-h-custom relative">
      <div class="max-w-full h-full overflow-hidden relative">
        <img src="@/assets/image-hero.png" @mouseover="handleImageHover" @mouseout="handleImageOut"
          class="transition-transform duration-500 cursor-pointer object-cover" :class="imageSizeClass" />
      </div>
    </div>
    <transition name="slide-in">
      <div v-show="isHovered" @mouseover="handleTextHover" @mouseout="handleTextOut"
        class="text-primary font-bold text-7xl absolute z-30 bottom-32 left-40 p-12 rounded-lg transition ease-out duration-300 hover:ease-in hover:bg-primary hover:text-white">
        <router-link to="/menu/about">AWESOME THINGS <span class="ml-8 text-7xl">&rarr;</span></router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HeroView",
  data() {
    return {
      isHovered: false,
      isTextHovered: false,
    };
  },
  methods: {
    handleImageHover() {
      this.isHovered = true;
    },
    handleImageOut() {
      this.isHovered = false;
    },
    handleTextHover() {
      this.isHovered = true;
      this.isTextHovered = true;
    },
    handleTextOut() {
      this.isHovered = false;
      this.isTextHovered = false;
    },
  },
  computed: {
    imageSizeClass() {
      return this.isHovered ? "scale-110" : "grayscale";
    },
    textClass() {
      return {
        "text-enlarge-enter-active": this.isHovered,
        "text-enlarge-leave-active": this.isHovered,
        "text-enlarge-enter-from": this.isHovered,
        "text-enlarge-leave-to": this.isHovered,
      };
    },
  },
};
</script>

<style scoped>
.max-h-custom {
  height: 70vh;
}

.text-enlarge-enter-active,
.text-enlarge-leave-active {
  transition: transform 0.5s;
}

.text-enlarge-enter-from,
.text-enlarge-leave-to {
  transform: scale(1.1);
}

.text-enlarge-enter-to,
.text-enlarge-leave-from {
  transform: scale(1);
}
</style>
