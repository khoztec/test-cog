<template>
  <div class="h-screen grid grid-cols-4 gap-2 content-center">
    <div></div>
    <div class="col-span-3 p-20">
      <div class="border-contact mt-10">
        <div class="bg-white/50 rounded-md p-16 m-10">
          <h1 class="text-4xl my-3">Type your beautiful name</h1>
          <input
            type="text"
            class="bg-gray-300 p-4 text-center rounded-md w-full my-3"
            placeholder="in here of course :)"
            v-model="name"
          />
          <h1 class="text-4xl my-3">Protect your email address</h1>
          <input
            type="text"
            class="bg-gray-300 p-4 text-center rounded-md w-full my-3"
            placeholder="but not in here :)"
            v-model="email"
          />
          <button class="w-full bg-primary text-white rounded-lg px-8 py-4 text-lg font-semibold my-3 custom-hover">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ContactUs",
  data() {
    return {
      name: '',
      email: ''
    };
  },
};
</script>

  <style scoped>
.border-contact {
  padding: 15px 0;
  float: left;
  position: relative;
  font-weight: 900;
  border: none;
  box-sizing: content-box;
  border: 2px solid transparent;
}

.border-contact::before,
.border-contact::after {
  display: block;
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
}

.border-contact::before {
  top: -2px;
  left: -2px;
  border-top: 10px solid #ffb800;
  border-left: 10px solid #ffb800;
  transition: 0.5s all;
  width: 25%;
  height: 25%;
}

.border-contact::after {
  bottom: -2px;
  right: -2px;
  border-bottom: 10px solid #ffb800;
  border-right: 10px solid #ffb800;
  transition: 0.5s all;
  width: 25%;
  height: 25%;
}

.custom-hover:hover {
  background-color: rgba(255, 255, 255, 0.75);
  color: #606060;
  transition: 0.2s ease-in-out;
}
</style>