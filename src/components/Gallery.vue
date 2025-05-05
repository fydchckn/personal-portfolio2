<template>
    <section class="bg-color-bg text-prim-text pb-[112px]">
      <div class="main-container" data-aos="flip-left"  >
        <div class="text-center mb-[80px]">
          <h2 class="font-medium text-[36px] md:text-[48px]">Project Showcase</h2>
          <p>Explore my creative journey through these standout projects.</p>
        </div>

        <div class="splide">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <img src="../assets/poke.png" class="w-full h-full max-h-[736px] object-cover rounded-md rounded-b-md" alt="Sample 2" />
              </li>
              <li class="splide__slide">
                <img src="../assets/gym.png" class="w-full h-full max-h-[736px] object-cover rounded-md rounded-b-md" alt="Sample 2" />
              </li>
              <li class="splide__slide">
                <img src="../assets/juicyshop.png" class="w-full h-full max-h-[736px] object-cover rounded-md rounded-b-md" alt="Sample 1" />
              </li>
              <li class="splide__slide">
                <img src="../assets/responsiveweb.png" class="w-full h-full max-h-[736px] object-cover rounded-md rounded-b-md" alt="Sample 2" />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </template>
  
  <script>
  import Splide from '@splidejs/splide'
  import '@splidejs/splide/dist/css/splide.min.css'
  
  export default {
    name: "Gallery",
    mounted() {
      new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        speed: 2000,
        autoplay: true,
      }).mount()
    },
  }
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  