<template>
  <section class="text-prim-text bg-secondary py-[112px]">
    <div class="main-container">
      <div class="mb-[80px]">
        <h2 class="font-medium text-[36px] md:text-[48px]">Client Feedback</h2>
        <p>
          Kent's work exceeded our expectations and delivered amazing results.
        </p>
      </div>

      <div class="relative">
        <div class="splide splide2" ref="splideRef">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <img src="../assets/Stars (1).svg" class="w-[116px] h-[18.89px]" alt="Stars" />
                <p>
                  "Kent is a true professional who brings creativity to every
                  project."
                </p>
                <div>
                  <div class="flex items-center gap-[20px]">
                    <div>
                      <img src="../assets/Avatar Image.png" alt="Avatar" class="w-[56px] h-[56px] rounded-full" />
                    </div>
                    <div>
                      <p class="font-semibold">Alice Johnson</p>
                      <p class="text-sm">Project Manager, XYZ Corp</p>

                      <img src="../assets/logo.svg" class="w-[120px] h-[48px]" alt="Company Logo" />
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="splide__slide">
                <img src="../assets/Stars (1).svg" class="w-[116px] h-[18.89px]" alt="Stars" />
                <p>
                  "Working with Kent was a game changer. His ideas took our
                  brand to the next level."
                </p>
                <div>
                  <div class="flex items-center gap-[20px]">
                    <div>
                      <img src="../assets/Avatar Image2.png" alt="Avatar" class="w-[56px] h-[56px] rounded-full" />
                    </div>
                    <div>
                      <p class="font-semibold">Michael Lee</p>
                      <p class="text-sm">Creative Director, ABC Studio</p>
                      <img src="../assets/logo.svg" class="w-[120px] h-[48px]" alt="Company Logo" />

                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="splide__slide">
                <img src="../assets/Stars (1).svg" class="w-[116px] h-[18.89px]" alt="Stars" />
                <p>
                  "Working with Kent was a game changer. His ideas took our
                  brand to the next level."
                </p>
                <div>
                  <div class="flex items-center gap-[20px]">
                    <div>
                      <img src="../assets/Avatar Image.png" alt="Avatar" class="w-[56px] h-[56px] rounded-full" />
                    </div>
                    <div>
                      <p class="font-semibold">Michael Lee</p>
                      <p class="text-sm">Creative Director, ABC Studio</p>
                      <img src="../assets/logo.svg" class="w-[120px] h-[48px]" alt="Company Logo" />

                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="absolute w-full bottom-[-70px] flex justify-between items-center px-4 z-10">
            <!-- Pagination (LEFT) -->
            <div ref="paginationWrapper" class="flex items-center gap-2"></div>

            <!-- Arrows (RIGHT) -->
            <div class="flex gap-4">
              <button @click="goPrev" class="px-2 py-2 bg-[#423830] text-prim-text rounded-full opacity-0.7 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>                
              </button>
              <button @click="goNext" class="px-2 py-2 bg-[#423830] text-prim-text rounded-full opacity-0.7 shadow ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Splide from "@splidejs/splide";
  import "@splidejs/splide/dist/css/splide.min.css";

  export default {
    name: "Testimonial",
    mounted() {
      this.splideInstance = new Splide(this.$refs.splideRef, {
        type: "loop",
        perPage: 2,
        speed: 2000,
        autoplay: false,
        arrows: false,
        pagination: true,
        classes: {
          pagination: "splide__pagination flex gap-2",
          page: "splide__pagination__page bg-white w-3 h-3 rounded-full opacity-0.6 hover:opacity-100 transition-all duration-300",
        },
      }).mount();
      const generatedPagination = this.$refs.splideRef.querySelector(
        ".splide__pagination"
      );
      if (generatedPagination && this.$refs.paginationWrapper) {
        this.$refs.paginationWrapper.appendChild(generatedPagination);
        generatedPagination.style.position = "static";
        generatedPagination.style.margin = "0";
        generatedPagination.style.justifyContent = "flex-start";
      }
    },
    methods: {
      goNext() {
        this.splideInstance.go(">");
      },
      goPrev() {
        this.splideInstance.go("<");
      },
    },
  };
</script>

<style scoped>

</style>