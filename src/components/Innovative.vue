<template>
  <section class="bg-color-bg py-[112px]">
  <div class="main-container w-full z-0" data-aos="fade-up">
    <div class="text-prim-text space-y-1 mb-[80px] flex flex-col justify-center items-center text-center">
      <p>Technical Skills</p>
      <h2 class="text-[36px] md:text-[48px]">Full-Stack Developer Expertise</h2>
      <p>Crafting robust, responsive, and scalable solutions using Vue.js, Tailwind CSS, PHP, Vanilla JS, and Java.</p>
    </div>

    <div class="flex flex-col gap-[32px] md:flex-row md:justify-center px-4">

      <div class="w-full max-w-[640px] text-prim-text">

        <!-- Card 1 -->
        <div class="flex flex-col overflow-hidden rounded-md mb-[24px] transition-transform duration-300 ease-in-out hover:scale-[1.03]">
          <div class="h-auto space-y-6 p-[48px] bg-tertiary text-left">
            <p>Front-End Stack</p>
            <h3 class="font-medium text-[32px] md:text-[40px]">Vue.js & Tailwind CSS</h3>
            <p>
              Developing modern, responsive user interfaces with Vue.js and styled with Tailwind CSS.
            </p>
            <div class="flex flex-wrap gap-5 justify-start">
              <button class="animated-button"><span>Explore</span><span></span></button>
              <button class="animated-button"><span>View</span><span></span></button>
            </div>
          </div>
          <div class="h-[360px]">
            <img src="../assets/vuetail.jpg" alt="" class="w-full h-full object-cover rounded-b-md">
          </div>
        </div>

        <!-- Cards 2 and 3 -->
        <div class="flex flex-col gap-[24px] md:flex-row md:h-[340px] md:mt-[32px]">

          <div class="p-[24px] space-y-5 bg-tertiary rounded-md flex-1 transition-transform duration-300 ease-in-out hover:scale-[1.03]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">...</svg>
            <h5 class="text-[20px] md:text-[24px]">Interactive UI with Vanilla JS</h5>
            <p>Bringing interfaces to life using lightweight, pure JavaScript techniques.</p>
            <button class="animated-button"><span>Showcase</span><span></span></button>
          </div>

          <div class="p-[24px] space-y-5 bg-tertiary rounded-md flex-1 transition-transform duration-300 ease-in-out hover:scale-[1.03]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">...</svg>
            <h5 class="text-[20px] md:text-[24px]">Database & PHP Backend</h5>
            <p>Structuring dynamic server-side logic and MySQL management with PHP.</p>
            <button class="animated-button"><span>Manage</span><span></span></button>
          </div>
        </div>
      </div>

      <div class="w-full max-w-[640px] text-prim-text flex flex-col gap-[32px]">

        <!-- Card 4 -->
        <div class="flex flex-col md:flex-row h-auto bg-tertiary rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
          <div class="md:w-1/2">
            <img src="../assets/java2.jpg"
              class="w-full h-full object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none">
          </div>
          <div class="md:w-1/2 p-[24px] space-y-5">
            <h5 class="font-medium text-[20px] md:text-[24px]">Java & Backend Integration</h5>
            <p>Developing secure backend logic and integrating scalable Java-based services.</p>
            <div class="flex gap-5">
              <button class="animated-button"><span>Discover</span><span></span></button>
            </div>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="bg-tertiary rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
          <div class="h-auto p-[24px] md:p-[48px] space-y-6">
            <h3 class="font-medium text-[20px] md:text-[24px]">Debugging & Optimization</h3>
            <p>Identifying bottlenecks and refining performance with efficient, solution-driven debugging.</p>
            <div class="flex flex-wrap gap-5">
              <button class="animated-button"><span>Fix</span><span></span></button>
              <button class="animated-button"><span>Improve</span><span></span></button>
            </div>
          </div>
          <div class="h-[360px]">
            <img src="../assets/debug1.jpg" class="w-full h-full object-cover">
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


</template>

<script>
export default {
  name: "Innovative",
}
</script>

<style></style>