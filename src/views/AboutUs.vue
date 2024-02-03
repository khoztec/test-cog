<template>
  <div class="h-screen grid grid-cols-4 gap-2 content-center">
    <div>01</div>
    <div class="col-span-3 p-20">
      <div class="border-content mt-10">
        <div class="bg-white/50 rounded-md p-16 m-10 mr-0 text-caption">
          <h1 class="text-5xl mb-8">Our People Come First</h1>
          <h3 class="text-3xl leading-normal">We are independently owned, strategic creative agency forever curious and ready to transform the way business is done.</h3>
        </div>
      </div>
      <button class="float-right bg-primary text-secondary hover:bg-white/75 hover:text-gray-700 rounded-lg px-8 py-3 text-xl font-bold">
        Learn More
      </button>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
  };
  </script>

  <style scoped>
.border-content {
  padding: 15px 0;
  float: left;
  position: relative;
  font-weight: 900;
  border: none;
  box-sizing: content-box;
  border: 2px solid transparent;
}

.border-content::before, .border-content::after {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
}

.border-content::before {
    top: -2px;
    left: -2px;
    border-top: 10px solid #FFB800;
    border-left: 10px solid #FFB800;
    transition: 0.5s all;
    width: 2rem;
    height: 2rem;
}
.border-content:hover::before {
  border-top: 10px solid #FFB800;
    border-left: 10px solid #FFB800;
    width: 5rem;
    height: 5rem;
}
</style>